import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PersonalDetails from './PersonalDetails';
import CollegeDetails from './CollegeDetails';

const StudentIDcard = () => {
    const personalInitial = [
        {
            id: uuidv4(), firstName: 'joy', lastName: 'patel', DOB: '11/01/1999'
        },
        {
            id: uuidv4(), firstName: 'smit', lastName: 'shah', DOB: '14/08/1998'
        }

    ]
    const [personalDetails, setPersonalDetails] = useState(personalInitial)
    console.log(personalDetails);
    return (
        <>{personalDetails.map((student) => {
            <PersonalDetails student={student} />
        })
        }
        </>
    )
}

export default StudentIDcard
