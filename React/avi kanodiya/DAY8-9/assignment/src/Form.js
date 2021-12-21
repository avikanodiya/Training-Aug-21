import React, { useState } from 'react'

const Form = () => {
    const [toggleInfo, setToggleInfo] = useState(false)
    const [studentData, getStudentData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        collegeName: ''
    })

    const dataHandler = (e) => {

        getStudentData(prevValues => {
            return {
                ...prevValues, [e.target.name]: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setToggleInfo(true)
    }
    const { id, firstName, lastName, collegeName } = studentData
    return (
        <div className='container mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="studentid">ID</label>
                    <input type="text" className='form-control' id='studentid' name='id' onChange={dataHandler} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="firstname">First Name</label>
                    <input type="text" className='form-control' id='firstname' name='firstName' onChange={dataHandler} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="lastname">Last Name</label>
                    <input type="text" className='form-control' id='lastname' name='lastName' onChange={dataHandler} />
                </div>
                <div className="mb-3">
                    <label className='form-label' htmlFor="collegename">College Name</label>
                    <input type="text" className="form-control" id='collegename' name='collegeName' onChange={dataHandler} />
                </div>
                <button type='submit' className='btn btn-primary' onClick={submitHandler}>Submit</button>
                {toggleInfo ? <div className='container mt-4'>
                    <h6>id : {id}</h6>
                    <h6>first Name : {firstName}</h6>
                    <h6>last Name : {lastName}</h6>
                    <h6>college Name : {collegeName}</h6>
                </div> : <p></p>}
            </form>
        </div>
    )
}

export default Form
