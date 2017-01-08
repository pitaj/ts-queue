"use strict";
/**
 * TypeScript Queue implementation with singly-linked list. First in, first out
 */
function Queue() {
    class Node {
        constructor(value) {
            this.value = value;
        }
    }
    // highest priority item
    let front;
    // lowest priority item
    let back;
    // current queue length
    let length = 0;
    return {
        get length() {
            return length;
        },
        enqueue(item) {
            const node = new Node(item);
            if (length === 0) {
                front = node;
            }
            else {
                back.next = node;
            }
            back = node;
            length += 1;
            return this;
        },
        dequeue() {
            if (length === 0) {
                return;
            }
            const node = front;
            front = node.next;
            length -= 1;
            return node.value;
        },
        peek() {
            if (length === 0) {
                return;
            }
            return front.value;
        },
        toArray() {
            const arr = [];
            let node = front;
            while (node) {
                arr.push(node.value);
                node = node.next;
            }
            return arr;
        },
        toString() {
            return this.toArray().join(', ');
        }
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Queue;
//# sourceMappingURL=queue.js.map