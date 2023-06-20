import gulp from 'gulp';

import { copy } from './gulp/tasks/copy.js';
// import { fonts } from './gulp/tasks/fonts.js';
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { paths } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';

global.app = {
    gulp,
    paths,
    plugins,
}

const watcher = () => {
    gulp.watch(paths.watch.all, copy);
    gulp.watch(paths.watch.images, images);
    gulp.watch(paths.watch.js, js);
    gulp.watch(paths.watch.scss, scss);
}

const mainTasks = gulp.parallel(images, js, scss, copy)
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher))

gulp.task('default', dev)
