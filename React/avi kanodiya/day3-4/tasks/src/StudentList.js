import React, { Component } from 'react'
import StudentIDCard from './StudentIDCard'

// const StudentList = async ({ id, firstname, lastname, dob }) => {
//     return (
//         <div>
//             <h4>id: {id}</h4>
//             <h4>firstname: {firstname}</h4>
//             <h4>lastname: {lastname}</h4>
//             <h4>dob: {dob}</h4>
//         </div>
//     )
// }

// StudentList.prototype = {
//     id: PropTypes.string.isRequired,
//     firstname: PropTypes.string.isRequired,
//     lastname: PropTypes.string.isRequired,
//     dob: PropTypes.string.isRequired
// }

class StudentList extends Component {
    state = {
        student: [
            {
                id: 1,
                FirstName: 'avi',
                LastName: 'kanodiya',
                DOB: '23/04/2000'
            }, {
                id: 2,
                FirstName: 'smit',
                LastName: 'patel',
                DOB: '15/12/1999'
            }
        ]
    }
    render() {
        return (
            <div>
                <p>hello</p>
                {
                    this.state.student.map(student => (
                        <StudentIDCard key={student.id} student={student} />
                    ))
                }
            </div>
        )
    }
}

export default StudentList