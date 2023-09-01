
// stack memory (primitive) , heap memory (non primitive)

// stack

let name_1 = "Hassan";
let name_2 =  name_1;
name_2 = "Ali";

console.log("name_1 => ",name_1); // "Hassan"
console.log("name_2 => ",name_2); // "Ali"

// Heap

let student_1 = {
    name: "Hamza",
    age: 19,
}
let student_2 = student_1;
student_2.name = "Ali";

console.log(student_1);  //  "Ali"
console.log(student_2);  // "Ali"