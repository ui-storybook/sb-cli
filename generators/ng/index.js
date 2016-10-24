var mergeDirs = require('merge-dirs').default;
var helpers = require('../../lib/helpers');
var path = require('path');

mergeDirs(path.resolve(__dirname, 'template/'), 'sb', 'overwrite');

var packageJson = helpers.getPackageJson();

packageJson.devDependencies = packageJson.devDependencies || {};
packageJson.devDependencies['ui-storybook'] = '^1.0.5';
packageJson.devDependencies['ng-annotate-webpack-plugin'] = '0.1.3';
packageJson.devDependencies['ng-annotate-loader'] = '0.0.10';
packageJson.devDependencies['webpack-hot-middleware'] = '2.13.0';

packageJson.scripts = packageJson.scripts || {};
packageJson.scripts['sb'] = 'node ./sb/.webpack/server.js --NODE_ENV=dev';
packageJson.scripts['sb-build'] = 'webpack --config ./sb/.webpack/webpack.build.babel.js --NODE_ENV=production';
packageJson.scripts['sb-publish'] = 'node sb/.script/ghpages.js';

helpers.writePackageJson(packageJson);
