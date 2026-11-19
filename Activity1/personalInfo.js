//CHecked: IPtTeacherJonas Thurs November 12 9:49AM

// 1. Store Student Details
const bsit_students = {
    student1: {
        Name: "Vinluan, Kevin Emil B.",
        ID: "2026-6648",
        YearLevel: "2nd Year",
        Program: "Information Technology"
    },
    student2: {
        Name: "Caliging, Angelo A.",
        ID: "2026-6862",
        YearLevel: "2nd Year",
        Program: "Information Technology"
    },
    student3: {
        Name: "Derder, Mexandryl V.",
        ID: "2026-6716",
        YearLevel: "2nd Year",
        Program: "Information Technology"
    },
    student4: {
        Name: "Balbin, Andrie Benz P.",
        ID: "2026-6724",
        YearLevel: "2nd Year",
        Program: "Information Technology"
    }
};

// 2. Store Enrolled Courses with corresponding units
const enrolledCourses = {
    "Arts Appreciation": { units: 3 },
    "Networking 1": { units: 3 },
    "Event-Driven Programming": { units: 3 },
    "App Development and Emerging Technologies": { units: 3 },
    "Integrative Programming and Technologies": { units: 3 },
    "Pathfit 4: Sports and Adventure Activities": { units: 2 }
};

// 3. Store Grades in a separate object indicating which grades belong to which person
const studentGrades = {
    "Vinluan, Kevin Emil B.": {
        "Arts Appreciation": 92,
        "Networking 1": 98,
        "Event-Driven Programming": 90,
        "App Development and Emerging Technologies": 95,
        "Integrative Programming and Technologies": 91,
        "Pathfit 4: Sports and Adventure Activities": 89
    },
    "Caliging, Angelo A.": {
        "Arts Appreciation": 88,
        "Networking 1": 91,
        "Event-Driven Programming": 85,
        "App Development and Emerging Technologies": 89,
        "Integrative Programming and Technologies": 87,
        "Pathfit 4: Sports and Adventure Activities": 93
    },
    "Derder, Mexandryl V.": {
        "Arts Appreciation": 95,
        "Networking 1": 84,
        "Event-Driven Programming": 92,
        "App Development and Emerging Technologies": 80,
        "Integrative Programming and Technologies": 88,
        "Pathfit 4: Sports and Adventure Activities": 96
    },
    "Balbin, Andrie Benz P.": {
        "Arts Appreciation": 79,
        "Networking 1": 86,
        "Event-Driven Programming": 76,
        "App Development and Emerging Technologies": 90,
        "Integrative Programming and Technologies": 83,
        "Pathfit 4: Sports and Adventure Activities": 91
    }
};

// 4. Calculate total units across all enrolled courses
const totalUnits = 
    enrolledCourses["Arts Appreciation"].units +
    enrolledCourses["Networking 1"].units +
    enrolledCourses["Event-Driven Programming"].units +
    enrolledCourses["App Development and Emerging Technologies"].units +
    enrolledCourses["Integrative Programming and Technologies"].units +
    enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units;


// STUDENT 1: Vinluan, Kevin Emil B.
const s1Profile = bsit_students.student1;
const s1Grades = studentGrades[s1Profile.Name];

const s1TotalWeightedGrade =
    (enrolledCourses["Arts Appreciation"].units * s1Grades["Arts Appreciation"]) +
    (enrolledCourses["Networking 1"].units * s1Grades["Networking 1"]) +
    (enrolledCourses["Event-Driven Programming"].units * s1Grades["Event-Driven Programming"]) +
    (enrolledCourses["App Development and Emerging Technologies"].units * s1Grades["App Development and Emerging Technologies"]) +
    (enrolledCourses["Integrative Programming and Technologies"].units * s1Grades["Integrative Programming and Technologies"]) +
    (enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units * s1Grades["Pathfit 4: Sports and Adventure Activities"]);

const s1Gwa = s1TotalWeightedGrade / totalUnits;
let s1LetterGrade = "";

