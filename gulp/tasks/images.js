export const images = () => {
    return app.gulp.src(app.paths.src.images)
        .pipe(app.gulp.dest(app.paths.build.images))
}
