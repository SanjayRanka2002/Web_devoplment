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
let n = prompt("enter a number");
n = parseInt(n);

for (let i = n; i <= n * 10; i = i + n) {
  console.log(i);
}
