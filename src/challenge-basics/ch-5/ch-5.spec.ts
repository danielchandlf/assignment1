import { calculateProfit, createRandomUUID } from "./ch-5";

jest.mock('./ch-5.util', () => ({
  calculateProfitPerYear: jest.fn(() => 30),
}));

jest.mock('uuid', () => ({ v4: () => '123456789' }));

describe('Calculate Profit', () => {
  test('it should calculate profit value', () => {
    const result = calculateProfit();
    expect(result).toBe(30);
  });
});

describe('Test UUID generation', () => {
  test('it should generate random UUID.', () => {
    const uuid= createRandomUUID()
    expect(uuid).toBe("123456789");
  });
});
