function ExampleConstructor() {}
console.log('value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor.prototype);

const car = new ExampleConstructor();
console.log('value of car:', car);

const honda = car instanceof ExampleConstructor;
console.log('value of honda:', honda);
