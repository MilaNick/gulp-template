import fileInclude from 'gulp-file-include';

export const copy = () => {
    return app.gulp.src(app.paths.src.files)
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'assets/images/'))
        .pipe(app.gulp.dest(app.paths.build.files))
}
