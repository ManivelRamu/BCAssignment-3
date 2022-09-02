//Pattern printing

// let n = 4; 
// let string = "";
// let count = 1;

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= i; j++) {
//     string =string+count;
//     //count=count+i
//     string+=" ";
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

//Armstrong Number

/// program to check an Armstrong number of n digits

// take an input
// const number ="153"


// const numberOfDigits = number.length;
// console.log(numberOfDigits);
// let sum = 0;


// let temp = number;

// while (temp > 0) {

//     let remainder = temp % 10;

//     sum += remainder ** numberOfDigits;

 
//     temp = parseInt(temp / 10); // convert float into integer
// }

// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

//Special Number

let num, number, last_digit, sum_Of_Fact = 0;  
number=146
num = number;  
while (number > 1)  
{  
       
last_digit = number % 10;  
  
let fact=1;  
 
for(let i=1; i<=last_digit; i++)  
{  
   
fact=fact*i;  
}  

sum_Of_Fact = sum_Of_Fact + fact;  

//console.log(sum_Of_Fact); 

number = number / 10;  
}  

if(num==sum_Of_Fact)  
{  
console.log("Special");
}  
else  
{  
    console.log(" Not Special"); 
}  
console.log(num);
console.log(sum_Of_Fact);