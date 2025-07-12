let n = prompt("enter a number");
let lastdigit;
let rev = 0;
// for (let i = 1; i <= n; i++) {
//   f = f * i;
// }
// console.log("factorial is :" + f);
while (n > 0) {
  lastdigit = n % 10;
  // rev = rev * 10 + lastdigit;
  console.log("rev is :" + lastdigit);
  n = n / 10;
}
