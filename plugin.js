const yaml = Npm.require('js-yaml');

Plugin.registerCompiler(
  {
    extensions: ['yml', 'yaml'],
  },
  () => new YamlCachingCompiler(),
);

class YamlCachingCompiler extends CachingCompiler {
  constructor() {
    super({
      compilerName: 'yaml',
      defaultCacheSize: 1024 * 1024 * 10,
    });
  }
  getCacheKey(inputFile) {
    return inputFile.getSourceHash();
  }
  compileResultSize(compileResult) {
    return compileResult.length;
  }
  compileOneFile(inputFile) {
  try {
      const object = yaml.safeLoad(inputFile.getContentsAsString());
      return `module.exports = ${JSON.stringify(object)}`;
    } catch (e) {
      inputFile.error({
        message: e.reason,
        sourcePath: inputFile.getPathInPackage(),
        line: e.mark.line,
        column: e.mark.column,
      });

      return null;
    }
  }
  addCompileResult(inputFile, compileResult) {
    inputFile.addJavaScript({
      path: inputFile.getPathInPackage() + '.js',
      sourcePath: inputFile.getPathInPackage(),
      data: compileResult,
    });
  }
}
