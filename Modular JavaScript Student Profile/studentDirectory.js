// studentDirectory.js

const studentRecord = {
    name: "Kevin Emil B. Vinluan",
    id: 6648,
    program: "BSIT",
    yearLevel: "2nd Year",
    schoolYear: "2026-2027",

    getEnrollmentDetails(semester, campus) {
        return `[${this.schoolYear} | ${semester}] Student ${this.name} (ID: ${this.id}) from ${this.program} (${this.yearLevel}) is registered at ${campus}.`;
    }
};

console.log(studentRecord.getEnrollmentDetails("1st Semester", "Main Campus"));