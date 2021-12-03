// import React from 'react'

// const StudentIDCard = ({ id, firstname, lastname, dob }) => {
//     return (
//         <div>
//             <h4>id: {id}</h4>
//             <h4>firstname: {firstname}</h4>
//             <h4>lastname: {lastname}</h4>
//             <h4>dob: {dob}</h4>
//         </div>
//     )
// }

// export default StudentIDCard
import React, { Component } from 'react'

export default class StudentIDCard extends Component {

    render() {
        const { id, FirstName, LastName, DOB } = this.props.student
        return (
            <div>
                <p>id: {id}</p>
                <p>firstname: {FirstName}</p>
                <p>lastname: {LastName}</p>
                <p>date of birth: {DOB}</p>
            </div>
        )
    }
}
