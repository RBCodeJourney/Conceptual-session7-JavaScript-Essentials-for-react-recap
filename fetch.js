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

// convert Object to JSON

const programmerJson = JSON.stringify(programmer);
// console.log(programmerJson)


// convert json to object 
const programmerObject = JSON.parse(programmerJson)
console.log(programmerObject);
