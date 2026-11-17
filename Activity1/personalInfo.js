//CHecked: IPtTeacherJonas Thurs November 12 9:49AM

// 1. Store Student Details
const studentProfile = {
    Name:"Vinluan, Kevin Emil B.",
    ID:"2026-6648",
    YearLevel:"2nd Year",
    Program:"Information Technology"
}

// 2. Store Enrolled Courses with corresponding units & grades
const enrolledCourses = {
    "Arts Appreciation": { units: 3, grade: 92 },
    "Networking 1": { units: 3, grade: 98},
    "Event-Driven Programming": { units: 3, grade: 90},
    "App Development and Emerging Technologies": { units: 3, grade: 95},
    "Integrative Programming and Technologies": { units: 3, grade: 91},
    "Pathfit 4: Sports and Adventure Activities": { units: 2, grade: 89}
}


// GWA Calculation
// 3. Calculate total units across all enrolled courses
const totalUnits = 
    enrolledCourses["Arts Appreciation"].units +
    enrolledCourses["Networking 1"].units +
    enrolledCourses["Event-Driven Programming"].units +
    enrolledCourses["App Development and Emerging Technologies"].units +
    enrolledCourses["Integrative Programming and Technologies"].units +
    enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units;

// 4. Calculate total weighted grade by multipying units by grade for each course
const totalWeightedGrade =
    (enrolledCourses["Arts Appreciation"].units * enrolledCourses["Arts Appreciation"].grade) +
    (enrolledCourses["Networking 1"].units * enrolledCourses["Networking 1"].grade) +
    (enrolledCourses["Event-Driven Programming"].units * enrolledCourses["Event-Driven Programming"].grade) +
    (enrolledCourses["App Development and Emerging Technologies"].units * enrolledCourses["App Development and Emerging Technologies"].grade) +
    (enrolledCourses["Integrative Programming and Technologies"].units * enrolledCourses["Integrative Programming and Technologies"].grade) +
    (enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units * enrolledCourses["Pathfit 4: Sports and Adventure Activities"].grade)

// 5. Compute the General Weighted Average (GWA)
const gwa = totalWeightedGrade / totalUnits;

// 6. To Determine the equivalent letter grade
let letterGrade = "";

// Conditional Statement to determine the letter grade using boolean AND (&&) 
if (gwa >= 98 && gwa <= 100) {
    letterGrade = "A";
} else if (gwa >= 94 && gwa < 98) {
    letterGrade = "A-";
} else if (gwa >= 90 && gwa < 94) {
    letterGrade = "B+";
} else if (gwa >= 87 && gwa < 90) {
    letterGrade = "B";
} else if (gwa >= 83 && gwa < 87) {
    letterGrade = "B-";
} else if (gwa >= 80 && gwa < 83) {
    letterGrade = "C+";
} else if (gwa >= 77 && gwa < 80) {
    letterGrade = "C";
} else if (gwa >= 73 && gwa < 77) {
    letterGrade = "D";
} else if (gwa >= 0 && gwa < 73) {
    letterGrade = "F";
}

// 7. Display the Student Profile Details
console.log("Student Name: ", studentProfile.Name)
console.log("ID Number: ", studentProfile.ID)
console.log("Year Level: ", studentProfile.YearLevel)
console.log("Program: ", studentProfile.Program)

// 8. Display enrolled courses along with units and grades
console.log("\n=Courses Enrolled=");
console.log(`Arts Appreciation - Units: ${enrolledCourses["Arts Appreciation"].units} | Grade: ${enrolledCourses["Arts Appreciation"].grade}`);
console.log(`Networking 1 - Units: ${enrolledCourses["Networking 1"].units} | Grade: ${enrolledCourses["Networking 1"].grade}`);
console.log(`Event-Driven Programming - Units: ${enrolledCourses["Event-Driven Programming"].units} | Grade: ${enrolledCourses["Event-Driven Programming"].grade}`);
console.log(`App Development and Emerging Technologies - Units: ${enrolledCourses["App Development and Emerging Technologies"].units} | Grade: ${enrolledCourses["App Development and Emerging Technologies"].grade}`);
console.log(`Integrative Programming and Technologies - Units: ${enrolledCourses["Integrative Programming and Technologies"].units} | Grade: ${enrolledCourses["Integrative Programming and Technologies"].grade}`);
console.log(`Pathfit 4: Sports and Adventure Activities - Units: ${enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units} | Grade: ${enrolledCourses["Pathfit 4: Sports and Adventure Activities"].grade}`);

// 9. Display final GWA and letter grade results
console.log("\nGeneral Weighted Average:", gwa)
console.log("Letter Grade:", letterGrade)
