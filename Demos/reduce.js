//GOAL OF REDUCE
//[a,d,c,d]
//a + b + c + d = total

let ticketPackage = [
    {ticketType: "Senior", price: 49.99, numTickets: 1},
    {ticketType: "Adult", price: 79.99, numTickets: 2},
    {ticketType: "Child", price: 29.99, numTickets: 3}
];

function getTotalCost(currentTotal, ticket) {
     return currentTotal + (ticket.price * ticket.numTickets);
}

    let sum = ticketPackage.reduce(getTotalCost, 0);
    // sum contains 299.94
    console.log(sum);