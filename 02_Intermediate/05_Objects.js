// Objects
// Objects are used to store keyed collections of various data and more complex entities.
// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

let user1 = new Object();
let user2 = {};

let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};

let items_buy = {
  product_name:"Asus Laptop",
  price: 45000
}

//A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
// In the user object, there are two properties:
// 1. The first property has the name "name" and the value "John" .
// 2. The second one has the name "age" and the value 30 .

// We can add, remove and read files from it any time.
// Property values are accessible using the dot notation:

// get property values of the object:
alert(user.name); // John
alert(user.age); // 30

// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;

// To remove a property, we can use delete operator:
delete user.age;

// We can also use multiword property names, but then they must be quoted:
let user = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// Square brackets
// For multiword properties, the dot access doesn’t work:
// this would give a syntax error
// user.likes birds = true

// There’s an alternative “square bracket notation” that works with any string:

let user = {};
// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];

// Computed properties
// We can use square brackets in an object literal. That’s called computed properties.

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert(bag.apple); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit .
// So, if a visitor enters "apple" , bag will become {apple: 5} .

// Property value shorthand

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}
let user = makeUser("John", 30);
alert(user.name); // John

// There’s a special property value shorthand to make it shorter.
// Instead of name:name we can just write name , like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

// Existence check
// There also exists a special operator "in" to check for the existence of a property

let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

users[1].email

const user = {
  username: "hitesh",
  prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399
})

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function() {
      console.log(`${this.username} , welcome to website`);
      console.log(this);
  }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()