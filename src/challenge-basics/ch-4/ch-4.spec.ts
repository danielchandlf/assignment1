import { getToken, setAvailableToken } from "./ch-4";

describe('Token Util Test', () => {
  test('it should return success with available tokens', (done) => {

    const onSuccess = (result: Number) => {
      expect(result).toBeGreaterThan(0);
      done();
    };

    const onError = (err: Error) => {
      done.fail(err);
    };
    getToken(onSuccess, onError);
  });

  test('it should call onSuccess callback only once', (done) => {
    const onSuccess = jest.fn()

    const onError = (err: Error) => {
      done.fail(err);
    };
    getToken(onSuccess, onError)
    setTimeout(() => {
      expect(onSuccess).toHaveBeenCalledTimes(1)
      done()
    }, 0)
  });

  test('it should call onSuccess callback with only one argument', (done) => {
   
    getToken(
      function () {
        expect(arguments.length).toBe(1)
        done()
      },  (err) => {
        done.fail(err); 
      }
    )

  });

  test('it should call error callback when tokens are not avaialable', (done) => {
    setAvailableToken(0)
    getToken(()=>done.fail("onSuccess should not be called"),
    (err)=>{
      expect(err).toBeInstanceOf(Error)
      expect(err.message).toBe("Token not available!")
      done()
    })
  });

  test('it should call onError callback with only one argument', (done) => {
      getToken(()=>done.fail(),function(err){
        expect(arguments.length).toBe(1)
        done()
      })
  })
  }); 