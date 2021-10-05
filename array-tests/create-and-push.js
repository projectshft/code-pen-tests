describe('Create a new array, `cookieIngredients` which', function() {
  it('should be an array', function (){
    expect(cookieIngredients).not.toBeUndefined();
    expect(cookieIngredients).toBeInstanceOf(Array);
  });

  it('should have the following items in it (as strings) in this order: "flour", "baking soda", "salt", "butter", "sugar", "egg", "vanilla"', function () {
    expect(cookieIngredients[0]).toBe('flour');
    expect(cookieIngredients[1]).toBe('salt');
    expect(cookieIngredients[2]).toBe('butter');
    expect(cookieIngredients[3]).toBe('egg');
    expect(cookieIngredients[4]).toBe('vanilla');
  });
});

describe('Use `.push` 2 times to add "baking soda", then "sugar", then "chocolate chips" to `cookieIngredients`', function() {
  it('should add "baking soda" to the 5 index', function () {
    expect(cookieIngredients[5]).toBe('baking soda');
  });

  it('should add "sugar" to the 6 index', function () {
    console.log(cookieIngredients);
    expect(cookieIngredients[6]).toBe("sugar");
  })

  it('should add "chocolate chips" to the 7 index', function () {
    console.log(cookieIngredients);
    expect(cookieIngredients[7]).toBe("chocolate chips");
  })
});