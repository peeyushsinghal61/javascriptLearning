// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// NaN == NaN or NaN === NaN // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory

// genrate random number in given range
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// labels in js -- The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later.
let i, j;

loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === j) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// way to find the number of parameters expected by a function --
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
sum.length; // 4 is the number of parameters expected.

// we can define properties for a function as functions are also objects
function person() {}
person.namey = "Peeyush Singhal";
person.profile = function (y) {
  // code
};
console.log(person.namey);
console.log(person);

// what is App shell model
// The App Shell Model refers to the approach of loading only the minimal UI structure (the "shell") of an application initially, and then dynamically loading the rest of the content (such as data, images, or components) in the background or as needed. The idea is to separate the core application structure from dynamic content, making it possible to provide an instantaneous, app-like experience for users.
// Example of How App Shell Works in Practice:
// User visits the app: The user accesses the web app for the first time. The server returns a lightweight HTML file, containing only the basic structure (e.g., header, footer, and menu), along with references to the JavaScript and CSS files needed for the app to run.

// Load Static Shell: The browser loads this shell (static content), making the app ready to display with just the layout, but without the actual dynamic content.

// Fetch Dynamic Content: The JavaScript code then asynchronously loads the actual content (data, images, etc.) from the server or an API. It may also update parts of the UI without reloading the entire page.

// Cache the Shell: The app shell (the basic structure) is cached on the client using a Service Worker. On subsequent visits, the app shell can be served from cache, significantly speeding up the load time.
// Benefits of the App Shell Model:
// Faster Load Times: By caching the App Shell, the core structure of the app is quickly available, and the dynamic content can load progressively.

// Offline Functionality: The app shell can be cached, enabling offline access and making the app usable even when there is no network connection.

// Improved User Experience: Users can interact with the app immediately after the shell loads, without having to wait for large amounts of dynamic content to be fetched.

// Reduced Server Load: Since the shell is cached on the client side, less server interaction is needed for every page load, improving performance.

// !-- notation
// At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.
if (!--a) {
}

//How do you add a key value pair in javascript
//Using dot notation: This solution is useful when you know the name of the property
object.key3 = "value3";
// Using square bracket notation: This solution is useful when the name of the property is dynamically determined or the key's name is non-JS like "user-name"
obj["key3"] = "value3";

// compare 2 date objects
var d1 = new Date();
var d2 = new Date(d1);
console.log(d1.getTime() === d2.getTime()); //True
console.log(d1 === d2); // False

// make string  first letter to upper case
let str = "abcd";
str.charAt(0).toLocaleUpperCase() + str.slice(1);

// Argument object
// In JavaScript, the arguments object is a special array-like object that contains all the arguments passed to a function, regardless of how many parameters the function is declared to have. It is available inside every function (except arrow functions) and provides access to the function's arguments, even if they are not explicitly named in the function signature.
function showArguments() {
  console.log(arguments); // Access the arguments object
  console.log(arguments[0]); // First argument
  console.log(arguments.length); // Total number of arguments passed
}
showArguments(10, 20, 30);
// argument object is like an array but it does not have access to array methods like map, filter,reduce
// Since ES6, you can use rest parameters (...args) to collect function arguments for cleaner code instead of argument object.

//How do you test for an empty object
Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

//How do you loop through or enumerate javascript object
for (var key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(key + " -> " + object[key]); // k1 -> value1 ...
  }
}

// how to check key present in object
let obj = { name: "kjncdskjv" };
console.log("name" in obj);
obj.hasOwnProperty("key");
console.log(obj.name !== undefined);

//ECMAScript is the scripting language that forms the basis of JavaScript.ECMAScript serves as the blueprint for how JavaScript and other languages are implemented across different platforms and browsers.

// The Browser Object Model (BOM) is a set of JavaScript objects that allows developers to interact with and control the browser environment. It provides the ability to access browser-related features such as the browser window, document, and location, as well as the ability to manage browser behaviors (like navigation, resizing, and alerts). Object like =window,document, location , alert, prompt, confirm

//void(0)
// void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an <a> element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression
<a href="JavaScript:void(0);" onclick="alert('Well done!')">
  Click Me!
