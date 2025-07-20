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
function area (length,width){
    if(length <= 0){
        throw new Error("Length should be a positive number.");   
    }
    if (width <= 0) {
        throw new Error("Width should be a positive number.")
    }
    else{
    let area = length * width;
    console.log(`Area of the rectangle is ${area}`);};
};

area(2,3);
area(2,3.3);
area(2.5,3.6);
area(2,0);