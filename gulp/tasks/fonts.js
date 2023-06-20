// import webpackStream from "webpack-stream";
import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
    // ищем файлы шрифтов .otf
    return app.gulp.src(`${app.paths.src.fonts}*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FONTS',
                message: 'Error: <%= error.message %>'
            })
        ))
        // конвертируем в .ttf
        .pipe(fonter({
            formats: ['ttf']
        }))
        // выгружаем в исходную папку
        .pipe((app.gulp.dest(`${app.paths.src.fonts}`)))
}

export const ttfToWoff = () => {
    // ищем файлы шрифтов .ttf
    return app.gulp.src(`${app.paths.src.fonts}*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FONTS',
                message: 'Error: <%= error.message %>'
            })
        ))
        // конвертируем в .woff
        .pipe(fonter({
            formats: ['woff']
        }))
        // выгружаем в папку с результатом
        .pipe(app.gulp.dest(`${app.paths.build.fonts}`))
        // ищем файлы шрифтов .ttf
        .pipe(app.gulp.src(`${app.paths.src.fonts}*.ttf`))
        // конвертируем в woff2
        .pipe(ttf2woff2())
        // выгружаем в папку с результатом
        .pipe(app.gulp.dest(`${app.paths.build.fonts}`))
}
