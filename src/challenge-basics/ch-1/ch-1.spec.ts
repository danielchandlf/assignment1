import { calculateSimpleInterest } from "./ch-1";

describe('Calculate Simple Interest', () => {
  test('it should return the simple interest with correct parameters', () => {

    const principle = 1000
    const time = 2
    const rate = 5
    const expectedSimpleInterest = (1000 * 2 * 5) / 100
    const result = calculateSimpleInterest(principle, time, rate)

    expect(result).toBe(expectedSimpleInterest);
  });

  test('it should return positive value with positive parameter values', () => {
    const principle = 1000
    const time = 2
    const rate = 5
    const result = calculateSimpleInterest(principle, time, rate)
    expect(result).not.toBeLessThanOrEqual(0);
  });
});
