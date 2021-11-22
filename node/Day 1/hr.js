let vacancieArray = [];
let appliantArray = [];
let irArray = [];
let siArray = [];
class Vacancie {
    constructor(vacanciesId,positionName,departmentName,cTc,vacancieStatus) {
        this.vacanciesId = vacanciesId,
        this.positionName = positionName,
        this.departmentName = departmentName,
        this.cTc = cTc
        this.vacancieStatus = vacancieStatus
    }
    vacancieDataStore(){
        let vacancieJson ={
            vacanciesId:this.vacanciesId,
            positionName:this.positionName,
            departmentName:this.departmentName,
            cTc:this.cTc,
            vacancieStatus:this.vacancieStatus
        }
        vacancieArray.push({vacancieJson});
        console.log(vacancieArray)

    }
}
class Applicant{
    constructor(applicantID,applicantName,exepereince,Field,Specification,ExpectedCtC,Location,vacanciesId){
        this.applicantID =applicantID,
        this.applicantName =applicantName,
        this.exepereince = exepereince,
        this.Field = Field,
        this.Specification = Specification,
        this.ExpectedCtC = ExpectedCtC,
        this.Location = Location
        this.vacanciesId = vacanciesId;
    }
    applicantDataStore(){

       let applicantJson = {
            applicantID:this.applicantID,
            applicantName:this.applicantName,
            exepereince:this.exepereince,
            Field:this.Field,
            Specification:this.Specification,
            ExpectedCtC:this.ExpectedCtC,
            Location:this.Location,
            vacanciesId:this.vacanciesId
        }
        appliantArray.push(applicantJson);

    }
}
class SchedulingInterview {
    constructor(InterviewId,vacanciesId,applicantID,date,Location){
        this.InterviewId = InterviewId,
        this.vacanciesId = vacanciesId,
        this.applicantID = applicantID,
        this.date =date,
        this.Location = Location
    }
    siDataStore(){

    let siJson = {
            InterviewId:this.InterviewId,
            vacanciesId:this.vacanciesId,
            applicantID:this.applicantID,
            date:this.date,
            Location:this.Location
        }
        siArray.push(siJson);
    }
}
class InterviewResult{
    constructor(InterviewId,applicantID,vacanciesId,ResultStatus)
    {
        this.InterviewId = InterviewId,
        this.vacanciesId = vacanciesId,
        this.applicantID = applicantID,
        this.ResultStatus = ResultStatus
    }
    irDataStore(){
        irJson = {
            InterviewId:this.InterviewId,
            applicantID:this.applicantID,
            vacanciesId:this.vacanciesId,
            ResultStatus:this.ResultStatus
        }
        irArray.push(irJson);
        
    }

}
let vacanat1 = new Vacancie(111,"Software Engineer","IT",2000000,"Active");
let vacanat2 = new Vacancie(222,"Software Engineer","IT",2000000,"Active");
let Applicant1 = new Applicant(224,"Sandip Prajapati",2,"CE","MERN stack","4000000","Sweden",111)
vacanat1.vacancieDataStore()
vacanat2.vacancieDataStore()
Applicant1.applicantDataStore()

console.log(vacancieArray);
console.log(appliantArray);
console.log(siArray);
console.log(irArray);
// localStorage.setItem("Vacancie",JSON.stringify(vacancieArray));
// localStorage.setItem("Applicant",JSON.stringify(appliantArray));
// localStorage.setItem("Scheduling Interview",JSON.stringify(siArray));
// localStorage.setItem("Result Interview",JSON.stringify(irArray));