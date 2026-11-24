// profileBuilder.js

function createStudentProfile(name, id, program, yearLevel, schoolYear) {
    return {
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear
    };
}

const myProfile = createStudentProfile(
    "Kevin Emil B. Vinluan",
    6648,
    "BSIT",
    "2nd Year",
    "2026-2027"
);

console.log(myProfile);