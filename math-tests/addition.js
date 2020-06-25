describe('Add 5 and 10 to make the variable `sum`, 15', function() {
  it('should be a number', function (){
    expect(sum).not.toBeUndefined();
    expect(sum).toBe(15);
    expect(typeof sum).toBe('number');
  });
});
