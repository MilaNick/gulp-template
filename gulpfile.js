import gulp from 'gulp';

import { copy } from './gulp/tasks/copy.js';
import { paths } from './gulp/config/path.js';

global.app = {
    paths,
    gulp,
}

gulp.task('default', copy)
