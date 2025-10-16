#!/usr/bin/env node
const { greet } = require('./lib/greet');

const name = process.argv[2] || 'world';
console.log(greet(name));
