const fruits = ["apple", "banana", "orange", "strawberry"];

// for (let i=0; i<fruits.length; i++) {
//     console.log(fruits[i])
// }

// for (let i of fruits) {
//     console.log(i)
// }

fruits.forEach(element => console.log(element))

const numbers = [1, 2, 3, 4, 5];
const mappedNumbers = numbers.map(current => current * current);
console.log(mappedNumbers)

const languages = ["python", "javascript", "ruby", "html", "c"]
const filteredLanguages = languages.filter(current => current.length <= 4)
console.log(filteredLanguages)

const animals = ["chicken", "zebra", "rabbit", "mouse", "spider"];
const checkingAnimalLength = (current) => current.length > 10;
console.log(animals.some(checkingAnimalLength));

const numbers = [1, 4, 9, 16];
const reducer = (accumulator, current) => {accumulator + current;};
console.log(numbers.reduce(reducer))