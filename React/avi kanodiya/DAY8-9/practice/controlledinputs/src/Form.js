import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: ''
    })

    const changeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setData(prevValues => {
            return {
                ...prevValues, [e.target.name]: e.target.value
            }
        }
        )
    }

    const submitHandler = () => {
        console.log(data);
    }

    return (
        <div className='container-fluid w-25 mt-4'>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                    <input type="text" class="form-control" name="firstName" onChange={changeHandler} aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Last Name</label>
                    <input type="text" class="form-control" name="lastName" onChange={changeHandler} />
                </div>
                <button type="button" class="btn btn-primary" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Form