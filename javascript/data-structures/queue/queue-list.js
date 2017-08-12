const SinglyLinkedList = require("../linked-list/singly-linked-list");

/**
 * Simple implementation of a Queue using Linked List.
 * Queue is also known as FIFO. First-in-First-out.
 *
 * enqueue: O(1)
 * dequeue: O(1)
 * isEmpty: O(1)
 */
module.exports = class Queue {
  constructor() {
    this.values = new SinglyLinkedList();
  }

  /**
   * Returns true if a queue is empty.
   *
   * @return {Boolean}
   */
  isEmpty() {
    return this.values.isEmpty();
  }

  /**
   * Adds new item to a queue.
   *
   * @param {*} item
   * @return {undefined}
   */
  enqueue(item) {
    this.values.push(item);
  }

  /**
   * Returns the least recent added item from a queue and removes it.
   *
   * @return {*}
   */
  dequeue() {
    return this.values.shift();
  }
};
