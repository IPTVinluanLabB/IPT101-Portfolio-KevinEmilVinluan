// mainApp.js

import { studentDetails, printSummary } from './studentModule.js';

const enrollmentMessage = printSummary(studentDetails, "Officially Enrolled");
console.log(enrollmentMessage);