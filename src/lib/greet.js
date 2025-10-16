function greet(name) {
  if (!name) return 'hello';
  return `hello ${String(name)}`;
}

module.exports = { greet };
