// =======================
// Chapter 11: Variables and Data Types
// =======================
document.writeln("<h2>Chapter 11: Variables and Data Types</h2>");

// String variable
let name = "Fardeen";
document.writeln("Name: " + name + "<br>");

// Number variable
let age = 22;
document.writeln("Age: " + age + "<br>");

// Boolean variable
let isStudent = true;
document.writeln("Is Student? " + isStudent + "<br><br>");

// =======================
// Chapter 12: Operators
// =======================
document.writeln("<h2>Chapter 12: Operators</h2>");

let a = 10;
let b = 5;

document.writeln("a + b = " + (a + b) + "<br>");
document.writeln("a - b = " + (a - b) + "<br>");
document.writeln("a * b = " + (a * b) + "<br>");
document.writeln("a / b = " + (a / b) + "<br>");
document.writeln("a % b = " + (a % b) + "<br><br>");

// =======================
// Chapter 13: If-Else Statements
// =======================
document.writeln("<h2>Chapter 13: If-Else Statements</h2>");

let marks = 85;

if (marks >= 90) {
    document.writeln("Grade: A<br>");
} else if (marks >= 75) {
    document.writeln("Grade: B<br>");
} else {
    document.writeln("Grade: C<br>");
}

// =======================
// Chapter 14: Switch Statements
// =======================
document.writeln("<h2>Chapter 14: Switch Statements</h2>");

let day = "Monday";

switch (day) {
    case "Monday":
        document.writeln("Start of the week<br>");
        break;
    case "Friday":
        document.writeln("Weekend is coming!<br>");
        break;
    default:
        document.writeln("Midweek day<br>");
}

// =======================
// Chapter 15: Loops
// =======================
document.writeln("<h2>Chapter 15: Loops</h2>");

// For loop
for (let i = 1; i <= 5; i++) {
    document.writeln("For Loop Number: " + i + "<br>");
}

// While loop
let j = 1;
while (j <= 5) {
    document.writeln("While Loop Number: " + j + "<br>");
    j++;
}

// Do-while loop
let k = 1;
do {
    document.writeln("Do-While Loop Number: " + k + "<br>");
    k++;
} while (k <= 5);

// =======================
// Chapter 16: Alerts and Prompt
// =======================
document.writeln("<h2>Chapter 16: Alerts and Prompt</h2>");

// Alert example (will show popup)
// alert("Hello, Fardeen!");

// Prompt example (input from user)
// let userInput = prompt("Enter your favorite color:");
// document.writeln("Favorite Color: " + userInput + "<br><br>");

// =======================
// Chapter 17: Functions
// =======================
document.writeln("<h2>Chapter 17: Functions</h2>");

function greetUser(username) {
    return "Hello, " + username + "!";
}

document.writeln(greetUser("Fardeen") + "<br>");

// Arrow Function
const square = (num) => num * num;
document.writeln("Square of 5: " + square(5) + "<br><br>");

// =======================
// Chapter 18: Arrays
// =======================
document.writeln("<h2>Chapter 18: Arrays</h2>");

let colors = ["Red", "Green", "Blue"];
document.writeln("Colors: " + colors + "<br>");

colors.push("Yellow");
document.writeln("After Push: " + colors + "<br>");

colors.pop();
document.writeln("After Pop: " + colors + "<br><br>");

// =======================
// Chapter 19: Objects
// =======================
document.writeln("<h2>Chapter 19: Objects</h2>");

let student = {
    name: "Ali",
    age: 21,
    course: "Web Development"
};

document.writeln("Student Name: " + student.name + "<br>");
document.writeln("Student Age: " + student.age + "<br><br>");

// =======================
// Chapter 20: Nested Loops and Conditions
// =======================
document.writeln("<h2>Chapter 20: Nested Loops & Conditions</h2>");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        document.writeln("i = " + i + ", j = " + j + "<br>");
    }
}

document.writeln("<br>Example: Check even/odd numbers<br>");
for (let num = 1; num <= 5; num++) {
    if (num % 2 === 0) {
        document.writeln(num + " is Even<br>");
    } else {
        document.writeln(num + " is Odd<br>");
    }
}
