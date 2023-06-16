import gulp from 'gulp';

import { copy } from './gulp/tasks/copy.js';
import { paths } from './gulp/config/path.js';
import { reset } from './gulp/tasks/reset.js';

global.app = {
    paths,
    gulp,
}

const watcher = () => {
    gulp.watch(paths.watch.files, copy);
}
const dev = gulp.series(reset, copy, watcher)

gulp.task('default', dev)
