const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!
const testItem = { name: "item", durability: 50, enhancement: 10 };

describe("enhancer.js", () => {
  it("should run without errors", () => {
    expect(true).toBe(true);
  });
  describe("repair", () => {
    it("returns a new item with durability restored to 100", () => {
      expect(repair(testItem).durability).toBe(100);
    });
  });
  describe("");
});
