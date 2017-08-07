const StackArray = require("./stack-array");
const StackList = require("./stack-list");

const impls = [["StackArray", StackArray], ["StackList", StackList]];

impls.forEach(([name, Stack]) => {
  describe(name, () => {
    describe("#top", () => {
      test("should return top of the stack", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.top()).toBe(4);
      });

      test("should return undefined for an empty stack", () => {
        const stack = new Stack();
        expect(stack.top()).toBe(undefined);
      });
    });

    describe("#isEmpty", () => {
      test("should return true for an empty list", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(1);
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
      });

      test("should return false for not an empty list", () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
      });
    });

    describe("#push", () => {
      test("should add new item to a stack", () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.top()).toBe(1);
      });
    });

    describe("#pop", () => {
      test("should return and remove head of the stack", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
      });
    });
  });
});
