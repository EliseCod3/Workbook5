let kids = [ { first : "Natalie", last : "Plyers" },
             { first: "Brittany", last: "Ray" },
             { first: "Zachary", last: "Westly" } ];

function buildFullName(kid) {
    return `${kid.first} ${kid.last}`;
}

let kidsNames = kids.map(buildFullName);
console.log(kidsNames);