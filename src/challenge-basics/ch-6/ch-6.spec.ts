import { asyncFuncAccept, asyncFuncReject } from "./ch-6";

describe('Test asynchronous function', () => {
    test('it should call async function and accept the value.', async () => {
        const result = await asyncFuncAccept()
        expect(result).toBe(100);
    });

    test('it should call async function and reject the value.', async () => {
    
        expect(async () =>await asyncFuncReject()).rejects.toThrow("Rejected!");

    });
});