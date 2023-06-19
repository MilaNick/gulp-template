export const css = () => {
    return app.gulp.src(app.paths.src.css)
        .pipe(app.gulp.dest(app.paths.build.css))
}
