var types = require('./project_types.js');
var helpers = require('./helpers');
var path = require('path');
var fs = require('fs');

module.exports = function detect(options) {

  var packageJson = helpers.getPackageJson();

  function withTypescript(packageJson) {
    return (packageJson.devDependencies && packageJson.devDependencies['typescript']
      || packageJson.jspm && packageJson.jspm.devDependencies['typescript']);
  }

  function isNG(packageJson) {
    return (
      packageJson.dependencies && packageJson.dependencies.angular
      || packageJson.devDependencies && packageJson.devDependencies.angular
      || packageJson.jspm && packageJson.jspm.dependencies.angular
    );
  }

  function isHasSB(options, packageJson) {
    return (!options.force && packageJson.devDependencies && packageJson.devDependencies['ui-storybook']);
  }

  if (!packageJson) {
    return types.undetected;
  }

  if (isHasSB(options, packageJson)) {
    return types.has_sb;
  }

  if (isNG(packageJson)) {
    if (withTypescript(packageJson)) {
      return types.ng_ts;
    }
    return types.ng;
  }

  return types.undetected;

};
