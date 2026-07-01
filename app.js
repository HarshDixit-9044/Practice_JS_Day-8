// const prompt=require("prompt-sync")();
// let age =prompt("Enter your age : ");
// if(age === null) console.log("You cancelled it...");
// else {
//     if(age.trim() === "") console.log("please write something");
//     else{
//         age=Number(age);
//         if(isNaN(age)) console.log("please enter a number...");
//         else {
//             if(age <0) console.log("Aamanya...");
//            else if(age >= 18) console.log(`Your age is ${age} and you are eligible for voting`);
//             else console.log(`Your age is ${age} and you are not eligible for voting`);
//         }
//     }
// } 

// for(let i=1 ;i<=10;i++){
//     console.log(`5 * ${i} = ${5 *i}`);
// }
// let count=0
// for(let i=1;i<=15;i++){
//     if(i>8) {
//         count++;
//     }
// }
// console.log(count);

// const prompt=require("prompt-sync")();
// let pass=prompt("Enter Password : ");
// let password="Harsh";
// if(pass === null) console.log("You Cancelled it...");
// else{
//     if(pass.trim() ===  "") console.log("Please enter the valid Password.");
//     else if(pass === password) console.log("Password is matched...");
//     else console.log("Password is matched.");
// }

let attempts=0;
let pass="harshbhai";
let password=prompt("Enter Password");
let flag=false
attempts++;
if(password === pass) flag=true;

while(password !== pass){
    if(attempts === 3){
        console.error("Account Locked...");
        break;
    }
    password=prompt("Enter Password");
    if(password === pass) flag=true;
    attempts++;
}

if(flag === true) console.log("Password is matched");