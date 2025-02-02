'use strict';

const financeiro = require('..');
const assert = require('assert').strict;

assert.strictEqual(financeiro(), 'Hello from financeiro');
console.info('financeiro tests passed');
