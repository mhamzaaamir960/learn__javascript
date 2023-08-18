
// let score = 33;
// console.log(typeof score);  // number
// console.log(score)

// let score1 = "33"
// let value = Number(score1);
// console.log(typeof value); // number
// console.log(typeof score1); // string
// console.log(value);  // 33 => This is number value
// console.log(score1); // 33 => This is the string value


// let score2 = "33abc"
// let value1 = Number(score2);
// let value2 = String(score2);
// console.log(typeof value1); // number
// console.log(value1); // NaN (Not a Number) 
// console.log(typeof value2) // string
// console.log("value 2 => "+value2) // 33abc
// console.log(score2); // 33abc


// let isMale = true;
// console.log(typeof isMale) // boolean
// console.log(isMale); // true

// let a = 1;
// let b = Boolean(a);
// console.log(typeof b); // boolean
// console.log(b); // true


// let c = 0;
// let d = Boolean(c);
// console.log(typeof d); // boolean
// console.log(d); // false 


// let  e = ""  
// let f = Boolean(e);
// console.log(typeof f); // boolean
// console.log(f); // false (string empty (e) => false, value in string in e variable => true)


// let  g = "Hamza"  
// let h = Boolean(g);
// console.log(typeof h); // boolean
// console.log(h); // true


/////                   Operations

// let value = 3;
// let neg_value = -value;
// console.log(neg_value); -3

// console.log(2+2);
// console.log(2*2);
// console.log(2/2);
// console.log(2-2);
// console.log(2%2);
// console.log(2**2);


// let num1,num2,num3;
// let abc = num1 = num2 = num3 = 2+2;
// console.log(abc)


// console.log(1 + "2");  // 12 
// console.log("1" + 2);   // 12 
// console.log("1" + "2"); // 12 
// console.log("1" + 2 + 3);  // 123
// console.log(1 + 2 + "3");  // 33

// These all above operations are correct but the readability is not good and mostly not use in the code 


//                   increment & devcrement

// let game_counter = 100;
// game_counter++;
// console.log(game_counter);

// let game_counter2 = 100;
// ++game_counter2;
// console.log(game_counter2)





let x = 3n
let y = x;
console.log(x)
