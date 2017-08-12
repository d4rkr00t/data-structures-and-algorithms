const LinkedList = require("./singly-linked-list");
const DoublyLinkedList = require("./doubly-linked-list");

const impls = [
  ["Singly-Linked List", LinkedList],
  ["Doubly-Linked List", DoublyLinkedList]
];

impls.forEach(([name, LinkedList]) => {
  describe(name, () => {
    describe("#constructor", () => {
      test("should create new instance of a LinkedList", () => {
        expect(new LinkedList()).toBeInstanceOf(LinkedList);
      });
    });

    describe("#size", () => {
      test("should return correct size", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        list.push(4);
        list.shift();
        list.shift();
        list.push(5);
        list.push(6);
        list.pop();
        expect(list.getSize()).toBe(3);
      });
    });

    describe("#isEmpty", () => {
      test("should return true if list is empty", () => {
        const list = new LinkedList();
        expect(list.isEmpty()).toBe(true);
      });

      test("should return false if list isn't empty", () => {
        const list = new LinkedList();
        list.unshift(1);
        expect(list.isEmpty()).toBe(false);
      });
    });

    describe("#front", () => {
      test("should return data of the head of the list", () => {
        const list = new LinkedList();
        list.unshift(1);
        expect(list.front()).toBe(1);
      });

      test("should return undefined if list is empty", () => {
        const list = new LinkedList();
        expect(list.front()).toBe(undefined);
      });
    });

    describe("#back", () => {
      test("should return data of the head of the list", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        expect(list.back()).toBe(1);
      });

      test("should return undefined if list is empty", () => {
        const list = new LinkedList();
        expect(list.back()).toBe(undefined);
      });
    });

    describe("#unshift", () => {
      test("should prepend element to the beginning of the list", () => {
        const list = new LinkedList();
        list.unshift(1);
        expect(list.head.data).toBe(1);
        list.unshift(2);
        expect(list.head.data).toBe(2);
        expect(list.head.next.data).toBe(1);
      });
    });

    describe("#shift", () => {
      test("should return first item in a list and move head to the next (1 item list)", () => {
        const list = new LinkedList();
        list.unshift(1);
        expect(list.shift()).toBe(1);
        expect(list.head).toBe(null);
      });

      test("should return first item in a list and move head to the next", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        expect(list.shift()).toBe(3);
        expect(list.head.data).toBe(2);
      });
    });

    describe("#push", () => {
      test("should add item to the end of the list", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.push(2);
        expect(list.head.data).toBe(1);
        expect(list.tail.data).toBe(2);
      });
    });

    describe("#pop", () => {
      test("should return last item in a list and move tail to previous item (1 item list)", () => {
        const list = new LinkedList();
        list.unshift(1);
        expect(list.pop()).toBe(1);
        expect(list.tail).toBe(null);
      });

      test("should return last item in a list and move tail to previous item", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        expect(list.pop()).toBe(1);
        expect(list.tail.data).toBe(2);
      });
    });

    describe("valueAt", () => {
      test("should return list item value at given index", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        expect(list.valueAt(1)).toBe(2);
      });
      test("should return undefined if index is outside of the list", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        expect(list.valueAt(-1)).toBe(undefined);
        expect(list.valueAt(3)).toBe(undefined);
      });
    });

    describe("#indexOf", () => {
      test("should return list item for provided data", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        expect(list.indexOf(2)).toBe(1);
      });

      test("should return false if it's unable to find and item", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        expect(list.indexOf(4)).toBe(-1);
      });
    });

    describe("#delete", () => {
      test("should delete a list item from the list", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        list.delete(1);
        expect(list.getSize()).toBe(2);
        expect(list.indexOf(2)).toBe(-1);
      });
    });

    describe("#deleteValue", () => {
      test("should delete the first item with a value", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        list.unshift(2);
        list.deleteValue(2);
        expect(list.getSize()).toBe(3);
        expect(list.indexOf(2)).toBe(1);
      });
    });

    describe("#insert", () => {
      test("should insert item at given index", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        list.insert(2, 4);
        expect(list.getSize()).toBe(4);
        expect(list.valueAt(2)).toBe(4);
        expect(list.back()).toBe(1);
      });

      test("should throw an error if list is empty", () => {
        const list = new LinkedList();
        expect(() => {
          list.insert(2, 10);
        }).toThrow();
      });

      test("should throw an error if index is out of range", () => {
        const list = new LinkedList();
        list.unshift(1);
        expect(() => {
          list.insert(2, 10);
        }).toThrow();
      });
    });

    describe("#reverse", () => {
      test("should reverse list", () => {
        const list = new LinkedList();
        list.unshift(1);
        list.unshift(2);
        list.unshift(3);
        list.unshift(4);
        const newList = list.reverse();
        expect(newList.getSize()).toBe(4);
        expect(newList.indexOf(1)).toBe(0);
        expect(newList.indexOf(4)).toBe(3);
      });
    });
  });
});
