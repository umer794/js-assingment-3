//CHAP 9 TO 11 USER INPUT & CONDITIONAL STATEMENT
//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”
let city = prompt("Enter your city");

if(city == "karachi"){
    document.write("Welcome to city of lights")
}else if(city != "karachi"){
    document.write('ap karachi k nh ho')
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
let gender = prompt("Enter your Gender");

if(gender == "male" || gender == "female"){
    if( gender =="male"){
        console.log("good mornig sir")
        document.write("good mornig sir")
    }
    if( gender == "female"){
        console.log("good morning mam")
        document.write("good morning mam")
    }
    
}
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
let signalColor = prompt("Enter the traffic signal color (Red, Yellow, Green):").toLowerCase();

if (signalColor === "red") {
    alert("Stop! ");
} else if (signalColor === "yellow") {
    alert("Get Ready! ");
} else if (signalColor === "green") {
    alert("Go! ");
} else {
    alert("Invalid color. Please enter Red, Yellow, or Green.");
}






// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
let fuel = parseFloat(prompt("Enter remaining fuel in your car (in liters):"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel.");
}
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
//c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
//f
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// //6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Taking user input for marks obtained in three subjects
let subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));

// Taking total marks
let totalMarks = parseFloat(prompt("Enter total marks:"));

// Calculating total obtained marks and percentage
let obtainedMarks = subject1 + subject2 + subject3;
let percentage = (obtainedMarks / totalMarks) * 100;

// Determining grade based on percentage
let grade;
if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else if (percentage >= 40) {
    grade = "D";
} else {
    grade = "F";
}

// Displaying the result
document.write(`<h2>Result</h2>`);
document.write(`Total Marks: ${totalMarks} <br>`);
document.write(`Marks Obtained: ${obtainedMarks} <br>`);
document.write(`Percentage: ${percentage.toFixed(2)}% <br>`);
document.write(`Grade: ${grade}`);
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// Store a secret number (between 1 and 10)
let secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number from 1 to 10

// Prompt user to guess the number
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check the guess
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer ");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer! ");
} else {
    alert(`Wrong guess! The correct number was ${secretNumber}. Try again! `);
}
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// Take input from the user
let number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    alert(`${number} is divisible by 3 `);
} else {
    alert(`${number} is not divisible by 3 `);
}
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// Take input from the user
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is s0o Cool.”
// Take temperature input from the user
let temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature range and display a message
if (temperature > 40) {
    alert("It is too hot outside. ");
} else if (temperature > 30) {
    alert("The Weather today is Normal. ");
} else if (temperature > 20) {
    alert("Today’s Weather is cool. ");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool. ");
} else {
    alert("It's freezing cold! ");
}
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// Take user inputs
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter an operation (+, -, *, /, %):");

// Initialize result variable
let result;

// Perform calculation based on the operation
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error! Division by zero is not allowed.";
    }
} else if (operation === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        result = "Error! Modulus by zero is not allowed.";
    }
} else {
    result = "Invalid operation! Please enter +, -, *, /, or %.";
}

// Display the result
alert(`Result: ${result}`);


//CHAP: IF...ELSE & ELSE IF STATEMENT,
//TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// Take input from the user
let char = prompt("Enter a character (number or letter):");

// Check if input is a single character
if (char.length !== 1) {
    alert("Please enter only one character.");
} else {
    let ascii = char.charCodeAt(0); // Get ASCII code

    // Check character type using ASCII values
    if (ascii >= 48 && ascii <= 57) {
        alert(`${char} is a Number (0-9). 🔢`);
    } else if (ascii >= 65 && ascii <= 90) {
        alert(`${char} is an Uppercase Letter (A-Z). `);
    } else if (ascii >= 97 && ascii <= 122) {
        alert(`${char} is a Lowercase Letter (a-z). `);
    } else {
        alert(`${char} is a Special Character or Symbol. `);
    }
}
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// Take two integer inputs from the user
let number1 = parseInt(prompt("Enter the first integer:"));
let number2 = parseInt(prompt("Enter the second integer:"));

// Compare the two numbers and display the result
if (num1 > num2) {
    alert(`${num1} is the larger number.`);
} else if (num2 > num1) {
    alert(`${num2} is the larger number.`);
} else {
    alert(`Both numbers are equal: ${num1} = ${num2}`);
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// Take a number input from the user
let num = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
    alert(`${number} is a positive number. `);
} else if (number < 0) {
    alert(`${number} is a negative number. `);
} else {
    alert(`${number} is zero. `);
}
// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
function isVowel(char) {
    // Convert the character to lowercase to handle both uppercase and lowercase inputs
    char = char.toLowerCase();
    
    // Check if the character is a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}

// Example usage:
console.log(isVowel('a')); // true
console.log(isVowel('b')); // false
console.log(isVowel('E')); // true











