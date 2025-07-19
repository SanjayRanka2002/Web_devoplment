//For even number
// let n = prompt("enter a number");

// for (let i = 16; i >= n; i = i - 2) {
//   console.log(i);
// }

// for odd number
// let n = prompt("enter a number");
// for (let i = 1; i <= n; i = i + 2) {
//   console.log(i);
// }

//sum of n number
// let n = prompt("enter number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("sum is :" + sum);

//print multipication table
// let n = prompt("enter a number");
// n = parseInt(n);

// for (let i = n; i <= n * 10; i = i + n) {
//   console.log(i);
// }

//for square pattern
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     console.log(j);
//   }
// }

//reverse number series
// let i = 5;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

//print multiple of 3
// print multiple of n
// let n = prompt("enter number");
// n = parseInt(n);
// let i = n;
// while (i <= n * 10) {
//   console.log(i);
//   i = i + n;
// }

//guess college name game

// let college = "lachoo";
// let guess = prompt("enter college name");

// while (guess != college && guess != "quit") {
//   guess = prompt("try again");
// }
// if (guess == college) {
//   console.log("congratulation you guess right college");
// } else {
//   console.log("you quit this game");
// }
// let guess = prompt("enter movie name");
// let movie = "Krrish";
// while (guess != movie && guess != "quit") {
//   guess = prompt("enter movie");
// }
// if (guess == movie) {
//   console.log("congratulation you guess right movie");
// } else if (guess == "quit") {
//   console.log("tune quit kiya");
// } else {
//   console.log("enter right movie");
// }
//string methods
//first trim

let Name = "   sanjay   ";
console.log(Name.length);
console.log(Name.trim().length);

//second touppercase
let Name1 = "  Hii Lonkey  ";
console.log(Name1.trim().toUpperCase());

//third index of isme argument dena pdta hai
let a = "ShreeRam";
console.log(a.indexOf("Ram"));

//fourth chaining method
let b = "jayshree";
console.log(b.replace("jay", "su").repeat(3));

//slice method
let c = "Sukharam";
console.log(c.slice(5, 7));

//array methods
let students = ["sanjay", "shree", "tarun", "vaibhav"];
console.log(students[1]);

//create an array
let marks = [4];
marks[0] = 55;
marks[1] = "sanjay";
marks[2] = 4.3;
marks[3] = 50;
console.log(marks);

//arrays are mutable
let fruits = ["banana", "apple", "grapes"];
fruits[1] = "pineapple";
console.log(fruits);

//
