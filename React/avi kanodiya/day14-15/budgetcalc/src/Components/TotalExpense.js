import React from 'react'

const TotalExpense = ({ expenses }) => {
    let total = expenses.reduce((acc, curr) => {
        return (acc += curr.amount)
    }, 0)
    console.log(total);
    return (
        <div className='container d-flex justify-content-between my-5'>
            <h1 className='mx-auto'>Total Spending : ${total} </h1>
        </div>
    )
}

export default TotalExpense
