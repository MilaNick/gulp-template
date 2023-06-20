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
        fonts: `${buildPath}/assets/fonts`,
        js: `${buildPath}/assets/scripts`,

    },
    src: {
        html: `${srcPath}/*.*`,
        scss: `${srcPath}/assets/styles/index.scss`,
        images: `${srcPath}/assets/images/*.{jpeg,jpg,png,gif,webp}`,
        svg: `${srcPath}/assets/images/*.svg`,
        fonts: `${srcPath}/assets/fonts/`,
        js: `${srcPath}/assets/scripts/index.js`,
    },
    watch: {
        scss: `${srcPath}/assets/styles/index.scss`,
        images: `${srcPath}/assets/images/*.{jpeg,jpg,png,gif,webp,svg}`,
        js: `${srcPath}/assets/scripts/index.js`,
        all: `${srcPath}/**/*.*`
    },
}
