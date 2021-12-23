import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import './expenseitem.css'

const ExpenseItem = ({ expenses, deleteHandler, editHandler }) => {
    const { id, charge, amount } = expenses
    return (
        <>
            <li class="list-group-item d-flex justify-content-between align-items-start mb-3">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{charge}</div>

                </div>
                <div className="me-5" style={{ width: '200px' }}>${amount}</div>
                <span id='delete'>
                    <MdEdit className='btn-icon' onClick={() => editHandler(id)} />
                </span>
                <span className='ms-2' id='delete'>
                    <MdDelete className='btn-icon' onClick={() => deleteHandler(id)} />
                </span>
            </li>
        </>
    )
}

export default ExpenseItem
