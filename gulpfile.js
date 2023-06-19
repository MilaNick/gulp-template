import gulp from 'gulp';

import { copy } from './gulp/tasks/copy.js';
import { images } from './gulp/tasks/images.js';
import { paths } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { reset } from './gulp/tasks/reset.js';

global.app = {
    gulp,
    paths,
    plugins,
}

const watcher = () => {
    gulp.watch(paths.watch.files, copy);
}

const mainTasks = gulp.parallel(images, copy)
const dev = gulp.series(reset, mainTasks, watcher)

gulp.task('default', dev)
