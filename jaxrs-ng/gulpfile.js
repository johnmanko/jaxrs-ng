const {
  src,
  dest,
  series
} = require('gulp');
var shell = require('gulp-shell');
var path = require('path');
var fs = require('fs');
var config = {
  basePath: './src',
  buildPath: 'build/dist'
};
config.cssPath = config.basePath + '/assets/css';

function clean() {
  return del([config.buildPath]);
}
const ngBuild = shell.task(['ng build', '--prod=true', '--aot=true', '--build-optimizer=true'].join(' '));
ngBuild.displayName = 'ngBuild';
const ngServe = shell.task(['ng serve', '--base-href /', '--proxy-config proxy.conf.js', '--host 0.0.0.0', '--disableHostCheck'].join(' '));
ngServe.displayName = 'ngServe';
const complete = function () {
  return new Promise(function (resolve, reject) {
    console.log("Tasks completed");
    resolve();
  });
};
exports.clean = series(clean);
exports.ngBuild = series(ngBuild);
exports.ngServe = series(ngServe);

