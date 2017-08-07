const SinglyLinkedList = require("../linked-list/singly-linked-list");

/**
 * Simple implementation of a Stack using Singly-Linked List.
 *
 * push: O(1)
 * top: O(1)
 * pop: O(1)
 * isEmpty: O(1)
 */
module.exports = class Stack {
  constructor() {
    this.values = new SinglyLinkedList();
  }

  /**
   * Returns head of a stack.
   *
   * @return {*}
   */
  top() {
    return this.values.front();
  }

  /**
   * Returns true if stack is empty.
   *
   * @return {Boolean}
   */
  isEmpty() {
    return !this.values.head;
  }

  /**
   * Adds new item to a stack.
   *
   * @param {*} item
   * @return {undefined}
   */
  push(item) {
    this.values.unshift(item);
  }

  /**
   * Returns and removes head of a stack.
   *
   * @return {*}
   */
  pop() {
    return this.values.shift();
  }
};
