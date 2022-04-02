import SumClient from "../src";

const client = new SumClient();

test("测试加法", () => {
  expect(client.sum(1, 2)).toBe(3);
});
