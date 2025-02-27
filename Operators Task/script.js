// 1 //

// var is global or functional scope, var can be redeclared and reinitialized.
// let is block scope, let can be reinitialized but cannot be redeclared.
// const is block scope,const cannot be redeclared and reinitilized.

function hi(){
    var d='Dinesh';
    console.log(s1);
    var d='Kalaguri';
    console.log(s1);
}
hi();
var s1="Dinu"
console.log(s1);

{
    let d=2;
    console.log(d);
    //syntaxError: Identifier 'd' has already declared
}
{
    const k=1;
    console.log(k);
    //syntaxError: Identifier 'k' has already declared 
}

// 2 //

// Primitive values are immutable and stored directly in memory.
// Number-Numeric value (eg let x=18)
// String-text inside single or double quotations(eg let str = 'hii)
// Boolean(eg bool=true/false)

let x=10;
let y=x;
z=30;
console.log(x);
console.log(z);

// Non-primitive values/Reference data types:
// It is immutable
// Object -let obj = { name: "John" };
// Array - let arr = [1, 2, 3];
// Function - let func = function();

let num1=[1,2,3];
let num2=[num1];
num2.push(4);

console.log(num1);
console.log(num2);

// 3 //

let result = 3+4*5-6/2 && 10 || 5;
// 3 + 4 * 5 - 6 / 2
// 3 + 20 - 3
// 23 - 3 = 20
// 20 && 10 || 5;
// 20 && 10
// Logical AND (&&) returns the second operand if the first is truthy.
// 20 is truthy, so this evaluates to 10.
// 10 || 5;
// Logical OR (||) returns the first truthy value.
// 10 is truthy, so the final result is 10.

// output : 10*/

// 4 //

/* Null - Represents the intentional absence of any object value.
   When you don't want to assign any value to the variable but you have to give some value then it takes null.

   undefined - It indicates that a variable has been declared but hasn’t been assigned any value.

   Both represent the absence of a meaningful value.*/

let user = null; //  indicates that no user is assigned
console.log(user);
let a;
console.log(a); // undefined

// 5 //

let e=8;
let f=16;
[e,f] = [f,e];
console.log(e);
console.log(f);

/*Output:

16
8 */

// 6 //

let result1 = "5" + 3;
let result2 = "5" - 3;
let result3 = "5" * "3";
let result4 = 10 / "2";
let result5 = 8 * null;
let result6 = "five" * 2;
let result7 = "5" == 5;
let result8 = "5" === 5;

console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);
console.log(result3);
console.log(typeof result3);
console.log(result4);
console.log(typeof result4);
console.log(result5);
console.log(typeof result5);
console.log(result6);
console.log(typeof result6);
console.log(result7);
console.log(typeof result7);
console.log(result8);
console.log(typeof result8);

/* Output:

53
string
2
number
15
number
5
number
0
number
NaN
number
true
boolean
false
boolean */

// 7 //

{
let str1 = "Hello";
let str2 = " World";
console.log(str1+" "+str2);
let num1 = 5;
let num2 = 10;
let avg = (num1 + num2)/2
console.log(avg);
let isStr1 = str1.length > str2.length;
console.log(isStr1);
let isSumGreater = (num1 + num2) > (str1.length + str2.length);
console.log(isSumGreater);
}

/* Output:

Hello  World
7.5
false
true */

// 8 //

{
    let num = 18;

    if(num % 2 === 0 && num % 3 === 0){
        console.log(num + "is divided by both 2 or 3");
    } else if (num % 2 === 0 || num % 3 === 0){
        console.log(num + " is divided by either 2 or 3");
    } else {
        console.log(num + "is not divided by neither 2 or 3");
    }
}

/*  Output:

18is divided by both 2 or 3  */

// 9 //

{
    let a = 10;
let b = 3;
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let exponentiation = a ** b;
let increment = a++;
let decrement = --b;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a ** b);
console.log(a++);
console.log(--b);
}

/*  Output:

13
9
22
5.5
1
121
11
1  */

// 10 //

let p = true;
let q = false;

console.log(p && q); 
console.log(p || q); 
console.log(!p); 
console.log(!q); 
console.log( p && !q); 

/*  Output:

false
true
false
true
true  */

// 11 //

{
    let person = {
        name: "Alex",
        "favorite color": "blue",
        123: "numeric key",
        address: {
            city: "Techville",
            country: "Codeland"
        }
    };
    
    console.log("Name:", person.name);
    console.log("Favorite Color:", person["favorite color"]); 
    console.log("Numeric Key:", person[123]); 
    console.log("Country:", person.address.country); 
    
    person.age = 25;
    console.log("Age:", person.age); 
    
    person.address.city = "Programton";
    console.log("Updated City:", person.address.city); 

/*Output:

Name: Alex
Favorite Color: blue
Numeric Key: numeric key
Country: Codeland
Age: 25
Updated City: Programton*/

}

// 12 //

{
   let x = 5;
   console.log(x);

   let y = x++;
   console.log(y);

   let p1 = 5;
   console.log(p1);

   let q1 = ++p1; 
   console.log(q1);

}

/*  Output:

5
5
5
6  */

// 13 //

{
    let numb = 10;
    numb += 5;
    numb *= 2;
    numb -= 7;
    numb /= 3;
    numb %= 4;
    console.log(numb);
}

/*  Output:

3.666666666666667  */

// 14 //

let greeting = "Hello";
let name = "JavaScript";
console.log(greeting + " " + name);
greeting += "!";
console.log(greeting);

/*  Output:

Hello JavaScript
Hello!  */

// 15 //

{
    let result1 = 2 + 3 * 4;
    console.log(result1);
    let result2 = (2 + 3) * 4;
    console.log(result2);
    let result3 = 20 / 4 - 2;
    console.log(result3);
    let result4 = 20 / (4 - 2);
    console.log(result4);
    let result5 = 5 + 10 / 2 * 3 - 1;
    console.log(result5);
}

/*  Output:

14
20
3
10
19  */