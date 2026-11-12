const studentProfile = {
    Name:"Vinluan, Kevin Emil B.",
    ID:"2026-6648",
    YearLevel:"2nd Year",
    Program:"Information Technology"
}

const enrolledCourses = {
    "Arts Appreciation": { units: 3, grade: 92 },
    "Networking 1": { units: 3, grade: 98},
    "Event-Driven Programming": { units: 3, grade: 90},
    "App Development and Emerging Technologies": { units: 3, grade: 95},
    "Integrative Programming and Technologies": { units: 3, grade: 91},
    "Pathfit 4: Sports and Adventure Activities": { units: 2, grade: 89}
}

// GWA Calculation
const totalUnits = 
    enrolledCourses["Arts Appreciation"].units +
    enrolledCourses["Networking 1"].units +
    enrolledCourses["Event-Driven Programming"].units +
    enrolledCourses["App Development and Emerging Technologies"].units +
    enrolledCourses["Integrative Programming and Technologies"].units +
    enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units;


const totalWeightedGrade =
    (enrolledCourses["Arts Appreciation"].units * enrolledCourses["Arts Appreciation"].grade) +
    (enrolledCourses["Networking 1"].units * enrolledCourses["Networking 1"].grade) +
    (enrolledCourses["Event-Driven Programming"].units * enrolledCourses["Event-Driven Programming"].grade) +
    (enrolledCourses["App Development and Emerging Technologies"].units * enrolledCourses["App Development and Emerging Technologies"].grade) +
    (enrolledCourses["Integrative Programming and Technologies"].units * enrolledCourses["Integrative Programming and Technologies"].grade) +
    (enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units * enrolledCourses["Pathfit 4: Sports and Adventure Activities"].grade)

// Formula 
const gwa = totalWeightedGrade / totalUnits;

let letterGrade = "";

if (gwa >= 98) {
    letterGrade = "A";
} else if (gwa >= 94) {
    letterGrade = "A-";
} else if (gwa >= 90) {
    letterGrade = "B+";
} else if (gwa >= 87) {
    letterGrade = "B";
} else if (gwa >= 83) {
    letterGrade = "B-";
} else if (gwa >= 80) {
    letterGrade = "C+";
} else if (gwa >= 77) {
    letterGrade = "C";
} else if (gwa >= 73) {
    letterGrade = "D";
} else if (gwa <= 72) {
    letterGrade = "F";
}

console.log("Student Name: ", studentProfile.Name)
console.log("ID Number: ", studentProfile.ID)
console.log("Year Level: ", studentProfile.YearLevel)
console.log("Program: ", studentProfile.Program)

// Courses Enrolled
// console.log("\n=Courses Enrolled=")
// console.log("Arts Appreciation")
// console.log("Networking 1")
// console.log("Event-Driven Programming")
// console.log("App Development and Emerging Technologies")
// console.log("Integrative Programming and Technologies")
// console.log("Pathfit 4: Sports and Adventure Activities")
console.log("\n=Courses Enrolled=");
console.log(`Arts Appreciation - Units: ${enrolledCourses["Arts Appreciation"].units} | Grade: ${enrolledCourses["Arts Appreciation"].grade}`);
console.log(`Networking 1 - Units: ${enrolledCourses["Networking 1"].units} | Grade: ${enrolledCourses["Networking 1"].grade}`);
console.log(`Event-Driven Programming - Units: ${enrolledCourses["Event-Driven Programming"].units} | Grade: ${enrolledCourses["Event-Driven Programming"].grade}`);
console.log(`App Development and Emerging Technologies - Units: ${enrolledCourses["App Development and Emerging Technologies"].units} | Grade: ${enrolledCourses["App Development and Emerging Technologies"].grade}`);
console.log(`Integrative Programming and Technologies - Units: ${enrolledCourses["Integrative Programming and Technologies"].units} | Grade: ${enrolledCourses["Integrative Programming and Technologies"].grade}`);
console.log(`Pathfit 4: Sports and Adventure Activities - Units: ${enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units} | Grade: ${enrolledCourses["Pathfit 4: Sports and Adventure Activities"].grade}`);

console.log("\nGeneral Weighted Average:", gwa)
console.log("Letter Grade:", letterGrade)