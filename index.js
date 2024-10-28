// JavaScript Fundamentals - Part 1 - Study Notes & Challenges (At The Bottom)

let js = 'amazing';
if (js === 'amazing') alert('js is fun!');

// Logs the following line in the console.
console.log(40 + 8 + 23 - 10);

// Task: Create 3 Variables and Log Them
let country = "United Kingdom";
let county = "London";
let population = 66000000
console.log(country);
console.log(county);
console.log(population);

// Add-on code
let firstName = "Shay";
console.log(typeof firstName)

// Declaring Variable
let age = 30;
age = 31;
const birthYear = 1998;

// Operators 
let x = 10 + 5; // x = 15
x += 10; 
x *= 4;
x++; // +1
x--; // - 1

// Comparison operators <, >, <=, >=
console.log(2 > 4); // true
console.log(4 < 5); // true

firstName = 'Shay';
let job = 'Coder';
birthYear = 1998;
let shay = "I'm " + firstName + ", " + "I'm a " + job;
console.log(shay)

// Template String
let shayNew = `I am ${firstName} and I am a ${job}`;

// If Else Statements
age = 15;
if (age >= 19) {
    console.log("You can drive")
}
else {
    console.log("You can't drive")
    let yearsLeft = 18 - age;
    console.log(`You have ${yearsLeft} before you can drive!`)
};

// Type Conversion
let inputYear = '1991'; // Number is intentionally a string
console.log(Number(inputYear)); // Number is int, converting 
console.log(inputYear + 18);
console.log(Number('Shay')); // Result is NaN = Not a Number (invalid number)
let aNumber = 23;
console.log(String(aNumber)); // Convert aNumber to a string '23'.

// Type Coercion
console.log("I am" + 26 + "Years Old");
console.log('24' + '25' + 10); 

// Truthy & Falsey Values
console.log(Boolean(0));    // False
console.log(Boolean(undefined));    // False
console.log(Boolean({}));   // True
console.log(Boolean(''));   // True

// The else block is executed because the height is false, if statement transforms it to false.
let height;
if (height) {console.log('YES, height is there')}
else {console.log('Height is undefined')};

// Equality Operators
age = 18;
if (age == 18) console.log("loose"); // Can perform type coercion
if (age === 18) console.log("strict"); // Cannot perform type coercion

if (age == '23') {
    console.log("This is actually a string")
}
else if (age == '18') {
    console.log("This is a number")
}
else {
    console.log("Gotcha!")
}

// Logical Operators
let hasDriversLiscence = true; // A
let hasGoodVision = true; // C

console.log(hasDriversLiscence && hasGoodVision); // false
console.log(hasDriversLiscence || hasGoodVision); // true
console.log(!hasDriversLiscence); // false

let shouldDrive = hasDriversLiscence && hasGoodVision;
let isTired = true; // C

if (hasDriversLiscence && hasGoodVision && !isTired) {
    console.log("Can Drive")
}
else {
    console.log("No she can't!")
}

// The Switch Operators
const day = 'monday';
// Compare day in a strict (===) method
switch(day) {
    case 'monday': // if day === "monday"
        console.log('Chest and triceps today'); // Do this
        break;
    case 'tuesday': // if day === "tuesday"
        console.log('Back & biceps today'); // Do this
        break;
    case 'wednesday':
        console.log('Legs today');
    case 'thursday':
        console.log('Skip HIIT');
        break;
    case 'friday':
        console.log('Arms today');
        break; // break is needed to stop each block, otherwise other actions are excuted.
    
    default: // This executes if all the above, fail
        console.log("can't skip gym, make sure you train")
}

// Task: Convert the above switch statement into if-else statement
if (day === 'monday') {
    console.log('Chest & triceps today!');
}
else if (day === 'tuesday') {
    console.log('Back & biceps today');
}
else if (day === 'wednesday') {
    console.log('Legs today');
}
else if (day === 'thursday') {
    console.log('Skip HIIT');
}
else if (day === 'friday') {
    console.log('Back & biceps today');
}
else {
    console.log('Take a rest day!')
}

// The Conditional Ternary Operator
// Example 1
const newAge = 26;
age >= 18 ? console.log('I like to drive') : console.log('I like to go out')

// Example 2
const time = 20;
result = time >= 20 ? 'Good Evening' : 'Good Morning';
console.log(`${result}`);




// CHALLENGE 1: BMI Calculator
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:
- Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
- Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
- Log the value of BMIMark and BMIJohn to the console.
- BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
*/

// BMI = mass / (height * height)
// Mass in KG, Height in m
let massMark = 70;
let heightMark = 1.23;

let massJohn = 74;
let heightJohn = 1.32;

// BMI Calculation
let bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

// Bonus Task
if (bmiMark > bmiJohn) {console.log("Mark has a higher BMI than John!")}
else {console.log("John has a higher BMI than Mark")}


// CHALLENGE 2: Average Score
/*
There are two gymnastics teams: Dolphins and Koalas. 
They compete against each other 3 times. 
The winner with the highest average score wins a trophy!

Your tasks:
- Calculate the average score for each team, using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
- Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

// Assign variables for each average, then use an if statement for conclusion.
let scoreDolphins = (96 + 108 + 89) / 3
let scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy")
}
else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy")
}
else {
    console.log("Both win!")
};


// CHALLENGE 3: Tip Calculator
/* 
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

- Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
- Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.
Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
TEST DATA: Test with different bill values: 275, 40, and 430
*/

const totalCost = 275;

const lowTip = 0.15;
const highTip = 0.3;

const lowTipCost = 0.15 * totalCost + totalCost;
const highTipCost = 0.30 * totalCost + totalCost;

// Ternary Operation
totalCost >= 50 && totalCost <= 300 ? console.log(`The total cost was ${totalCost}, your tip was ${lowTip} and the final value is ${lowTipCost}`) : 
console.log(`The total cost was ${totalCost}, your tip was ${highTip} and the final value is ${highTipCost}`);










