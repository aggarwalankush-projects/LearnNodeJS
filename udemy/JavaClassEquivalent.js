var util=require('util');

// constructor for Person class
function Person(){
    this.name= "Ankush";
}

// adding method
Person.prototype.sayHello=function(){
    console.log("Hello "+ this.name);
}

// constructor for PoliceMan class
function PoliceMan(){
    Person.call(this);//calling super constructor
    this.badgeNo=123;
}

// inheritance PoliceMan inherits Person
util.inherits(PoliceMan,Person);

var PoliceMan=new PoliceMan();
PoliceMan.sayHello();




