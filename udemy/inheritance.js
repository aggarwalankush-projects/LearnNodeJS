var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//prototype is keyword to inherit object and add more to it
Person.prototype.greet = function () {
    console.log("Hello " + this.firstName + " " + this.lastName);
}

var Ankush = new Person("Ankush", "Aggarwal");
console.log(Ankush);
Ankush.greet();

var Ankit = new Person("Ankit", "Naudy");
Ankit.greet();

console.log(Ankush.__proto__);
console.log(Ankit.__proto__);
console.log(Ankush.__proto__ === Ankit.__proto__);