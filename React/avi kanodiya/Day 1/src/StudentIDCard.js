import React from 'react'
import Personal from './personal'
import College from './college'

const collegeDetail = {
    collegeName: 'LDRP',
    address: 'GANDHINAGAR'
}

const student = [{
    id: 1,
    FirstName: 'avi',
    LastName: 'kanodiya',
    DOB: '23/04/2000'
}, {
    id: 2,
    FirstName: 'smit',
    LastName: 'patel',
    DOB: '15/12/1999'
}]

function StudentIDCard({ Para }) {
    return (

        <div>
            {Para}
            {student.map(s => {
                return <Personal id={s.id} firstname={s.FirstName} lastname={s.LastName} dob={s.DOB}></Personal>
            })}
            <College collegename={collegeDetail.collegeName} address={collegeDetail.address}></College>
        </div>

    )
}

export default StudentIDCard
