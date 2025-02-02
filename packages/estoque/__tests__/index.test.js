'use strict';

const estoque = require('..');
const assert = require('assert').strict;

assert.strictEqual(estoque(), 'Hello from estoque');
console.info('estoque tests passed');
