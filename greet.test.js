const greet = require('./greet')
test('when name is "Bob", the method should return a string "Hello, Bob.".', () =>{
    expect(greet("Bob"));
});
test('when name is "Bob", the method should return a string "Hello, Bob.".', () =>{
    expect(greet("Bob")).toBe("Hello, Bob.");
});
test('when name is "ron", the method should return a string "Hello, ron.".', () =>{
    expect(greet("ron")).toBe("Hello, ron.");
});
test('when name is null, then the method should return the string "Hello, my friend."', () =>{
    expect(greet()).toBe("Hello, my friend.");
});
test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', () =>{
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});
test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () =>{
    expect(greet(["Jill","Jane"])).toBe("Hello, Jill and Jane.");
});
test('when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () =>{
    expect(greet(["Amy","BRIAN","Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});