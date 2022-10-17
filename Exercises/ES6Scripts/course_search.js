let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

// When does the PROG200 course start?
let searchedCourseId = "PROG200";

function searchCourses(value) {
    return value.CourseId == searchedCourseId;
}

let course = courses.find(searchCourses);
console.log(`The ${searchedCourseId} starts on ${course.StartDate}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// What is the title of the PROJ500 course?
let secondSearchedCourseId = "PROJ500";

function searchThroughCourse(value) {
    return value.CourseId == secondSearchedCourseId;
}

let secondCourse = courses.find(searchThroughCourse);
console.log(`The title of ${secondSearchedCourseId} is ${course.Title} `);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// What are the titles of the courses that cost $50 or less?
let searchedCost = 50;
let matching = [];

function searchForCourse(value) {
    return value.Fee <= searchedCost;
}

let cheapcourses = courses.filter(searchForCourse);
console.log(cheapcourses);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


// What classes meet in "Classroom 1"?

let searchedLocation = "Classroom 1";
let classMatching = [];

function searchClasses(value) {
    return value.Location = searchedLocation;
}

let matchingCourseLocation = courses.filter(searchClasses);
console.log(matchingCourseLocation);

