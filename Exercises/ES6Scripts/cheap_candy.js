let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Skittles Original", price: 1.98},
    {product: "Snickers Minis", price: 4.48},
    {product: "Hershey Milk Chocolate Bar", price: 6.29},
    {product: "Nerds", price: 3.48},
    {product: "Sour Patch Kids", price: 5.77},
    {product: "KitKat", price: 4.66},
    // TODO: fill the array with 10 candies of various
    // price ranges
];

// Which candies costs less than $4.00?
let cheaperCandies = products.filter((productItem) => productItem.price < 4.00);
console.log(`Candies that cost less than $4.00: `);
console.log(cheaperCandies);

// Which candies has "M&M" its name?

let mnmCandies = products.filter((product) => product.product.includes("M&Ms"));
console.log(" ");
console.log(`M&M candies in stock: `);
console.log(mnmCandies);

// Do we carry "Swedish Fish"?
let foundCandy = products.find((product) => product.product.includes("Swedish Fish"));
console.log(" ");
console.log("What we have in stock:");
console.log(foundCandy.length != 0);
