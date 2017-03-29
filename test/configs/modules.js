import fixture from '../fixtures/module.coffee';

test('Modules', () => {
  expect(fixture).toEqual(42);
});
