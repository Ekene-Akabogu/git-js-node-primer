/* 
var a; // Declare variable named a
a = 10; // Assign the integer value of 10 to variabele a
b = 11; // Create variable b and assign a value to it. No previous declaration statement
var c = 12; // Declare variable c and assign it the value of 12 in one statement

console.log(a); //Print the content of variable a
console.log(b); //Print the content of variable b
console.log(c); //Print the content of variable c
*/

/*
a = 13;
console.log(a);
a = "Drink Water";
console.log(a);
a = true;
console.log(a);

var d;
console.log(d);
a = null;
console.log(a);
*/

/*
Arithmetic Operations

a = 10;
b = 20;
c = a + b;
console.log(c);
console.log(b-a);
console.log(b/a);
console.log(a*b);
console.log(b%a);
console.log(a**2); // a value raised to the power 2; displays 100 in console
a++; // Increment a value
console.log(a);
b--; // Decrement b value
console.log(b);
*/

/*
String Operations

firstName = "Ekene";
lastName = "Akabogu";
fullName = firstName + " " + lastName;
console.log(fullName);
*/

/* 
Comparison Operators

a = 10;
a < 11;
console.log(a < 11);
var test = (a > 20);
console.log(test);
a >= 10;
a <= 20;
a == 10;
a === "10";
*/

/*
Logical Operators
a = 1;
b = 2;
console.log(a < 3 && b < 3);
console.log(a > 3 && b < 3);
console.log(a > 3 || b < 3);
console.log(!(a < 3));
console.log(!(a < 3) || !(b > 3));
*/

/*
Ternary (Consitional) Operations
// variableName = (condition)? valueIfConditionReturnsTrue : valueIfConditionReturnsFalse;

var age = 17;
var adult = (age > 20)? "Yes" : "No";
console.log(adult);
*/

/* 
Bitwise Operators
5 << 1; //Equivalent of 5 * 2
5 << 2; //Equivalent of 5 * 4
5 << 3; //Equivalent of 5 * 8
40 >> 1; //Equivalent of 40 / 2
40 >>2; //Equivalent of 40 / 4
40 >> 3; //Equivalent of 40 / 8
console.log(40 >> 3);
*/

/*
typeof Operator

typeof "Ekene Akabogu";
typeof false;
typeof (10 +10);
typeof 33;
console.log(typeof 33);
*/

/*
if/else Statement

var minimumVotingAge = 18;
var age = 17;
if (age < minimumVotingAge){
    console.log("Not eligible to vote");
}
else {
    crossOriginIsolated.log("Eligible to vote");
}
*/

/*
//Switch Statement
var dayOfTheWeekCount = 1;
switch (dayOfTheWeekCount){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Sorry, day of the week numbered" + dayOfTheWeekCount + "does not exist")                        
}

var ageRange = "below 13";
switch (ageRange){
    case "below 1":
        console.log("Infant");
        break;
    case "below 13":
        console.log("Pre-teen");
        break;
    case "below 20":
        console.log("Teenager");
        break;
default:
        console.log("Adult")
}
*/

/*
The for loop

for (var c = 1; c < 11; c++){
    console.log(c);
}
for (var c = 1; c < 11; c++){
    if(c == 7) break;
    console.log(c);
}
for (var c = 1; c < 11; c++){
    if(c == 7) continue;
    console.log(c);
}
*/

/*
The while loop

var n = 0;
while(n != 5){
n = Math.floor((Math.random() * 10));
console.log(n)
}

var n = 0;
while (n != 5){
    n = Math.random();
    n = n * 10;
    n = Math.floor(n);
    console.log(n);
}
*/

