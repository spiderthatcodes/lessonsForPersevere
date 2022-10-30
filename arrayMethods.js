const exampleArray = ["one", "two", "three", "four"];

const exampleObjectArray = [
    {
        name: "Anne",
        age: 22
    },
    {
        name: "Beatrice",
        age: 23
    },
    {
        name: "Collette",
        age: 22
    },
    {
        name: "Diana",
        age: 23
    }
];

// MAPPING AN ARRAY
// const newArray = [];

// exampleArray.map((item, index) => newArray.push(item + index));

// console.log(newArray);

// MAPPING AN ARRAY OF OBJECTS

// exampleObjectArray.map((item, index) => console.log(item.name, index));

// FILTER AN ARRAY

let filteredArray = exampleArray.filter((item) => item.includes("ur"));

// console.log(filteredArray);

let filteredObject = exampleObjectArray.filter((item) => item.age === 23).map((item) => item.name);

console.log(filteredObject);
