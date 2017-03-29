import fs from 'fs';
import path from 'path';
import { runLoaders } from 'loader-runner';

function runLoader(options, file, cb) {
  runLoaders({
    resource: path.resolve(__dirname, 'fixtures', `${file}`),
    loaders: [
      {
        loader: path.resolve(__dirname, '..', 'loader'),
        options,
      },
    ],
    context: { emitFile: () => {} },
    readResource: fs.readFile.bind(fs),
  }, (err, result) => {
    if (err) return cb(err);

    return cb(null, result);
  },
  );
}

test('Coffee Loader', () => {
  test('compile', (cb) => {
    runLoader({}, 'index.coffee', (err, result) => {
      expect(result).toBeDefined();

      cb(err);
    });
  });

  test('literate', (cb) => {
    runLoader({ literate: true }, 'index.coffee.md', (err, result) => {
      expect(result).toBeDefined();

      cb(err);
    });
  });

  test('maps', (cb) => {
    runLoader({ sourceMap: true }, 'index.coffee', (err, result, map) => {
      expect(map).toBeDefined();
      expect(result).toBeDefined();

      cb(err);
    });
  });
});
