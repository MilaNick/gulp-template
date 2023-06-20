import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // сжатие css файла
import webpcss from 'gulp-webpcss'; // вывод webp изображений
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries';
// группировка медиа запросов

const sass = gulpSass(dartSass);
export const scss = () => {
    return app.gulp.src(app.paths.src.scss, { sourcemaps: true }) // собираем стили из модулей и хотим знать в каком файле написан стиль
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title:'SCSS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss(
            {
                webpClass: '.webp',
                noWebpClass: '.no-webp',
            }
        ))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
            cascade: true,
        }))
        // Раскоментировать, если НЕ нужен минимизированный файл
        // .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.paths.build.css))
        .pipe(app.plugins.browsersync.stream())
}
