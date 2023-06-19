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
        images: `${buildPath}/assets/images`,
        files: `${buildPath}`
    },
    src: {
        images: `${srcPath}/assets/images/*.*`,
        files: `${srcPath}/*.*`
    },
    watch: {
        files: `${srcPath}/**/*.*`
    },
}