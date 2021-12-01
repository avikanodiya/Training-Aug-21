import React from 'react'

function College({ collegename, address }) {
    return (
        <div>
            <p>college name: {collegename}</p>
            <p>college address : {address}</p>
            <img src="" alt="college logo" />
        </div>
    )
}

export default College
