// array destructuring 

const numberArray = [55, 75];

// const x = numberArray[0];
// const y = numberArray[1];
// console.log(x, y);


// const [x, y] = [55, 75];

// const [x, y] = numberArray;


// maintain sequence

/* const number = [10, 20, 30];
const [, x] = number;
console.log(x); */


/* const makeArray = (num1, num2) => {
    const result = [num1, num2];
    return result;
};

const [x, y] = makeArray(10, 20);

console.log(x,y) */

// object destructuring 

const programmer = {
    name: 'j khan',
    age: 35,
    language: ['javaScript', 'python', 'c++'],
    specification: {
        height: 18,
        weight: 55,
        drink: 'coco-cola',
        watch: {
            color: 'white',
            price: 12,
            brand: 'apple'
        }
    }
};

// const { age, name } = programmer;
// console.log(age, name);

// console.log(programmer.specification.watch.color);
// console.log(programmer.specification.watch.price);
// console.log(programmer.specification.watch.brand);

const { brand, price, color } = programmer?.specification?.watch;
console.log(brand, price, color);