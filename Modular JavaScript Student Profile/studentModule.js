// studentModule.js

export const studentDetails = {
    name: "Kevin Emil B. Vinluan",
    id: 6648,
    program: "BSIT",
    yearLevel: "2nd Year",
    schoolYear: "2026-2027"
};

export function printSummary(student, status){
    return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}