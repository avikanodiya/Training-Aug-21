import React from 'react'

const Alert = ({ type, text }) => {
    return (
        <>
            <div className={`alert alert-${type} mx-auto mt-2`} style={{ width: '500px' }} role="alert">
                {text}
            </div>
        </>
    )
}

export default Alert

