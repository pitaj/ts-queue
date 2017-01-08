import { strictEqual, deepEqual } from 'assert';
import Queue from './queue';

const q = Queue<any>();

q.enqueue('first').enqueue('second').enqueue('third');

strictEqual(q.dequeue(), 'first');
strictEqual(q.dequeue(), 'second');
strictEqual(q.dequeue(), 'third');

q.enqueue('a').enqueue('b').enqueue('c');
strictEqual(q.peek(), 'a');

deepEqual(q.toArray(), ['a', 'b', 'c']);

console.log('Tests completed without failure');