if (s1Gwa >= 98 && s1Gwa <= 100) {
    s1LetterGrade = "A";
} else if (s1Gwa >= 94 && s1Gwa < 98) {
    s1LetterGrade = "A-";
} else if (s1Gwa >= 90 && s1Gwa < 94) {
    s1LetterGrade = "B+";
} else if (s1Gwa >= 87 && s1Gwa < 90) {
    s1LetterGrade = "B";
} else if (s1Gwa >= 83 && s1Gwa < 87) {
    s1LetterGrade = "B-";
} else if (s1Gwa >= 80 && s1Gwa < 83) {
    s1LetterGrade = "C+";
} else if (s1Gwa >= 77 && s1Gwa < 80) {
    s1LetterGrade = "C";
} else if (s1Gwa >= 73 && s1Gwa < 77) {
    s1LetterGrade = "D";
} else if (s1Gwa >= 0 && s1Gwa < 73) {
    s1LetterGrade = "F";
}

console.log("==================================================");
console.log("Student Name:", s1Profile.Name);
console.log("ID Number:", s1Profile.ID);
console.log("Year Level:", s1Profile.YearLevel);
console.log("Program:", s1Profile.Program);
console.log("\n=Courses Enrolled=");
console.log(`Arts Appreciation - Units: ${enrolledCourses["Arts Appreciation"].units} | Grade: ${s1Grades["Arts Appreciation"]}`);
console.log(`Networking 1 - Units: ${enrolledCourses["Networking 1"].units} | Grade: ${s1Grades["Networking 1"]}`);
console.log(`Event-Driven Programming - Units: ${enrolledCourses["Event-Driven Programming"].units} | Grade: ${s1Grades["Event-Driven Programming"]}`);
console.log(`App Development and Emerging Technologies - Units: ${enrolledCourses["App Development and Emerging Technologies"].units} | Grade: ${s1Grades["App Development and Emerging Technologies"]}`);
console.log(`Integrative Programming and Technologies - Units: ${enrolledCourses["Integrative Programming and Technologies"].units} | Grade: ${s1Grades["Integrative Programming and Technologies"]}`);
console.log(`Pathfit 4: Sports and Adventure Activities - Units: ${enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units} | Grade: ${s1Grades["Pathfit 4: Sports and Adventure Activities"]}`);
console.log("\nGeneral Weighted Average:", s1Gwa);
console.log("Letter Grade:", s1LetterGrade);


// STUDENT 2: Caliging, Angelo A.
const s2Profile = bsit_students.student2;
const s2Grades = studentGrades[s2Profile.Name];

const s2TotalWeightedGrade =
    (enrolledCourses["Arts Appreciation"].units * s2Grades["Arts Appreciation"]) +
    (enrolledCourses["Networking 1"].units * s2Grades["Networking 1"]) +
    (enrolledCourses["Event-Driven Programming"].units * s2Grades["Event-Driven Programming"]) +
    (enrolledCourses["App Development and Emerging Technologies"].units * s2Grades["App Development and Emerging Technologies"]) +
    (enrolledCourses["Integrative Programming and Technologies"].units * s2Grades["Integrative Programming and Technologies"]) +
    (enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units * s2Grades["Pathfit 4: Sports and Adventure Activities"]);

const s2Gwa = s2TotalWeightedGrade / totalUnits;
let s2LetterGrade = "";

if (s2Gwa >= 98 && s2Gwa <= 100) {
    s2LetterGrade = "A";
} else if (s2Gwa >= 94 && s2Gwa < 98) {
    s2LetterGrade = "A-";
} else if (s2Gwa >= 90 && s2Gwa < 94) {
    s2LetterGrade = "B+";
} else if (s2Gwa >= 87 && s2Gwa < 90) {
    s2LetterGrade = "B";
} else if (s2Gwa >= 83 && s2Gwa < 87) {
    s2LetterGrade = "B-";
} else if (s2Gwa >= 80 && s2Gwa < 83) {
    s2LetterGrade = "C+";
} else if (s2Gwa >= 77 && s2Gwa < 80) {
    s2LetterGrade = "C";
} else if (s2Gwa >= 73 && s2Gwa < 77) {
    s2LetterGrade = "D";
} else if (s2Gwa >= 0 && s2Gwa < 73) {
    s2LetterGrade = "F";
}

