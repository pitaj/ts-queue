"use strict";
const assert_1 = require("assert");
const queue_1 = require("./queue");
const q = queue_1.default();
q.enqueue('first').enqueue('second').enqueue('third');
assert_1.strictEqual(q.dequeue(), 'first');
assert_1.strictEqual(q.dequeue(), 'second');
assert_1.strictEqual(q.dequeue(), 'third');
q.enqueue('a').enqueue('b').enqueue('c');
assert_1.strictEqual(q.peek(), 'a');
assert_1.deepEqual(q.toArray(), ['a', 'b', 'c']);
console.log('Tests completed without failure');
//# sourceMappingURL=test.js.map