import {
  compile,
  execute,
  getCompiler,
  getErrors,
  getModuleSource,
  getWarnings,
} from './helpers';

describe('loader', () => {
  it('should work', async () => {
    const compiler = getCompiler('simple.js');
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./foo.coffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should generate an error on broken code', async () => {
    const compiler = getCompiler('bar.js');
    const stats = await compile(compiler);

    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work and support CoffeeScript options', async () => {
    const compiler = getCompiler('simple.js', {
      bare: true,
      transpile: {
        presets: ['@babel/env'],
      },
    });
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./foo.coffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should throw an error on invalid CoffeeScript options', async () => {
    const compiler = getCompiler('simple.js', {
      bar: true,
      transpile: {
        presets: ['@babel/env1'],
      },
    });
    const stats = await compile(compiler);

    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work and generate source maps (take value from the `sourceMap` option)', async () => {
    const compiler = getCompiler('simple.js', { sourceMap: true });
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./foo.coffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work and not generate source maps (take value from the `sourceMap` option)', async () => {
    const compiler = getCompiler('simple.js', { sourceMap: false });
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./foo.coffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work and generate source maps (take value from the `compiler.devtool` option)', async () => {
    const compiler = getCompiler('simple.js', {}, { devtool: 'source-map' });
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./foo.coffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work and not generate source maps (take value from the `compiler.devtool` option)', async () => {
    const compiler = getCompiler('simple.js', {}, { devtool: false });
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./foo.coffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work and generate source maps (the `sourceMap` option prefer over the `compiler.devtool` option)', async () => {
    const compiler = getCompiler(
      'simple.js',
      { sourceMap: true },
      { devtool: false }
    );
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./foo.coffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work and ignore unknown CoffeeScript options', async () => {
    const compiler = getCompiler('simple.js', { unknown: true });
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./foo.coffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });

  it('should work for Literate CoffeeScript', async () => {
    const compiler = getCompiler('baz.js', { literate: true });
    const stats = await compile(compiler);
    const { source, sourceMap } = execute(
      getModuleSource('./baz.litcoffee', stats)
    );

    expect(source).toMatchSnapshot('source');
    expect(sourceMap).toMatchSnapshot('sourceMap');
    expect(getErrors(stats)).toMatchSnapshot('errors');
    expect(getWarnings(stats)).toMatchSnapshot('warnings');
  });
});
