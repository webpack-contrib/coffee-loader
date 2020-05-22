import {
  compile,
  execute,
  getCompiler,
  getErrors,
  getWarnings,
  readAsset,
} from './helpers';

describe('"sourceMap" option', () => {
  it('should not generate source maps with "Boolean" value equal "false"', async () => {
    const compiler = getCompiler('simple.js', {
      sourceMap: false,
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should generate source maps with "Boolean" value equal "true"', async () => {
    const compiler = getCompiler('simple.js', {
      sourceMap: true,
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });
});