console.log("\n==================================================");
console.log("Student Name:", s2Profile.Name);
console.log("ID Number:", s2Profile.ID);
console.log("Year Level:", s2Profile.YearLevel);
console.log("Program:", s2Profile.Program);
console.log("\n=Courses Enrolled=");
console.log(`Arts Appreciation - Units: ${enrolledCourses["Arts Appreciation"].units} | Grade: ${s2Grades["Arts Appreciation"]}`);
console.log(`Networking 1 - Units: ${enrolledCourses["Networking 1"].units} | Grade: ${s2Grades["Networking 1"]}`);
console.log(`Event-Driven Programming - Units: ${enrolledCourses["Event-Driven Programming"].units} | Grade: ${s2Grades["Event-Driven Programming"]}`);
console.log(`App Development and Emerging Technologies - Units: ${enrolledCourses["App Development and Emerging Technologies"].units} | Grade: ${s2Grades["App Development and Emerging Technologies"]}`);
console.log(`Integrative Programming and Technologies - Units: ${enrolledCourses["Integrative Programming and Technologies"].units} | Grade: ${s2Grades["Integrative Programming and Technologies"]}`);
console.log(`Pathfit 4: Sports and Adventure Activities - Units: ${enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units} | Grade: ${s2Grades["Pathfit 4: Sports and Adventure Activities"]}`);
console.log("\nGeneral Weighted Average:", s2Gwa);
console.log("Letter Grade:", s2LetterGrade);


// STUDENT 3: Derder, Mexandryl V.
const s3Profile = bsit_students.student3;
const s3Grades = studentGrades[s3Profile.Name];

const s3TotalWeightedGrade =
    (enrolledCourses["Arts Appreciation"].units * s3Grades["Arts Appreciation"]) +
    (enrolledCourses["Networking 1"].units * s3Grades["Networking 1"]) +
    (enrolledCourses["Event-Driven Programming"].units * s3Grades["Event-Driven Programming"]) +
    (enrolledCourses["App Development and Emerging Technologies"].units * s3Grades["App Development and Emerging Technologies"]) +
    (enrolledCourses["Integrative Programming and Technologies"].units * s3Grades["Integrative Programming and Technologies"]) +
    (enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units * s3Grades["Pathfit 4: Sports and Adventure Activities"]);

const s3Gwa = s3TotalWeightedGrade / totalUnits;
let s3LetterGrade = "";

if (s3Gwa >= 98 && s3Gwa <= 100) {
    s3LetterGrade = "A";
} else if (s3Gwa >= 94 && s3Gwa < 98) {
    s3LetterGrade = "A-";
} else if (s3Gwa >= 90 && s3Gwa < 94) {
    s3LetterGrade = "B+";
} else if (s3Gwa >= 87 && s3Gwa < 90) {
    s3LetterGrade = "B";
} else if (s3Gwa >= 83 && s3Gwa < 87) {
    s3LetterGrade = "B-";
} else if (s3Gwa >= 80 && s3Gwa < 83) {
    s3LetterGrade = "C+";
} else if (s3Gwa >= 77 && s3Gwa < 80) {
    s3LetterGrade = "C";
} else if (s3Gwa >= 73 && s3Gwa < 77) {
s3LetterGrade = "D";
} else if (s3Gwa >= 0 && s3Gwa < 73) {
s3LetterGrade = "F";
}

