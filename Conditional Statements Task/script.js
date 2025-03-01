// 1 //

let score = 75;
let grade;
if (score >= 90) {
 grade = "A";
} else if (score >= 80) {
 grade = "B";
} else if (score >= 70) {
 grade = "C";
} else if (score >= 60) {
 grade = "D";
} else {
 grade = "F";
}
console.log(grade);
if (grade !== "F" ? score > 80 : false) {
 console.log("Excellent performance");
} else {
 console.log("Keep working hard");
}

/* Output:

C
Keep working hard 
Becuase score=75 then grade is "C"
So score > 80 - 75 > 80 - false
Then "Keep working hard" is printed*/

// 2 //

let authenticated = true;
let premium = false;
let admin = false;
console.log(authenticated && (premium || admin) ? "Full Access" : "LimitedAccess");
authenticated = false;
console.log(authenticated && (premium || admin) ? "Full Access" : "LimitedAccess");
authenticated = true;
premium = true;
console.log(authenticated && (premium || admin) ? "Full Access" : "LimitedAccess");

/* Output:

LimitedAccess
LimitedAccess
Full Access */

// 3 //

let temperature = 25;
let humidity = 80;
let precipitation = 60;
let result;
if (temperature > 30) {
 if (humidity > 90) {
 result = "Stay indoors";
 } else if (precipitation > 80) {
 result = "Take an umbrella";
 } else {
 result = "Enjoy the warm weather";
 }
} else if (temperature > 20) {
 if (humidity > 70 && precipitation > 50) {
 result = "Expect rain soon";
 } else if (humidity <= 70 && precipitation <= 50) {
 result = "Perfect weather";
 } else {
 result = "Changeable conditions";
 }
} else {
 result = "Bring a jacket";
}
console.log(result);

/* Output:

Expect rain soon */

// 4 //

let userAge = 19;
let hasParentalConsent = false;
let isSubscribed = true;
let message;
if (userAge >= 18) {
 message = "Adult content accessible";
} else if (userAge >= 13) {
 if (hasParentalConsent) {
 message = "Teen content accessible with consent";
 } else {
 message = "Parental consent required";
 }
} else {
 message = "Content not accessible";
}
if (isSubscribed) {
 if (userAge < 18 && !hasParentalConsent) {
 message = "Subscribe status pending parental approval";
 } else {
 message += " with premium features";
 }
}
console.log(message);

/* Output:

Checking isSubscribed true - Enter this block.
Checking userAge < 18 && !hasParentalConsent  (19 < 18 is false) so skip this condition.
Since the previous condition is false, execute "Adult content accessible with premium features" */

// 5 //

let a = 5, b = 10, c = 15;  
let result1 = "";
if (a < b) {  
 if (b < c) {   
 a = b;   
 if (a < c) {   
 b = c;       
 if (b > a) {    
 result1 += "Path 1 ";
 c = a;
 }
 }
 } else {
 result1 += "Path 2 ";
 c = a;
 }
} else {
 result1 += "Path 3 ";
 a = c;
}
if (a == 10 && b == 15) {
 result1 += "Condition X met";
} else if (a == 5 && c == 5) {
 result1 += "Condition Y met";
} else {
 result1 += "No conditions met";
}
console.log(`a=${a}, b=${b}, c=${c}`);
console.log(result1);

/* output:
 a = 10, b = 15, c = 10
 result = "Path 1 Condition X met" */

 // 6 //

 let num1 = prompt("enter a number1 :")
let num2 = prompt("enter a number2 :")
if (num1>num2) {
    console.log("num1 is greater than num2");
    console.log(num1);
    
}else{
    console.log("num2 is greater than num1");
    console.log(num2);
}


// 7 //

let num3 = prompt("enter a number3 :")
let num4 = prompt("enter a number4 :")
let num5 = prompt("enter a number5 :")
if (num3>num4 && num4>num5) {
    console.log("num3 is greater than num4");
    console.log(num3);
    
}else if (num4>num3 && num4>num5) {
        console.log("num4 is greater than num3 and num5");
        
}else{
    console.log("num5 is greater than num3 and num4")
}

// 8 //

let Age=prompt("Enter Your Age"); 
if(Age>18 && Age<90){
    console.log("Eligible to Vote");  
} else{
    console.log("Not Eligible to Vote");
    
}

/* Output:
if we give 40 in prompt then as per condition eligible to vote */

// 9 //

/*null - Represents the intentional absence of any object value.
When you don't want to assign any value to the variable but you have to give some value then it takes null.

undefined - It indicates that a variable has been declared but hasn’t been assigned any value.

Both represent the absence of a meaningful value.*/

let user = null; //  indicates that no user is assigned
console.log(user);
let x;
console.log(x); // undefined

// 11 //

let Age=20;
let hasLicense=true;
if(Age>18&&hasLicense){ //Condition
    console.log("A person can drive");
    
} else{
    console.log("A person cannot drive");
    
}

/* Output:

A person can drive */

// 12 //

let score=85;
let attendance=75;
let extraCredit=true;

if ((score>80 &&attendance>80)||extraCredit) { // this statement is correct so it executes this statement inside the if .
    console.log("student passes");
} else {
    console.log("student fails");
}

/* Output:

student passes */

// 13 //

let myage = parseInt(prompt("Enter your age:"));

if (myage < 13) {
    console.log("You are a Child.");
} else if (myage >= 13 && myage <= 19) {
    console.log("You are a Teen.");
} else {
    console.log("You are an Adult.");
}

// 15 //

let temperatures = 35;
let isHot;

if(temperatures>30){
    isHot=true;
    console.log(isHot);
}else{
    isHot=false;
    console.log(isHot);
}