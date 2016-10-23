#!/usr/bin/env node

/* eslint global-require: 0 */

var updateNotifier = require('update-notifier');
var program = require('commander');
var detect = require('../lib/detect');
var types = require('../lib/project_types');
var commandLog = require('../lib/helpers').commandLog;
var codeLog = require('../lib/helpers').codeLog;
var paddedLog = require('../lib/helpers').paddedLog;
var installDeps = require('../lib/helpers').installDeps;
var chalk = require('chalk');
var logger = console;

var pkg = require('../package.json');

program
  .version(pkg.version)
  .option('-f --force', 'Forcely install SB')
  .option('-Y --use-yarn', 'Use yarn to install deps')
  .parse(process.argv);

var welcomeMessage = 'sb-cli - the esyest way to add a SB to your project';
logger.log(chalk.inverse('\n ' + welcomeMessage + ' \n'));

var useYarn = Boolean(program.useYarn) || /\.yarn-cache/.test(__dirname);

var npmOptions = {
  useYarn: useYarn
};

var runStorybookCommand = useYarn ? 'yarn run sb' : 'npm run sb';

// Update notify code.
updateNotifier({
  pkg: pkg,
  updateCheckInterval: 1000 * 60 * 60 // every hour (we could increase this later on.)
}).notify();

var projectType;

var done = commandLog('Detecting project type');
try {
  projectType = detect({
    force: program.force
  });
} catch (ex) {
  done(ex.message);
  process.exit(1);
}
done();

switch (projectType) {
  case types.has_sb:
    logger.log();
    paddedLog('There seems to be a SB already available in this project.');
    paddedLog('Apply following command to force:\n');
    codeLog(['sb-create -f']);
    break;
  case types.ng:
    done = commandLog('Adding SB support to your "Angular App" project');
    require('../generators/ng');
    done();

    installDeps(npmOptions);

    logger.log('\nTo run your SB, type:\n');
    codeLog([runStorybookCommand]);
    logger.log('\nFor more information visit:', chalk.cyan('https://github.com/ui-storybook/sb'));
    break;
  case types.ng_ts:
    done = commandLog('Adding SB support to your "Angular App with Typescript" project');
    require('../generators/ng_ts');
    done();

    installDeps(npmOptions);

    logger.log('\nTo run your SB, type:\n');
    codeLog([runStorybookCommand]);
    logger.log('\nFor more information visit:', chalk.cyan('https://github.com/ui-storybook/sb'));
    break;
  case types.react:
    done = commandLog('Adding SB support to your "React App" project');
    require('../generators/react');
    done();

    installDeps(npmOptions);

    logger.log('\nTo run your SB, type:\n');
    codeLog([runStorybookCommand]);
    logger.log('\nFor more information visit:', chalk.cyan('https://github.com/ui-storybook/sb'));
    break;

  default:
    paddedLog('Unsupported Project type. [code: ' + projectType.toUpperCase() + ']. For now SB support only Angular 1.* projects.');
    paddedLog('If you want to start from scratch use boilerplate https://github.com/ui-storybook/sb-angular-boilerplate');
    paddedLog('Visit https://github.com/ui-storybook/sb for more information.');
}

// Add a new line for the clear visibility.
logger.log();
