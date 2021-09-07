describe('1. Create a new variable, `welcome` which', function() {
  it('should be a function', function (){
    expect(welcome).not.toBeUndefined();
    expect(welcome).toBeInstanceOf(Function);
  });

  it('should return "Hello World!"', function (){
    expect(welcome()).toBe('Hello World')
  });
});

describe('2. Create a new variable, `multiply` which', function() {
  it('should be a function', function (){
    expect(multiply).not.toBeUndefined();
    expect(multiply).toBeInstanceOf(Function);
  });

  it('should return return the product of two numbers that are passed as arguments', function () {
    expect(multiply(5, 5)).toBe(25)
    expect(multiply(6, 2)).toBe(12)
  });
});