</a>; // won't reload the page
{
  /* <a href="#" onclick="alert('Well done!')">
  Click Me!
</a> */
} // this "#" won't reload the page but might scroll the page to top

//host object -- given by browser like window, document
// native object -- given by js like Date
// user object -- defined by user

//window.navigator object contains information about the visitor's browser OS details
// window.history use to access  browsers history

// There are two ways of event flow
// Top to Bottom(Event Capturing)
// Bottom to Top (Event Bubbling)

// window is root element of browser and document is child of window.
// window have functions like alert, prompt
// document have getElementById, getElementsByTagName,

//Null
// It is an assignment value which indicates that variable points to no object.
// Type of null is object
// The null value is a primitive value that represents the null, empty, or non-existent reference.
// Indicates the absence of a value for a variable
// Converted to zero (0) while performing primitive operations
//Undefined
// It is not an assignment value where a variable has been declared but has not yet been assigned a value.
// Type of undefined is undefined.
// The undefined value is a primitive value used when a variable has not been assigned a value.
// Converted to NaN while performing primitive operations
// Indicates absence of variable itself

// "use strict" can be written to the beginning of a script or a function.

// Server-Sent Events (SSE) is a simple and efficient way to implement real-time, one-way communication from the server to the client over a persistent HTTP connection. It is a great alternative to other real-time techniques like polling, as it reduces the need for repeated requests from the client, provides automatic reconnection, and is well-supported in modern browsers. However, it is more suitable for scenarios where the server needs to push updates to the client, but not for two-way communication.

// how do you check browser support for server-sent events??
// if (typeof EventSource !== "undefined") {
//   // Server-sent events supported. Let's have some code here!
// } else {
//   // No server-sent events supported
// }

//You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.

//Can you apply chaining on conditional operator
function traceValue(someParam) {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

//What are the ways to execute javascript after page load
1. window.onload = function (){} window.onload event waits for everything (HTML, CSS, images, scripts) to fully load before executing the code.
2. document.onload = function (){}
3. <body onload="script();">
4. Using DOMContentLoaded event:The DOMContentLoaded event fires as soon as the HTML has been fully loaded and parsed (without waiting for stylesheets, images, and subframes to finish loading).
5. document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  console.log("Page is fully loaded and parsed.");
});

Using defer and async in script tags (for external scripts)
defer: The defer attribute ensures that the script will run after the document has been fully parsed, but before the DOMContentLoaded event.
<script src="script.js" defer></script>
async: The async attribute allows the script to run as soon as it is downloaded, without blocking the HTML parsing. This is generally for independent scripts that don't depend on the DOM.
<script src="script.js" async></script>

// freeze an object
The freeze() method is used to freeze an object. Freezing an object does not allow adding new properties to an object, prevents removing, and prevents changing the enumerability, configurability, or writability of existing properties.
const obj1 = {
  prop: 100,
  employment: {
    department: "IT",
  }
};
Object.freeze(obj1);
obj1.prop = 200; // Throws an error in strict mode
obj1.employment.department="HR"  // no error
console.log(obj.prop); //100
// freezing is only applied to the top-level properties in objects but not for nested objects. 


// Function constructor and function declaration
//both are ways to create function.
// // function constrctor  -- not hoisted since function is created at run time/dynamically, less efficient & slow 
let add = new Function('a', 'b', 'return a + b;');
console.log(add(2, 3)); // 5
// function declaration  --  hoisted since function is created at compile time, more efficient and fast
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5



// Short circuit condition
if (authenticate) {
  loginToPorta();
}
//or 
authenticate && loginToPorta() -- //Short circuit condition


// function declaration and class declaration 
//class declaration  -- not hoisted
const user=new User(); 
class  User{
  constructor(parameters) {}
}
// function declaration  -- hoisted
const user = new User(); // No error
function User() {}


// How do you check an object is a promise or not
const promise1 = new Promise((resolve, reject) => {});
const nonPromise = {};
console.log(isPromise(promise1)); // true
console.log(isPromise(nonPromise)); // false

