//string methods
//trim method
let a = "  sanjay  ";
console.log(a.length);
let b = a.trim();
console.log(b);
console.log(b.length);

//indexof
let c = "ShreeRam";
console.log(c.indexOf("r"));
console.log(c[5]);

//slice method
let d = "Lachoocollege";
console.log(d.slice(2, 6));

//method chaining
let e = "college";
console.log(e.toUpperCase().slice(3, 6));

//repeat and replace
let f = "Sanju";
console.log(f.replace("S", "M").toUpperCase().repeat(2));

//array methods
//creat array
let A = [5];
A[0] = "shree";
A[1] = "greet";
A[2] = "preet";
A[3] = "reet";
A[6] = "bee";
console.log(A);

//push method
let B = ["kailash", "mithilesh", "kalesh"];
console.log(B.push("kukesh"));
console.log(B);

//pop method
let C = [1, 2, 3, 4];
console.log(C.pop());
console.log(C);

//unshift
let D = [1, 66.4, "sanjay", "mukesh"];
console.log(D.unshift("kala"));
console.log(D);

//shift
let E = [3, 5, "sanjay", "jay"];
console.log(E.shift());
console.log(E);

//indexof
let F = ["mukesh", "ramesh", "suresh", "gukesh", "jayesh"];
console.log(F.indexOf("suresh"));
console.log(F[3][2]);

//slice
let G = [1, 2, 3, 4, 5];
console.log(G.slice(2, 4));
console.log(G);

//splice
let H = [1, 3, 5, 7, 9];
console.log(H.splice(2, 0, "sanjay"));
console.log(H);

//merge two arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
console.log(arr1.concat(arr2));

//include
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.includes(6));

//sort
let array = ["mukesh", "ramesh", "suresh", "gukesh", "jayesh"];
console.log(array.sort());

//reverse
let arrrr = [6, 7, 8, 9, 10];
console.log(arrrr.reverse());
