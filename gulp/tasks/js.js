export const js = () => {
    return app.gulp.src(app.paths.src.js)
        .pipe(app.gulp.dest(app.paths.build.js))
}
