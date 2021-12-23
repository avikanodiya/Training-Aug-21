import React from 'react'
import Item from './ExpenseItem'

const ExpenseList = ({ expenses, deleteHandler, editHandler }) => {

    return (
        <>
            <div className='container-fluid' style={{ width: '500px' }}>
                <ol class="list-group">

                    {expenses.map((item) => {
                        return (
                            <Item expenses={item} deleteHandler={deleteHandler} editHandler={editHandler} />
                        )
                    })}
                </ol>
            </div>
        </>
    )
}

export default ExpenseList
