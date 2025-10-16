const { greet } = require('./lib/greet');

if (require.main === module) {
  console.log(greet('world'));
}

module.exports = { greet };
