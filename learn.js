let a = prompt("enter a number");
let operator = prompt("enter a operator");
let b = prompt("enter a number");

switch (operator) {
  case "+":
    console.log(`sum of : ${a}+${b}=${Number(a) + Number(b)}`);
    break;
  case "+":
    console.log(`substraction of : ${a}-${b}=${Number(a) - Number(b)}`);
    break;
  case "+":
    console.log(`multipication of : ${a}*${b}=${Number(a) * Number(b)}`);
    break;
  case "+":
    console.log(`division of : ${a}/${b}=${Number(a) / Number(b)}`);
    break;

  default:
    break;
}
