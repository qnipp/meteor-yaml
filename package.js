Package.describe({
  name: 'qnipp:yaml',
  version: '0.1.0',
  summary: 'Compiler plugin to import YAML files wih endings .yaml and .yml',
  git: 'https://github.com/qnipp/meteor-yaml',
  documentation: 'README.md',
});

const npmDependencies = {
  'js-yaml': '3.13.1',
};

Npm.depends(npmDependencies);

Package.registerBuildPlugin({
  name: 'yaml',
  use: ['caching-compiler@1.0.0'],
  sources: ['plugin.js'],
  npmDependencies,
});

Package.onUse(function(api) {
  api.versionsFrom('1.9');
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('ecmascript');
  api.mainModule('yaml.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('qnipp:yaml');
  api.mainModule('tests.js');
});