//How to detect if a function is called as constructor
// You can use new.target pseudo-property to detect whether a function was called as a constructor(using the new operator) or as a regular function call.
// If a constructor or function invoked using the new operator, new.target returns a reference to the constructor or function.
// For function calls, new.target is undefined.
function Myfunc() {
  if (new.target) {
    console.log("called with new");
  } else {
    console.log("not called with new");
  }
}
new Myfunc(); // called with new
Myfunc(); // not called with new
Myfunc.call({}); // not called with new

//differences between arguments object and rest parameter
// The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
// The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.

//differences between spread operator and rest parameter
//Rest parameter collects all remaining elements into an array. Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. 


//differences between for...of and for...in statements
// for..in iterates over all enumerable property keys of an object
// for..of iterates over the values of an iterable object.
let arr = ["a", "b", "c"];

arr.newProp = "newVlue";

// key are the property keys
for (let key in arr) {
  console.log(key); // 0, 1, 2 & newProp
}

// value are the property values
for (let value of arr) {
  console.log(value); // a, b, c
}


//instance and non-instance properties
//The Instance properties must be defined inside of class methods. like name and age
// non instance defined outside of the ClassBody declaration - like staticAge,prototypeAge
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
Person.staticAge = 30;
Person.prototype.prototypeAge = 40;

//  nullish coalescing operator (??) --
//It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
console.log(null ?? true); // true
console.log(false ?? true); // false
console.log(undefined ?? true); // true

// dense array -- elements present at each index of array.
let arr=[1,2,3,4,5] // length=5
// sparse array -- elements missed at some index of array.
let arr=[1,2,3,,5] // length=5
// how to create sparse array:
let sparse=[1,2,3,,5]
const array = Array(3);
console.log(array); // [empty, empty ,empty]
// delete some element
const justiceLeague = ["Superman", "Aquaman", "Batman"];
delete justiceLeague[1];
console.log(justiceLeague); // ['Superman', empty, ,'Batman']
// increasing the length
const justiceLeague = ["Superman", "Aquaman", "Batman"];
justiceLeague.length = 5;
console.log(justiceLeague); // ['Superman', 'Aquaman', 'Batman', empty, empty]


//How to verify if a variable is an array?
const numbers = [1, 2, 3];
const user = { name: "John" };
Array.isArray(numbers); // true
Array.isArray(user); //false
console.log(numbers instanceof Array); // true
console.log(user instanceof Array); // false
console.log(numbers.constructor === Array); // true
console.log(user.constructor === Array); // false

// primitive valribles are stored in stack while Non-primitives Stored in heap

//benefits higher order functions -- Abstraction,Reusability,Immutability,Modularity

// possible reasons for memory leaks
// execessive usage of global variables 
// Forgetting to clear the timers set up by setTimeout or setInterval.
// Closures retain references to variables from their parent scope, which leads to variables might not garbage collected even they are no longer used.


//inline caching in v8 engine
//How do you detect primitive or non primitive value type 
var myPrimitive = 30;
var myNonPrimitive = {};
function isPrimitive(val) {
  return Object(val) !== val;
}
isPrimitive(myPrimitive);
isPrimitive(myNonPrimitive);
// If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.

//queueMicrotask
// The queueMicrotask function is used to schedule a microtask, which is a function that will be executed asynchronously in the microtask queue. 
// console.log("Start"); //1
// queueMicrotask(() => {
//   console.log("Inside microtask"); // 3
// });
// console.log("End"); //2


// Microtask is used for the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty. The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc

//the easiest way to convert an array to an object
var fruits = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = { ...fruits };
console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}

// create array with some data
var newArray = new Array(5).fill("0");
console.log(newArray); // ["0", "0", "0", "0", "0"]


//console.log(["a"] + ["b"]); // "ab"
//console.log([] + []); // ""
//console.log(![] + []); // "false", because ![] returns false.
console.log(![]); // false
// Since Arrays are truthful values, negating the arrays will produce false: ![] === false
//As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === ""
//Prepend an array with + operator will convert an array to false, the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1

// console.log(+null); // 0
// console.log(+undefined); // NaN
// console.log(+false); // 0
// console.log(+true); // 0
// console.log(+[]); // 0
// console.log(+[1]); // 1
// console.log(+NaN); // NaN
// console.log(+""); // 0
// console.log(+"abc"); // NaN

