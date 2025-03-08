// Easy //
// 1 //

function welcome(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

welcome("Dinu");  // Output: Welcome, Dinu
welcome();        // Output: Welcome, Guest

// 2 //

const calculateArea = function(width, height) {
    return width * height;
};

console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(7, 3));  // Output: 21

// 3 //

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// 4 //

function max(num1,num2) {
    if (num1 > num2) {
        console.log(num1);
        
        
    } else {
        console.log(num2);
    }
}max(18,47) // Output: 47

// 5 //

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("Dinesh")); // Output: "hseniD"

// 6 //

function double(number) {
    return number * 2;
}

console.log(double(5));  // Output: 10
console.log(double(0));  // Output: 0

// 7 //

function quadruple(number) {
    return number * 4;
}

console.log(quadruple(5));  // Output: 20

// 8 //

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(6));  // Output: 720

// Medium //

// 1 //

function math(operator, number1, number2) {
    let result;
    
    switch (operator) {
        case "add":
            result = number1 + number2;
            console.log(`Addition of ${number1} and ${number2} is: ${result}`);
            break;
        case "subtract":
            result = number1 - number2;
            console.log(`Subtraction of ${number1} and ${number2} is: ${result}`);
            break;
        case "multiply":
            result = number1 * number2;
            console.log(`Multiplication of ${number1} and ${number2} is: ${result}`);
            break;
        case "divide":
            if (number2 !== 0) {
                result = number1 / number2;
                console.log(`Division of ${number1} by ${number2} is: ${result}`);
            } else {
                console.log("Divided by zero is not valid.");
            }
            break;
    }
}

math("add", 1, 2);       // Output: Addition of 1 and 2 is: 3
math("subtract", 6, 3);  // Output: Subtraction of 6 and 3 is: 3
math("multiply", 4, 6);  // Output: Multiplication of 4 and 6 is: 24
math("divide", 10, 2);    // Output: Division of 10 by 2 is: 5
math("divide", 10, 0);   // Output: Error: Division by zero is not allowed.

// 2 //

(function() {
    const numbers = [1, 2, 3, 4, 5]; 
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(`Sum of the array: ${sum}`);
})(); // Output:Sum of the array: 15

// 3 //

function createUser(username, role = "user") {
    return { userName: username, role: role };
}

console.log(createUser("xyz", "admin")); // Output: { userName: 'xyz', role: 'admin' }
console.log(createUser("abc"));          // Output: { userName: 'abc', role: 'user' }

// 4 //

function operator(resultObj, num1, num2) {
    resultObj.sum = num1 + num2;
    return null;
}

let result = {};  // Reference type object
operator(result, 5, 10);
console.log(result.sum); // Output: 15

// 5 //

(function(numb1, numb2) {
    console.log(numb1 * numb2);
})(8, 3); // Output: 24









