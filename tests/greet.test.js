const { greet } = require('../src/lib/greet');

test('greet returns hello with name', () => {
  expect(greet('Alice')).toBe('hello Alice');
});

test('greet handles falsy', () => {
  expect(greet()).toBe('hello');
});
