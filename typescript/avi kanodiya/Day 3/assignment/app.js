"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vacancy_1 = require("./vacancy");
var applicant_1 = require("./applicant");
var interview_1 = require("./interview");
var vac1 = new vacancy_1.Vacancy(12, 'Web Developer', 'IT', 30000, 'active');
var vac2 = new vacancy_1.Vacancy(6, 'Android Developer', 'IT', 28000, 'active');
var applicant1 = new applicant_1.Applicant(1, 'smit', 'CE', 30000, 'ahmedabad', 12);
var applicant2 = new applicant_1.Applicant(2, 'ajay', 'IT', 25000, 'gandhinagar', 6);
var interview1 = new interview_1.InterviewSchedule(112, 6, 2, '01/01/2021', 'ahmedabad');
vac1.insertData();
vac2.insertData();
applicant1.insertData();
applicant2.insertData();
interview1.insertData();
var x = vacancy_1.Vac.filter(function (a) {
    console.log(a.id);
});
console.log(applicant_1.applicant);
// function androidInterview() {
//     let andoridDeveloper = Vac.filter((a) => {
//         return a.position === 'Android Developer'
//     })
//     if (andoridDeveloper[0].vacancyStatus == 'active') {
//         let app = applicant.filter((a) => {
//             return a.vacancyId === andoridDeveloper[0].id
//         })
//         for (let i in app) {
//             console.log(app[i]);
//             // scheduledInterviews.push(app[i])
//         }
//     }
// }
// androidInterview()
