const enhancer = require("./enhancer.js");
// test away!

const testItem = { name: "item", durability: 50, enhancement: 10 };

describe("Enhancer tests", () => {
  it("Succeed function", () => {
    // Test with enhancement level 20 - expect no changes
    expect(
      enhancer.succeed({
        name: "testItem",
        durability: 50,
        enhancement: 20,
      })
    ).toEqual({
      name: "testItem",
      durability: 50,
      enhancement: 20,
    });

    // Test with enchancment level 15 - expect level up
    expect(
      enhancer.succeed({
        name: "testItem",
        durability: 20,
        enhancement: 15,
      })
    ).toEqual({
      name: "testItem",
      durability: 20,
      enhancement: 16,
    });
  });

  it("Fail function", () => {
    // Test when enhancement is less than 15 - expect durability to drop by 5
    expect(
      enhancer.fail({
        name: "testItem",
        durability: 50,
        enhancement: 14,
      })
    ).toEqual({
      name: "testItem",
      durability: 45,
      enhancement: 14,
    });

    // Test when enhancement is 15 - expect durability to increase by 10
    expect(
      enhancer.fail({
        name: "testItem",
        durability: 80,
        enhancement: 15,
      })
    ).toEqual({
      name: "testItem",
      durability: 90,
      enhancement: 15,
    });

    // Test when enhancement is 15 and durability is 95 - expect durability to equal 100
    expect(
      enhancer.fail({
        name: "testItem",
        durability: 95,
        enhancement: 15,
      })
    ).toEqual({
      name: "testItem",
      durability: 100,
      enhancement: 15,
    });

    // Test when enhancement is 17 - expect enhancement to drop by 1 and durability to go up by 10
    expect(
      enhancer.fail({
        name: "testItem",
        durability: 50,
        enhancement: 17,
      })
    ).toEqual({
      name: "testItem",
      durability: 60,
      enhancement: 16,
    });
  });

  it("Repair function", () => {
    // Test that durability goes back to 100
    expect(enhancer.repair(testItem).durability).toEqual(100);
  });
});