//No, the const variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)
// const userList = [];
// userList.push("John"); // Can mutate even though it can't re-assign
// console.log(userList); // ['John']


// Below are the list of some new features of ES6,

// Support for constants or immutable variables
// Block-scope support for variables, constants and functions
// Arrow functions
// Default parameters
// Rest and Spread Parameters
// Template Literals
// Destructuring Assignment
// Enhanced Object Literals
// Promises
// Classes
// Modules

// reflow and repaint -- use chatGPT
// In web development, reflow and repaint are two processes that the browser uses to update the visual representation of a webpage. 

// namespace
// In JavaScript, a namespace is a concept used to organize and group related variables, functions, and objects under a common name. This helps avoid naming conflicts, especially in large programs or when integrating with third-party libraries. JavaScript doesn't have a built-in namespace feature like some other languages, but you can simulate it using objects.
// Advantage of namespace:Avoid naming collisions,Organization and modularity,Code clarity
var App = {
  utils: {
      calculateSum: function(a, b) {
          return a + b;
      }
  }
};

var OtherApp = {
  utils: {
      calculateSum: function(a, b) {
          return a * b;  // Different logic to avoid conflicts
      }
  }
};

console.log(App.utils.calculateSum(2, 3)); // Output: 5
console.log(OtherApp.utils.calculateSum(2, 3)); // Output: 6

//different ways to make an object non-extensible
// Object.preventExtensions
// Object.seal
// Object.freeze
var newObject = {};

Object.preventExtensions(newObject); // Prevent objects are non-extensible
Object.isExtensible(newObject); // false

var sealedObject = Object.seal({}); // Sealed objects are non-extensible
Object.isExtensible(sealedObject); // false

var frozenObject = Object.freeze({}); // Frozen objects are non-extensible
Object.isExtensible(frozenObject); // false


//How do you define multiple properties on an object
const newObj={};
Object.defineProperties(newObj,{a:{value:"Peeyush Singhal",  writable: true,  // It can be modified
        enumerable: true,  // It will show up in for...in loops
        configurable: true },
        age:{value:26,  writable: true,  // It can be modified
        enumerable: true,  // It will show up in for...in loops
        configurable: true }})
console.log(newObj)
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');



//Obfuscation refers to the process of making the source code of a program difficult to understand by humans while maintaining its functionality. In JavaScript, obfuscation is commonly used to protect the source code from being easily read or reverse-engineered.
//Obfuscation techniques involve:
// Renaming variables and functions
// String encryption
// Control flow obfuscation
// Dead code insertion


// Minification of Code
// Minification is the process of removing unnecessary characters from source code without changing its functionality. These unnecessary characters include things like:
// Whitespace (spaces, tabs, newlines)
// Comments (both single-line and multi-line comments)
// Unused or redundant code
// Shortening variable and function names (optional, but commonly done)
// Minification reduces the size of the code, which can improve load times, especially for web pages or applications. The main goal of minification is to decrease the file size and make the code more efficient for browsers to download and execute, while preserving its behavior.

// Here are many online/offline tools for Minification and Obfuscation of the javascript files:
// Google's Closure Compiler
// UglifyJS2
// jsmin


//An enum is a type restricting variables to one value from a predefined set of constants. JavaScript has no enums but typescript provides built-in enum support.
// way to create enum like variables in js:
// const direction=Object.freeze({UP:1,DOUM:2,RIGHT:3,LEFT:4})

//property descriptors of an object 
const newObject = {
  a: 1,
  b: 2,
  c: 3,
};
const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
console.log(descriptorsObject.a.writable); //true
console.log(descriptorsObject.a.configurable); //true
console.log(descriptorsObject.a.enumerable); //true
console.log(descriptorsObject.a.value); // 1
// how to get all the properties of an object.
const newObject = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.getOwnPropertyNames(newObject)); //["a", "b", "c"];




// PWAs
// What is an event delegation
// stopPropagation
// preventDefault
// same-origin policy
// attribute & property
//document load and DOMContentLoaded events
//What is the difference between proto and prototype