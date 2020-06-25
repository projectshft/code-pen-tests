describe('Create a new variable, `sum`, which is the sum of 5 and 10', function() {
  it('should be a number', function (){
    expect(sum).not.toBeUndefined();
    expect(sum).toBe(15);
    expect(typeof sum).toBe('number');
  });
});

describe('Create a new variable, `difference`, which is the result of removing 30 from 60', function() {
  it('should be a number', function (){
    expect(difference).not.toBeUndefined();
    expect(difference).toBe(30);
    expect(typeof difference).toBe('number');
  });
});

describe('Create a new variable, `product`, which is the result of multiplying 6 and 3', function() {
  it('should be a number', function (){
    expect(product).not.toBeUndefined();
    expect(product).toBe(18);
    expect(typeof product).toBe('number');
  });
});

describe('Create a new variable, `quotient`, which is the result of dividing 100 by 5', function() {
  it('should be a number', function (){
    expect(quotient).not.toBeUndefined();
    expect(quotient).toBe(20);
    expect(typeof quotient).toBe('number');
  });
});
