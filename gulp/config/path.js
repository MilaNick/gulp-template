import * as path from 'path';

const rootPath = path.basename(path.resolve());
const buildPath = './dist';
const srcPath = './src';

export const paths = {
    base: {
        build: buildPath,
        clean: buildPath,
        ftp: '',
        root: rootPath,
        src: srcPath,
    },
    build: {
        files: `${buildPath}`
    },
    src: {
        files: `${srcPath}/*.*`
    },
    watch: {
        files: `${srcPath}/*.*`
    },
}