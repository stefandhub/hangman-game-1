const sum = require('./script');

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(sum(1, 2, 3)).toBe(6);
});
