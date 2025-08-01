// 1 write a programm that print "Hello World!"
// console.log("Hello World!");

// 2 write a function that takes 2 number as input and print their sum
// function sum (a,b){
//     let sum = a + b ;
//     console.log("sum is" + " " + sum);
// };
// sum(-2,-3);
// sum(-2,5);
// sum(8,5);
// sum(8.2,7);
// sum(9.5,5.2);
// sum(8,0);

// 3 write a function that calculates and prints the area of a rectangle given its length and width
// function area (length,width){
//     if(length <= 0){
//         throw new RangeError("Length should be a positive number.");
//     }
//     if (width <= 0) {
//         throw new RangeError("Width should be a positive number.")
//     }
//     else{
//     let area = length * width;
//     console.log(`Area of the rectangle is ${area}`);};
// };

// area(2,3);
// area(2,3.3);
// area(2.5,3.6);
// area(2,0);

// 4 write a function that tells if a number is even or odd
// function NumberFinder(number) {
//     if (number % 2 == 0) {
//     console.log(`${number} is an even number.`);
//     } else {
//     console.log(`${number} is an odd number.`);
//     }
// }

// NumberFinder(7);

// //  Alternate
// function CheckifEvenorOdd(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(CheckifEvenorOdd(4));

// 5 Write a function that finds and prints the smallest number among three given numbers
// function SmallestNum(a, b, c) {
//     return Math.min(a, b, c);
// }
// let SmallestNumber = SmallestNum(-45, -3.4, -8.4);
// console.log(SmallestNumber);
// Alternate
// function findsmall(a,b,c) {
//     if(a<=b && a<=c){
//         console.log(`${a} is the smallest`)
//     }
//     else if (b<=a && b<=c) {
//         console.log(`${b} is the smallest`)
//     } else {
//         console.log(`${c} is the smallest`)
//     }
// }

// findsmall(6,1,6);
// // alternate
// function findsmalln(a,b,c) {
//     if(a<b && a<c){
//         return a;
//     }
//     else if (b<a && b<c) {
//         return b;
//     } else if (c<a && c<b) {
//         return c;
//     }
//     return a;
// }

// console.log("smallest is the" , findsmalln(6,9,6));

// 6 write a function that returns the reverse of a string 
// function stringreverse(str) {
//     return str.split("").reverse().join("");
// }

// console.log(stringreverse("devloper"));

// function reversestr(str) {
//     if(typeof str !== "string"){
//         throw new Error("only enter strings");
//     }
//     let result = "";
//     for(i=str.length - 1; i>=0; i--) {
//             result = result + str[i];
//     }
//     return result;
// }

// console.log(reversestr("mernstack"));
// console.log(reversestr("software devloper"));
// console.log(reversestr(85776));


// write a functio that calculate the factoral of numbers 

// function factorial(n) {
//     if (n < 0) {
//         throw new Error("n should be a positive number");
//     }
//         let result = 1;
//     for (i = 1; i <= n; i++) {
//             result *= i;
//     }
//     return result;
// }

// console.log(factorial(-20));

// is it a leap year 

// function leapyear(n) {
//     if ((n % 4 === 0 && n % 100 !== 0) || (n%400 === 0)){
//         console.log(`${n} ia a leap year`);
//     }
//     else {console.log(`${n} is not a leap year`);
// }
// }
// leapyear(4);

// write a function that calculates and returns sum of digits

// function calculatethesumofdigits(digit) {
//     if (digit < 1) {
//         throw new Error("digit shouldd be greater than 1")
//     }
//     let string = digit.toString();
//     let arr = Array.from(string);
//     let result = 0;
//     arr.forEach(function(val){
//         result += parseInt(val)
//     })
//     return result;
// }

// console.log(calculatethesumofdigits(98691));

// write a function that generates and prints a multiplication table for a given number upto a specified Range

function printMultiplicationTable(Tableof, TableTill) {
    if (typeof Tableof !== "number" || typeof TableTill !== "number" ) {
        throw new Error("Enter a number ")
    }
    for (i = 1; i <= TableTill; i++) {
        console.log(`${Tableof} * ${i} = ${Tableof * i}`);
    }
}

printMultiplicationTable(3,6);