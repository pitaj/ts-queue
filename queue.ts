/**
 * TypeScript Queue implementation with singly-linked list. First in, first out
 */
function Queue<T>(): QueueInterface<T> {
  class Node {
    value: T;
    next: Node;
    constructor(value: T) {
      this.value = value;
    }
  }

  // highest priority item
  let front: Node;
  // lowest priority item
  let back: Node;
  // current queue length
  let length = 0;

  return {
    get length() {
      return length;
    },
    enqueue(item): QueueInterface<T> {
      const node = new Node(item);
      if (length === 0) {
        front = node;
      } else {
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

interface QueueInterface<T> {
  /**
   * Add an item to the queue at the place of least priority
   */
  enqueue(item: T): QueueInterface<T>;
  /**
   * Remove the highest priority item from the queue
   * and return that item
   */
  dequeue(): T;
  /**
   * Return highest priority item without removing it
   */
  peek(): T;
  /**
   * Current queue length
   */
  length: number;
  /**
   * Return an array of items in the queue 
   * sorted from highest to lowest priority
   */
  toArray(): T[];
}

export default Queue;
