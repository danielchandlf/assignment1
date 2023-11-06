import { validatePassword } from "./ch-3";

describe('Password validation test', () => {
  test('it should throw error with password less than 8 characters', () => {
   
    const password= "hello"
    expect(()=>validatePassword(password)).toThrow("Password length should not be less than 8 characters.");
  });

  test('it should return true with password more or equal to 8 characters', () => {
    const password= "helloaaa"
    const result= validatePassword(password)
    expect(result).toEqual(true);
  });
});