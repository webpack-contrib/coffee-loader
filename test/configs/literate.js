const fixture = require('../fixtures/index.coffee.md');

test('Literate', () => {
  expect(fixture).toEqual(42);
});
