describe('Create a new variable, `welcome` which', function() {
  it('should be a function', function (){
    expect(welcome).not.toBeUndefined();
    expect(welcome).toBeInstanceOf(Function);
  });
});