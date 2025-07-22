//string method
//trim method
let a = "   sanjayRanka";
console.log(a.length);
console.log(a.trim().length);
console.log(a.trim());

//indexof method
let b = "jayranka";
console.log(b.indexOf("r"));
console.log(b.indexOf("k"));

//slice method
let c = "sumerseervi";
console.log(c.slice(5, 8));
console.log(c);

//method chaining
let d = "Shreeya";
console.log(d.toUpperCase().replace("S", "p"));

//replace and repeat method
let e = "sneha";
console.log(e.replace("s", "").repeat(3));

//array
//creating array
let f = [3];
f[0] = "rani";
f[1] = "kani";
f[2] = "jani";
f[4] = "maharani";

console.log(f);

//index of array
let g = ["sanjay", "mahajay", "lunjay", "jay"];
console.log(g[2][2]);

//array method
//push method
let h = ["A", "B", "C", "D"];
console.log(h.push("E"));
console.log(h);

//pop method
let i = ["juni", "suni", "guni", "jaouni"];
console.log(i.pop());
console.log(i);

//unshift method
let j = ["samy", "lukas", "chunni", "saloni"];
console.log(j.unshift("farari"));
console.log(j);

//shift method
let k = ["juhi", "sahi", "sakuni", "javed"];
console.log(k.shift());
console.log(k);

//index method
let l = ["sunera", "puja", "kandra", "sutika"];
console.log(l.indexOf("sutika"));
console.log(l[2][4]);

//slice method
let m = ["somya", "sakshi", "sunera", "surpish"];
console.log(m.slice(1, 2));
console.log(m);

//splice method
let n = ["nehal", "sunita", "snehil", "sunanchi"];
console.log(n.splice(2, 1));
console.log(n.splice(1, 0, "sanjay"));
console.log(n);

//sort method
let o = [
  "anushka",
  "anjali",
  "babita",
  "catti",
  "sukanta",
  "daini",
  "jola",
  "voski",
];
console.log(o.sort());

//concat method
let p = [1, 2, 3, 4, 5];
let q = [6, 7, 8, 9, 10];
console.log(p.concat(q));

//includes method
let r = ["sveta", 4, 6, "suhani"];
console.log(r.includes(4));

//reverse method
let s = ["smaira", "sloki", "puna"];
console.log(s.reverse());

//loops in array
// let guess = prompt("enter movie name");
// let movie = "java";

// while (guess != movie && guess != "quit") {
//   guess = prompt("wrong guess try again");
// }
// if (guess == movie) {
//   console.log("you guess correct movie");
// } else {
//   console.log("you quit");
// }
// let array = 5;
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let u = prompt("enter a number");
// u = parseInt(u);
// for (let i = u * 10; i >= u; i = i - u) {
//   console.log(i);
// }

let w = prompt("enter a number");
w = parseInt(w);
for (let i = 1; i <= w; i++) {
  for (let j = 1; j <= w; j++) {
    console.log(i);
  }
}
