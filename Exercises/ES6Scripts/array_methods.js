let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];

//return name of items
function grabItemName(object) {
    return object.item;
}

function sortNames(a, b) {
    if(a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
};

function displayName(itemName) {
    console.log(itemName);
}

let itemNames = cart.map(grabItemName);

itemNames.forEach(displayName);
console.log("-----------------------");
//Total cost of cart
function getSum(currentTotal, itemValue) {
    return currentTotal + itemValue.price * itemValue.quantity;
}
let sum = cart.reduce(getSum, 0);
console.log(`Total: ${sum}`);
