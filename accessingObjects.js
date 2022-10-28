const exampleObject = {
    name: "Jane",
    age: 30,
    'favorite foods': ['steak', 'doritos', 'grapes'],
    children: ['audrey', 'jacob'],
    pets: {
        cats: ['inanna', 'link'],
        dogs: ['max', 'ruby'],
        arachnid: ['kiki', 'lala']
    }
};
console.log(exampleObject["favorite foods"])
// DOT NOTATION

const dotPersonName = exampleObject.name;

console.log(dotPersonName);

// BRACKET NOTATION
console.log(exampleObject['name']);

// ACCESS ALL FAVORITE FOODS
console.log(exampleObject['favorite foods'][1])

// ACCESS ONE FAVORITE FOOD

// ACCESS SECOND CHILD WITH DOT NOTATION AND BRACKET NOTATION
console.log(exampleObject.children[1])

// GET SECOND ARACHNID NAME 


