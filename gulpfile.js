import gulp from 'gulp';

import { copy } from './gulp/tasks/copy.js';
import { css } from './gulp/tasks/css.js';
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { paths } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';

global.app = {
    gulp,
    paths,
    plugins,
}

const watcher = () => {
    gulp.watch(paths.watch.all, copy);
}

const mainTasks = gulp.parallel(images, js, css, copy)
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher))

gulp.task('default', dev)
