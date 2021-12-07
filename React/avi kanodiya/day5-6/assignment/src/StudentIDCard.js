import React, { Component } from 'react'
import Personal from './personal'
import studentData from './studentData'


export default class StudentIDCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: studentData

        }
    }

    handleDelete = (id) => {
        const sortedData = this.state.students.filter((item) => item.id !== id)
        this.setState({
            students: sortedData
        })
    }


    render() {
        console.log(this.state.students);
        console.log(this.state.showInfo);
        const showInfo = this.state.showInfo
        return (
            <div>
                {this.state.students.map(student => {
                    return <Personal student={student} handleDelete={this.handleDelete}></Personal>
                })}

            </div>

        )
    }
}
