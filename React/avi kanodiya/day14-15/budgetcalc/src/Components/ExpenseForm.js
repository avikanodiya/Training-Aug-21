import React from 'react'

const ExpenseForm = ({ chargeHandler, amountHandler, submitHandler, charge, amount, edit }) => {

    return (
        <>
            <div class="card-header">
                Budget Calculator
            </div>
            <div class="card-body">
                <div className="row">
                    <div class="col input-group mb-3">
                        <label className='form-label me-2' htmlFor="charge">Charge</label>
                        <input type="text" value={charge} class="form-control" placeholder="e.g. rent" aria-label="Charge" id='charge' name='charge' aria-describedby="basic-addon1" onChange={chargeHandler} />
                    </div>
                    <div class="col input-group mb-3">
                        <label className='form-label me-2' htmlFor="amount">Amount</label>
                        <input type="number" value={amount} class="form-control" placeholder="e.g. 100" id='amount' name='amount' onChange={amountHandler} />
                    </div>
                </div>
                <a href="#" class="btn btn-danger" onClick={submitHandler}>{edit ? 'edit' : 'submit'}</a>
            </div>
        </>
    )
}

export default ExpenseForm
