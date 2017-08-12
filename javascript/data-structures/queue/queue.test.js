const QueueList = require("./queue-list");

const impls = [["QueueList", QueueList]];

impls.forEach(([name, Queue]) => {
  describe(name, () => {
    describe("#isEmpty", () => {
      test("should return true when the queue is empty", () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
      });

      test("should return false when the queue is not empty", () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
      });
    });

    describe("#enqueue / #dequeue", () => {
      test("should add and remove items to the queue in the correct order", () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect([1, 2, 3].map(i => queue.dequeue())).toMatchObject([1, 2, 3]);
        queue.enqueue(6);
        queue.enqueue(7);
        expect([1, 2, 3].map(i => queue.dequeue())).toMatchObject([4, 5, 6]);
        expect(queue.isEmpty()).toBe(false);
      });
    });
  });
});
