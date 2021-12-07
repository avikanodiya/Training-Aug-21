import React, { Component } from 'react'
import College from './college'
import { collegeData } from './studentData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: true
        }
    }

    toggleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
        console.log(this.state.showInfo);
    }

    render() {
        const { id, name, dob } = this.props.student
        const handleDelete = this.props.handleDelete
        let coll = collegeData.filter((item) => item.id === id)
        return (

            <div className='card' style={{ width: '18rem', margin: '2rem' }}>
                <img className='card-img-top rounded' src="https://randomuser.me/api/portraits/thumb/men/67.jpg" alt="student" />
                <div className='card-body'>
                    <h5 className='card-title'>Name : {name}</h5>
                    <p className='card-text'>id: {id}</p>
                    <p>DOB: {dob}</p>
                    <button className='btn btn-danger' type='button' onClick={() => handleDelete(id)}>delete</button>
                    <button className='btn btn-primary' type='button' onClick={this.toggleInfo}>toggle collegeInfo</button>
                </div>


                {
                    this.state.showInfo ? (<College data={coll[0]}></College>) : null
                }

                {/* {
                    this.state.showInfo && (<College data={coll[0]}></College>)
                } */}
            </div>
        )
    }
}

// let showInfo = false
// let coll;


// const toggleInfo = (id) => {
//     showInfo = !showInfo
//     console.log(showInfo);
//     console.log(id);
//     coll = collegeData.filter((item) => item.id === id)
// }

// function Personal({ student, handleDelete }) {
//     console.log(student);
//     const { id, name, dob } = student
//     return (
//         <div>
//             <p>id: {id}</p>
//             <p>name: {name}</p>
//             <p>DOB: {dob}</p>
//             <button type='button' onClick={() => handleDelete(id)}>delete</button>
//             <button type='button' onClick={() => toggleInfo(id)}>toggle collegeInfo</button>
//             {
//                 showInfo ? (<College data={coll}></College>) : null
//             }
//         </div>
//     )
// }

// export default Personal
