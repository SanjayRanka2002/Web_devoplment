//practise of string
//trim method
let Name = "  sanjayRanka   ";
console.log(Name.length);
let NewName = Name.trim();
console.log(NewName.length);
console.log(NewName);

//index of
let k = "Rankawat";
console.log(k[3]);

//slice method
let d = "suyansh";
console.log(d.slice(3, 6));

//replace and repeat
let m = "Miraj";
console.log(m.replace("Mi", "Ni"));

//repeat
let a = "Leads";
console.log(a.repeat(2));

//chaining method
let z = "  kawasaki";
console.log(z.trim().replace("ka", "ma").toUpperCase());

//array and array methods
//push method
let array1 = ["sanjay", "sneha", "snehil", "suyash"];
console.log(array1.push("saloni"));
console.log(array1[2][3]);
console.log(array1);

//pop method
let array2 = [1, 2, 3, 4, 5];
console.log(array2.pop());
console.log(array2);

//unshift method
let array3 = ["banana", "apple", "pineapple", "grapes"];
console.log(array3.unshift("orange"));
console.log(array3);

//shift method
let cars = ["toyota", "fortuner", "farari", "jaguar", "bmw"];
console.log(cars.shift());
console.log(cars);

//concat method
let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];
console.log(first.concat(second));

//include
let fruits = ["papaya", "banana", "apple"];
console.log(fruits.includes("chiku"));

//indexof method
let sports = ["cricket", "hockey", "badminton", "racing"];
console.log(sports.indexOf("hockey"));

//slice method
let hobby = ["chay", "thinking", "writing", "singing"];
console.log(hobby.slice(2, 3));
console.log(hobby);

//splice method
let work = ["eating", "playing", "making", "jumping"];
console.log(work.splice(1, 1));
console.log(work.splice(2, 0, "bathing"));
console.log(work);

//sort method
let arr = ["ansh", "jayesh", "sneha", "lavish"];
console.log(arr.sort());

//reverse method
let v = [4, 2, 6, 7];
console.log(v.reverse());
