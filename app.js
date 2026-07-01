const prompt=require("prompt-sync")();
let age =prompt("Enter your age : ");
if(age === null) console.log("You cancelled it...");
else {
    if(age.trim() === "") console.log("please write something");
    else{
        age=Number(age);
        if(isNaN(age)) console.log("please enter a number...");
        else {
            if(age <0) console.log("Aamanya...");
           else if(age >= 18) console.log(`Your age is ${age} and you are eligible for voting`);
            else console.log(`Your age is ${age} and you are not eligible for voting`);
        }
    }
} 

for(let i=1 ;i<=10;i++){
    console.log(`5 * ${i} = ${5 *i}`);
}
let count=0
for(let i=1;i<=15;i++){
    if(i>8) {
        count++;
    }
}
console.log(count);

const prompt=require("prompt-sync")();
let pass=prompt("Enter Password : ");
let password="Harsh";
if(pass === null) console.log("You Cancelled it...");
else{
    if(pass.trim() ===  "") console.log("Please enter the valid Password.");
    else if(pass === password) console.log("Password is matched...");
    else console.log("Password is matched.");
}

let pass=prompt("Enter Password : ");
let password="harshbhai";
let flag=false;
let attempt=0;
    attempt++
    if(password === pass) flag=true; 
while(pass !== password){
    if(attempt === 3) {
        console.log("Account Locked.");
        break;
    }
    pass=prompt("Enter Password : ");
    if(password === pass)
    attempt++
}
if(flag === true) console.log('Open');