/*
The do...while loop

var x = 0;
do {
    x += 1;
    console.log(x)
} while (x < 10)

var readline = require('readline'); //load the readline module into the runtime environment
//Next, create the input/output interface as required by readline module.
var readlineAsync = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Next, declare and define a function named recursiveReadLineAsync
function recursiveReadLineAsync() {
    readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function (answer){
        console.log('You asked me to ' + answer)
        if (answer == 'exit') //Condition for terminating further self call
            return readlineAsync.close(); //quit the function if answer == exit
        recursiveReadLineAsync(); //No exit yet. Call self again to ask another question.
});
};
//Finally, invoke the defined function to start the recursion
recursiveReadLineAsync();
*/

/*
FUNCTION DECLARATION
// By direct declaration
function addition(number1,number2){
     return number1 + number2;
}
console.log(addition(20,30));

// By expression
var addition1 = function(number1,number2){
    return number1 + number2
}
console.log(addition1(20,50));
*/

/*
Passing argument to function by value / reference
function square(number){
    number = number**2;
    return number;
}
var number = 20;
var numberSquared = square(number);
console.log(numberSquared);
console.log(number);
*/

/*
Arguments as array within the function - the arguments object
function multiplier(){
    var product =1;
    for (var x = 0; x < arguments.length; x++){
        product = product * arguments[x];
    }
    return product;
}
console.log(multiplier(10,30));
console.log(multiplier(10,30,10));
*/

/*
Function scope variables
var accumulatedTotal = 0;
function sum(number1, number2){
    //The variables named total, number1 and number2 below are function scope variables
    //They are not visible from outside the function
    var total = number1 + number2;
    //Update the global variable named accumulatedTotal
    //Even though not declared within the function, it is visible.
    accumulatedTotal = accumulatedTotal + total;
    return total;
}
console.log(sum(2,3));
console.log(sum(10,20));
console.log(accumulatedTotal);
*/

/*
Array Literal
var vehicles = ["car", "lorry", "trailer"];
console.log(vehicles);

var basket = [];
console.log(basket);

var myExpressions = ["car", 2+3, 10, true];
console.log(myExpressions)

console.log(myExpressions[0]);
console.log(myExpressions[1]);
console.log(myExpressions[2]);
console.log(myExpressions[3]);

myExpressions[3] = false;
console.log(myExpressions[3]);

var myExpressions = ["car", ,10, true];
console.log(myExpressions[1]);
*/

/*
OBJECT LITERALS
var myObject = {
    name: {
        firstName: "Ekene",
        surname: "Akabogu"
    },
    expertise: "Software design and development",
    languages: ["Python", "JavaScript", "Java", "C++"],
    isRetired: false,
    favouriteCombination: 3+3
}

console.log(myObject.name);
console.log(myObject['name']);

console.log(myObject.expertise);
console.log(myObject['expertise']);

console.log(myObject.languages); 
console.log(myObject['languages']); 

console.log(myObject.isRetired);
console.log(myObject['isRetired']); 

console.log(myObject.favouriteCombination);
console.log(myObject['favouriteCombination']);

console.log(myObject.name.firstName);
console.log(myObject['name']['firstName']);

myObject.favouriteCombination = 9 + 9;
console.log(myObject.favouriteCombination);
*/

/*
"delete" and "in" operators
var phones = {
    make: "Samsung",
    model: "S7",
    cost: 500
}
console.log('make' in phones);
delete phones.make;
console.log('make' in phones);
*/

/*
//User-Created Object Blueprints

function Person (firstName, lastName, height, weight){
    // Below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    // Below is a method
    this.getFullName = function() {return this.firstName+ " " + this.lastName}
}

// Instantiating an object
var person1 = new Person("Ekene", "Akabogu", 1.77, 80);
var person2 = new Person("Don", "Simon", 1.7, 85);

console.log (person1.firstName);
console.log (person1.getFullName());
console.log (person2.firstName);
console.log (person2.getFullName());

person1.constructor;

Person.prototype.complexion = "dark brown";

person1.complexion = "light brown";
console.log(person1.complexion);
console.log(person2.complexion);

Person.prototype.getComplexion = function(){
    return this.complexion
}
Person.prototype.setComplexion = function(complexion){
    this.complexion = complexion;
}
person1.setComplexion('black');
console.log(person1.getComplexion());
*/

