/**
 * Simple implementation of a Stack using array.
 *
 * push: O(n) in worst case
 * top: O(1)
 * pop: O(n) in worst case
 * isEmpty: O(1)
 */
module.exports = class Stack {
  constructor() {
    this.values = [];
  }

  /**
   * Returns head of a stack.
   *
   * @return {*}
   */
  top() {
    return this.values[this.values.length - 1];
  }

  /**
   * Returns true if stack is empty.
   *
   * @return {Boolean}
   */
  isEmpty() {
    return !this.values.length;
  }

  /**
   * Adds new item to a stack.
   *
   * @param {*} item
   * @return {undefined}
   */
  push(item) {
    this.values.push(item);
  }

  /**
   * Returns and removes head of a stack.
   *
   * @return {*}
   */
  pop() {
    return this.values.pop();
  }
};
