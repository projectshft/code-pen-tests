describe('declaring a variable called `myName`', function() {
  it('should be a string', function (){
    expect(myName).not.toBeUndefined();
    expect(typeof myName).toBe('string');
  });
});