/*
//Built-in object blueprints
// a.) Math
Math.E;
Math.PI;
Math.cos(42);
Math.abs(-30);
Math.random();
Math.max(10,5,60);
Math.min(10,5,60);

// b.) Date
var today = new Date();
var birthday = new Date (1980,4,30);
var birthday = new Date ('May 30, 1980 19:00:00');
var birthday = new Date (1980, 4, 30, 19, 0, 0);

function calculateAge(birthday){
    var today = new Date();
    var difference = today - birthday;
    var yearEquivalent = new Date (difference).getFullYear();
    return yearEquivalent - 1970;
}
var birthday = new Date (1980, 12, 30);
console.log(calculateAge(birthday));

function sleep(milliseconds){
    console.log("Going to sleep " + milliseconds + " milliseconds...")
    var begin = new Date().getTime();
    do{
        nextTime = new Date().getTime();
    }while(nextTime - begin < milliseconds)
        console.log("Sleep over");
}
sleep(400);

// c.) RegExp
var re = new RegExp('xyz');
var re = /xyz/;
var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location";
console.log(re.test(searchString));
console.log(re.exec(searchString));
console.log(searchString.search(re));

var re = new RegExp('xyz','g');
var re = /xyz/gi;
var result;
while((result = re.exec(searchString))!=null){
    console.log("Index position " + result.index + " contains " + result [0]);
}

// d.) JSON String
var personJSON1 ='{\
    "firstName":"Ekene",\
    "lastName":"Akabogu",\
    "complexion":"brown",\
    "heightInMeters": 2.3,\
    "programmer": true,\
    "olympicMedal": null,\
    "degrees": ["BSc","MSc","PhD"]\
}'
var personJSON2 =' { \
    "names":{ \
        "firstName":"Ekene", \
        "lastName": "Akabogu" \
    }, \
    "complexion": "brown", \
    "heightInMeters": 1.7, \
    "programmer" : true, \
    "olympicMedal" : null, \
    "degrees" : ["BSc", "MSc", "PhD"] \
    }'

// e.) JSON Object
var p1Object = JSON.parse(personJSON1);
console.log(p1Object);

var p2Object = JSON.parse(personJSON2);
console.log(p2Object);

var p1JSON = JSON.stringify(p1Object);
var p2JSON = JSON.stringify(p2Object);

//dot notation approach to accessing object properties
p1Object.complexion; //Returns brown
p1Object.degrees[0]; //Returns BSc
p2Object.names.firstName; //Returns Ekene
//Array style approach to accessing object properties
p1Object["complexion"]; //Also returns brown
p1Object["degrees"][0]; //Also returns BSc
p2Object["names"]["firstName"]; //Also returns Ekene

// f.) String Object
var x = 'This is a string literal';
var y = new String ('This is a String Object')
console.log(x);
console.log(y);
console.log(y.toString());

var z = x + " " + y;
console.log(z);

console.log(x.length);
console.log(x.constructor);

var firstName = 'Ekene';
var lastName = 'Akabogu';
var fullName = firstName.concat(' ', lastName);
var fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName.includes('Ekene'));

var x = 'Let us search this text for Ekene. If Ekene is found, ...';
var regex = /ekene/gi;
console.log(x.search(regex));

var x = 'Let us search this text for Ekene. If Ekene is found, …';
var searchTerm = 'ekene';
var matchIndex;
var startIndex = 0; //start from the beginning
while((matchIndex = x.indexOf(searchTerm, startIndex)) != -1){ //returns -1 if no match is found
    console.log(matchIndex); //Output the index of match
    startIndex = matchIndex + 1; //change search start position to beyond the last match index
}

var regex = /ekene/gi; //All occurences of Ekene independent of case
var x = 'Let us search this text for Ekene. If Ekene is found, …';
var match;
while((match = regex.exec(x))!= null){ //loop until no more match
    //Below should display the index found and the string. Expected output are:
    //Index position 28 contains Ekene
    //Index position 37 contains Ekene
console.log("Index position " + match.index + " contains " + match[0]);
}

var x = 'Let us search this text for Ekene. If Ekene is found, …';
var regex = /ekene/gi; //All occurences of Ekene independent of case
var y = x.replace(regex,'John'); //Replaces any match found with 'John'
console.log(y); // This should output the string 'Let us search this text for John. If John is found, …'
console.log(x); // This remains 'Let us search this text for Ekene. If EKene is found, …'

var x = 'Let us search this text for Ekene. If Ekene is found...';
var y = x.slice(34); 
console.log(y); 
var y = x.slice(28,33);
console.log(y);

var x = 'Let us search this text for ekene. If Ekene is found, …';
var y = x.slice(-1); 
console.log(y); 
var y = x.slice(-17, -12);
console.log(y);
var y = x.slice(-17);
console.log(y);
*/

