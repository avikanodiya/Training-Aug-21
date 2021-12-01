import React from 'react'

function Personal({ id, firstname, lastname, dob }) {
    return (
        <div>
            <p>id: {id}</p>
            <p>Firstname:{firstname}</p>
            <p>LastName: {lastname}</p>
            <p>DOB: {dob}</p>
        </div>
    )
}

export default Personal
