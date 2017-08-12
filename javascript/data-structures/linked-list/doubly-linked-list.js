/**
 * Simple implementation of a Singly-Linked List.
 *
 * isEmpty:      O(1)
 * getSize:      O(1)
 * front:        O(1)
 * back:         O(1)
 * unshift:      O(1)
 * shift:        O(1)
 * push:         O(1)
 * pop:          O(n)
 * valueAt:      O(n)
 * indexOf:      O(n)
 * delete:       O(n)
 * deleteValue:  O(n)
 * insert:       O(n)
 * reverse:      O(n)
 */
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Looks up for a list item at given index.
   *
   * @param {Number} index
   * @return {ListItem|undefined}
   */
  _findByIndex(index) {
    if (!this.head || index >= this.size || index < 0) return;
    if (index === 0) return this.head;
    if (index === this.size - 1) return this.tail;

    let listItem = this.head;
    let curIndex = 0;

    while (curIndex < index) {
      listItem = listItem.next;
      curIndex++;
    }

    return listItem;
  }

  /**
   * Searches for the first item in a list that has same data as provided.
   *
   * @param {*} data
   * @return {Number}
   */
  _findIndexByValue(data) {
    if (!this.head) return -1;

    let index = 0;
    let cur = this.head;
    while (cur) {
      if (cur.data === data) {
        return index;
      }
      cur = cur.next;
      index++;
    }
  }

  /**
   * Returns true of head is null.
   *
   * @return {Boolean}
   */
  isEmpty() {
    return !this.head;
  }

  /**
   * Returns list size.
   *
   * @return {Number}
   */
  getSize() {
    return this.size;
  }

  /**
   * @return {*|undefined}
   */
  front() {
    if (this.head) {
      return this.head.data;
    }
  }

  /**
   * @return {*|undefined}
   */
  back() {
    if (this.tail) {
      return this.tail.data;
    }
  }

  /**
   * Creates new ListItem from the data provided
   * and prepends it to the beginning of the list.
   *
   * @param {*} data
   * @return {undefined}
   */
  unshift(data) {
    const listItem = new ListItem(data, this.head);
    this.size++;

    if (!this.head && !this.tail) {
      this.head = this.tail = listItem;
    } else {
      this.head.prev = listItem;
      this.head = listItem;
    }
  }

  /**
   * Takes first ListItem in the list and returns its data,
   * moves head to the next item.
   *
   * @return {*}
   */
  shift() {
    // In case of an empty list behave like native JavaScript array – return empty ListItem
    if (!this.head) return;

    this.size--;

    const data = this.head.data;

    // If list is going to be empty after shift assign head and tail to null,
    // otherwise move head to the next ListItem
    if (this.head.next === null) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    return data;
  }

  /**
   * Creates and pushes new ListItem to the end of the list.
   *
   * @param {*} data
   * @return {undefined}
   */
  push(data) {
    if (!this.head && !this.tail) {
      return this.unshift(data);
    }

    this.size++;

    const listItem = new ListItem(data, null, this.tail);
    this.tail.next = listItem;
    this.tail = listItem;
  }

  /**
   * Takes last ListItem in the list and returns it,
   * moves tail to the previous item.
   *
   * @return {*}
   */
  pop() {
    // In case of an empty list behave like native JavaScript array – return undefined
    if (!this.tail) return;

    this.size--;

    const data = this.tail.data;

    // If list is going to be empty after shift assign head and tail to null,
    // otherwise move head to the next ListItem
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
    }

    return data;
  }

  /**
   * Returns value of a list item at given index.
   *
   * @param {Number} index
   * @return {*|undefined}
   */
  valueAt(index) {
    const listItem = this._findByIndex(index);
    return listItem ? listItem.data : undefined;
  }

  /**
   * Checks if given data is in list and returns its index
   * if it is in list and -1 if it's not.
   *
   * @param {*} data
   * @return {Number}
   */
  indexOf(data) {
    let cur = this.head;
    let index = 0;

    while (cur) {
      if (cur.data === data) {
        return index;
      }
      cur = cur.next;
      index++;
    }

    return -1;
  }

  /**
   * Deletes given list item from a list.
   *
   * @param {Number} index
   * @return {undefined}
   */
  delete(index) {
    if (!this.head && !this.tail) {
      return;
    }

    const listItem = this._findByIndex(index);
    if (!listItem) {
      return;
    }

    if (this.head === listItem) {
      this.shift();
      return;
    }

    if (this.tail === listItem) {
      this.pop();
      return;
    }

    // Otherwise looking for item that has provided list item as its next item.
    listItem.prev.next = listItem.next;
    this.size--;
  }

  /**
   * Deletes the first item with given value.
   *
   * @param {*} data
   * @return {undefined}
   */
  deleteValue(data) {
    const listItemIndex = this._findIndexByValue(data);
    this.delete(listItemIndex);
  }

  /**
   * Inserts new list item at given index.
   *
   * @param {Number} index
   * @param {*} data
   * @return {undefined}
   */
  insert(index, data) {
    const listItem = this._findByIndex(index);
    if (!listItem) {
      throw new Error(`Index: "${index}" is out of range.`);
    }

    if (listItem === this.head) {
      return this.unshift(data);
    }

    const newListItem = new ListItem(data, listItem, listItem.prev);
    listItem.prev.next = newListItem;
    listItem.prev = newListItem;
    this.size++;
  }

  /**
   * Returns new list with item in revers order.
   *
   * @return {SingleLinkedList}
   */
  reverse() {
    const list = new DoublyLinkedList();
    while (this.head) {
      list.unshift(this.shift());
    }
    return list;
  }
}

class ListItem {
  constructor(data, next = null, tail = null) {
    this.data = data;
    this.next = next;
    this.prev = tail;
  }
}

module.exports = DoublyLinkedList;
