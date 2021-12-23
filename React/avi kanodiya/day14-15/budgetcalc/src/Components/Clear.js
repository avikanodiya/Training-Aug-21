import React from 'react'
import { MdDelete } from 'react-icons/md'

const Clear = ({ clearHandler }) => {
    return (
        <button className='btn btn-danger mx-auto mb-3' style={{ width: '200px' }} onClick={clearHandler}>
            CLEAR EXPENSES
            <span className='ms-3'><MdDelete className='btn-icon' /></span>
        </button>
    )
}

export default Clear