/*
ARRAY OBJECT
var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
console.log(languages.length);

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];
languages.forEach(function(element) {
    console.log(element);
})
languages.forEach(function(language, index){
    var output = index + 1 + '. ' + language;
    console.log(output);
})

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
console.log(languages.indexOf('JavaScript'));

var searchTerm = 'JavaScript';
var matchIndex;
var startIndex = 0;
while ((matchIndex = languages.indexOf(searchTerm, startIndex)) != -1){
    console.log(matchIndex);
    startIndex = matchIndex + 1;
}

var languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++', 'JavaScript'];
languages.push('PHP');
console.log(languages);

languages.pop();
console.log(languages);

languages.shift();
console.log(languages);

languages.unshift('Python');
console.log(languages);

var mynumbers = [10, 20, 30, 40, 50];
var mydoublednumbers = mynumbers.map(function(number){
    return number * 2;
})
console.log(mydoublednumbers);

var mynumbers = [1, 2, 3, 4, 5, 6];
var myevennumbers = mynumbers.filter(function(number){
    return number % 2 == 0;
})
console.log(myevennumbers);

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){
    return accumulatedValue + number;
})
console.log(reduceOutput); 

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reduceOutput = mynumbers.reduce(function(accumulatedValue, number){
return accumulatedValue + number;
}, 100)
console.log(reduceOutput);

var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Define the reducer function
var reducer = function(accumulatedValue, number){
return accumulatedValue + number;
}
//Pass the reducer function to reduce() method
var reduceOutput = mynumbers.reduce(reducer, 100)
console.log(reduceOutput);
*/

/*
NUMBER OBJECT
a = 10; //Allocate a number literal to variable
b = Number('10'); //The function converts the string '10' to the number equivalent. b = Number(10) should give came result

c = new Number(10); //Instantiates a new Number object. c = new Number ('10') should give the same result c
d = a.valueOf(); //This works but is superfluous. d = a is enough
e = b.valueOf(); //This works but is superfluous. e = b is enough
f = c.valueOf(); //This is necessary for f to hold only the numeric value in c
console.log(a); //This should output 10
console.log(b); //This should output 10
console.log(c); //This should output [Number: 10]
console.log(d); //This should output 10
console.log(e); //This should output 10
console.log(f); //This should output 10
*/

try{
    console.output('Provoking an error by calling a non-existent function');
}catch(error){
    console.log (error.message); //Outputs the message 'console.output is not a function'
    console.log (error.name); //Outputs 'TypeError'
}
function multiplier(){
    var product = 1;
    if (arguments.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (var x=0; x < arguments.length; x++){
    product = product * arguments[x];
    }
    return product;
}
//Call function without arguments. Here error will be caught and message output to console
try{
    console.log(multiplier())
}catch(error){
    console.log(error.message); //This will output the message 'Illegal arguments counts. Arguments must be greater than 1
}

//Call function with arguments. No error here.
try{
    console.log(multiplier(2,3)); //This will output 6
}catch(error){
    console.log(error.message);
}