beforeEach(function() { 
  var cookieIngredients = ['flour', 'salt', 'butter', 'egg', 'vanilla', 'baking soda', 'sugar', 'chocolate chips'];
}); 

describe('Use `.splice`, to replace butter with lard', function() {
  it('should replace "butter" with "lard"', function () {
    expect(cookieIngredients[2]).toBe('lard');
  });
});