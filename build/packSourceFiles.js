// 复制源文件, 以支持babel-plugin-import的源文件引入加载
const path = require('path');
const fs = require('fs-extra');

const sourceDir = path.resolve(__dirname, '..', 'src');
const packageDir = path.resolve(__dirname, '..', 'package', 'src');

console.log('build source files')
fs.copySync(path.resolve(__dirname, '..', 'package.json'), path.resolve(__dirname, '..', 'package', 'package.json'));
fs.copySync(path.join(sourceDir, 'components'), path.join(packageDir, 'components'));
fs.copySync(path.join(sourceDir, 'directives'), path.join(packageDir, 'directives'));
fs.copySync(path.join(sourceDir, 'styles'), path.join(packageDir, 'styles'));
console.log('build source files completed')