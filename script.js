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
function SmallestNum(a, b, c) {
    return Math.min(a, b, c);
}

let SmallestNumber = SmallestNum(-45, -3.4, -8.4);
console.log(SmallestNumber);
// Alternate
function findsmall(a,b,c) {
    if(a<=b && a<=c){
        console.log(`${a} is the smallest`)
    }
    else if (b<=a && b<=c) {
        console.log(`${b} is the smallest`)
    } else {
        console.log(`${c} is the smallest`)
    }
}

findsmall(6,-6,7);

function findsmalln(a,b,c) {
    if(a<b && a<c){
        console.log(`${a} is the smallest`)
    }
    else if (b<a && b<c) {
        console.log(`${b} is the smallest`)
    } else if (c<a && c<b) {
        console.log(`${c} is the smallest`)
    }
}

findsmalln(5,6,7);