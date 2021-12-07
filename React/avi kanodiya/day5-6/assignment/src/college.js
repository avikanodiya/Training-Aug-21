import React from 'react'

function college({ data }) {
    console.log(data);
    return (
        <div>
            <p>college name: {data.college}</p>
            <p>college address: {data.address}</p>
        </div>
    )
}

export default college
