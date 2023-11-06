import { convertToUTCDate, isEqual } from "./ch-2";

describe('Date Util Test', () => {
  test('it should return true when two dates are equal', () => {
    const date1 = new Date("2023-11-06T06:41:42.660Z")
    const date2 = new Date("2023-11-06T06:41:42.660Z")
    const result = isEqual(date1, date2)
    expect(result).toEqual(true);
  });

  test('it should return false when two dates are not equal', () => {
    const date1 = new Date("2023-11-06T06:41:42.660Z")
    const date2 = new Date("2023-12-06T06:41:42.660Z")
    const result = isEqual(date1, date2)
    expect(result).toEqual(false);
  });
});

describe('Date Util Test to Convert UTC Date String', () => {
  test('should convert a date string to UTC date string', () => {
    const date = new Date("2023-12-06").toUTCString()
    const result = convertToUTCDate("2023-12-06")
    expect(result).toEqual(date);
  });

  test('should handle dates with no time component', () => {
    const inputDateString = "2023-12-06";
    const expectedUTCDate = new Date(inputDateString).toUTCString();
    const result = convertToUTCDate(inputDateString);

    expect(result).toEqual(expectedUTCDate);
  });

  test('should handle dates with timezones other than UTC', () => {
    const inputDateString = "2023-12-06T12:34:56+03:00";
    const expectedUTCDate = new Date(inputDateString).toUTCString();
    const result = convertToUTCDate(inputDateString);
    expect(result).toEqual(expectedUTCDate);
  });
});