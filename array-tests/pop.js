beforeEach(function() { 
  var cookieIngredients = ['flour', 'salt', 'butter', 'egg', 'vanilla', 'baking soda', 'sugar', 'chocolate chips'];
}); 

describe('Use `.pop`, to remove the last item in the array (chocolate chips)', function() {  
  it('should remove "chocolate chips"', function () {
    var arrayLength = cookieIngredients.length;

    expect(cookieIngredients[arrayLength - 1]).toBe('sugar');
  });
});
