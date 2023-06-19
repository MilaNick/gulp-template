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
        html: `${buildPath}`,
        css: `${buildPath}/assets/styles`,
        images: `${buildPath}/assets/images`,
        js: `${buildPath}/assets/scripts`,

    },
    src: {
        html: `${srcPath}/*.*`,
        css: `${srcPath}/assets/styles/app.min.css`,
        images: `${srcPath}/assets/images/*.*`,
        js: `${srcPath}/assets/scripts/app.min.js`,
    },
    watch: {
        all: `${srcPath}/**/*.*`
    },
}