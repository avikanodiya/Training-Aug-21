import { Vac, Vacancy } from './vacancy'
import { applicant, Applicant } from './applicant'
import { scheduledInterviews, InterviewSchedule } from './interview'

let vac1 = new Vacancy(12, 'Web Developer', 'IT', 30000, 'active')
let vac2 = new Vacancy(6, 'Android Developer', 'IT', 28000, 'active')
let applicant1 = new Applicant(1, 'smit', 'CE', 30000, 'ahmedabad', 12)
let applicant2 = new Applicant(2, 'ajay', 'IT', 25000, 'gandhinagar', 6)
let interview1 = new InterviewSchedule(112, 6, 2, '01/01/2021', 'ahmedabad')
vac1.insertData();
vac2.insertData();
applicant1.insertData();
applicant2.insertData();
interview1.insertData()
let x = Vac.filter((a) => {
    console.log(a.id);

})
console.log(applicant);


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
