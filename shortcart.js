// falsy value
// falsy, " ", 0, false, undefine, null

// truthy value

// truthy, '12', 122324, {}, [], true

/* const myVar = 10;
if (!myVar) {
    console.log(myVar);
} else { console.log(myVar) } */


// ternary operator

const myMoney = 80;
/* if (myMoney > 80) {
    console.log('biriyani khabo')
} else {
    console.log('khabona')
} */

/* const myValue = 100;
const result = myMoney > 100 || myValue > 80 ? 'biriyani khabo' : 'khabona';
console.log(result) */



// ***** convert string to number

// const num1 = '12';
// // console.log(typeof num1);

// const num1Str = +num1;
// console.log(num1Str);


// *****number to string

/* const num1 = 10;
const num1Str = num1 + '';
console.log(typeof num1Str); */

const showUser = () => console.log('showUser');
const hideUser = () => console.log('hideUser');

// isActive ? showUser() : hideUser();

// isActive && showUser();

// toggle 

let isActive = true;

isActive = !isActive;
console.log(isActive);

