'use strict';

const vendas = require('..');
const assert = require('assert').strict;

assert.strictEqual(vendas(), 'Hello from vendas');
console.info('vendas tests passed');
