'use strict';

const billingProduct = require('..');
const assert = require('assert').strict;

assert.strictEqual(billingProduct(), 'Hello from billingProduct');
console.info('billingProduct tests passed');
