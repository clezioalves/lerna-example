'use strict';

const billingCustomer = require('..');
const assert = require('assert').strict;

assert.strictEqual(billingCustomer(), 'Hello from billingCustomer');
console.info('billingCustomer tests passed');