console.log("\n==================================================");
console.log("Student Name:", s3Profile.Name);
console.log("ID Number:", s3Profile.ID);
console.log("Year Level:", s3Profile.YearLevel);
console.log("Program:", s3Profile.Program);
console.log("\n=Courses Enrolled=");
console.log(`Arts Appreciation - Units: ${enrolledCourses["Arts Appreciation"].units} | Grade: ${s3Grades["Arts Appreciation"]}`);
console.log(`Networking 1 - Units: ${enrolledCourses["Networking 1"].units} | Grade: ${s3Grades["Networking 1"]}`);
console.log(`Event-Driven Programming - Units: ${enrolledCourses["Event-Driven Programming"].units} | Grade: ${s3Grades["Event-Driven Programming"]}`);
console.log(`App Development and Emerging Technologies - Units: ${enrolledCourses["App Development and Emerging Technologies"].units} | Grade: ${s3Grades["App Development and Emerging Technologies"]}`);
console.log(`Integrative Programming and Technologies - Units: ${enrolledCourses["Integrative Programming and Technologies"].units} | Grade: ${s3Grades["Integrative Programming and Technologies"]}`);
console.log(`Pathfit 4: Sports and Adventure Activities - Units: ${enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units} | Grade: ${s3Grades["Pathfit 4: Sports and Adventure Activities"]}`);
console.log("\nGeneral Weighted Average:", s3Gwa);
console.log("Letter Grade:", s3LetterGrade);

// STUDENT 4: Balbin, Andrie Benz P.
const s4Profile = bsit_students.student4;
const s4Grades = studentGrades[s4Profile.Name];
const s4TotalWeightedGrade =
(enrolledCourses["Arts Appreciation"].units * s4Grades["Arts Appreciation"]) +
(enrolledCourses["Networking 1"].units * s4Grades["Networking 1"]) +
(enrolledCourses["Event-Driven Programming"].units * s4Grades["Event-Driven Programming"]) +
(enrolledCourses["App Development and Emerging Technologies"].units * s4Grades["App Development and Emerging Technologies"]) +
(enrolledCourses["Integrative Programming and Technologies"].units * s4Grades["Integrative Programming and Technologies"]) +
(enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units * s4Grades["Pathfit 4: Sports and Adventure Activities"]);
const s4Gwa = s4TotalWeightedGrade / totalUnits;

let s4LetterGrade = "";

if (s4Gwa >= 98 && s4Gwa <= 100) {
s4LetterGrade = "A";
} else if (s4Gwa >= 94 && s4Gwa < 98) {
s4LetterGrade = "A-";
} else if (s4Gwa >= 90 && s4Gwa < 94) {
s4LetterGrade = "B+";
} else if (s4Gwa >= 87 && s4Gwa < 90) {
s4LetterGrade = "B";
} else if (s4Gwa >= 83 && s4Gwa < 87) {
s4LetterGrade = "B-";
} else if (s4Gwa >= 80 && s4Gwa < 83) {
s4LetterGrade = "C+";
} else if (s4Gwa >= 77 && s4Gwa < 80) {
s4LetterGrade = "C";
} else if (s4Gwa >= 73 && s4Gwa < 77) {
s4LetterGrade = "D";
} else if (s4Gwa >= 0 && s4Gwa < 73) {
s4LetterGrade = "F";
}

console.log("\n==================================================");
console.log("Student Name:", s4Profile.Name);
console.log("ID Number:", s4Profile.ID);
console.log("Year Level:", s4Profile.YearLevel);
console.log("Program:", s4Profile.Program);
console.log("\n=Courses Enrolled=");
console.log(`Arts Appreciation - Units: ${enrolledCourses["Arts Appreciation"].units} | Grade: ${s4Grades["Arts Appreciation"]}`);
console.log(`Networking 1 - Units: ${enrolledCourses["Networking 1"].units} | Grade: ${s4Grades["Networking 1"]}`);
console.log(`Event-Driven Programming - Units: ${enrolledCourses["Event-Driven Programming"].units} | Grade: ${s4Grades["Event-Driven Programming"]}`);
console.log(`App Development and Emerging Technologies - Units: ${enrolledCourses["App Development and Emerging Technologies"].units} | Grade: ${s4Grades["App Development and Emerging Technologies"]}`);
console.log(`Integrative Programming and Technologies - Units: ${enrolledCourses["Integrative Programming and Technologies"].units} | Grade: ${s4Grades["Integrative Programming and Technologies"]}`);
console.log(`Pathfit 4: Sports and Adventure Activities - Units: ${enrolledCourses["Pathfit 4: Sports and Adventure Activities"].units} | Grade: ${s4Grades["Pathfit 4: Sports and Adventure Activities"]}`);
console.log("\nGeneral Weighted Average:", s4Gwa);
console.log("Letter Grade:", s4LetterGrade);
