/* const person = [
    { name: 'john', age: 35, phone: 10302, house: '123a' },
    { name: 'deo', age: 18, phone: 103, house: '12d' },
    { name: 'mitchel', age: 55, phone: 10, house: '10dfd' },
    { name: 'tony', age: 70, phone: 103022323, house: '12355a' }
]; */


// map

/* const age = person.map(p => p.age);
console.log(age);

const name = person.map(p => p.name);
console.log(name); */


// foreach

/* person.forEach((p) => {
    console.log(p.phone);
});
 */








// find

// প্রথমে যেটা পাবে সেটা রিটার্ন করবে , মানে একটা পেয়ে গেলে আর খুজবে না । যেটা পাবে সেটাই রিটার্ন করবে.

// const special = person.find((p) => p.name.includes('n'));
// console.log(special);
// output - { name: 'john', age: 35, phone: 10302, house: '123a' }



// filter


// const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const fiftyUp = number.filter((n) => n > 50);
// console.log(fiftyUp);

// output- [ 60, 70, 80, 90, 100 ]


const person = [
    { name: 'john', age: 35, phone: 10302, house: '123a' },
    { name: 'deo', age: 18, phone: 103, house: '12d' },
    { name: 'mitchel', age: 55, phone: 10, house: '10dfd' },
    { name: 'tony', age: 70, phone: 103022323, house: '12355a' }
];


// const newArray2 = person.filter((p) => p.house !== '12d');
// console.log(newArray2);

