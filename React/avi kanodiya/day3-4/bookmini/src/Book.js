import React, { Component } from 'react'
import booksData from './bookData'
// import { Button } from 'react-bootstrap'

export default class Book extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     books: booksData
        // }
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     console.log(this.state.count);
    // }

    // addCount = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // lowerCount = () => {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }

    // resetCount = () => {
    //     this.setState({
    //         count: 0
    //     })

    // }

    render() {
        const { id, image, title, author } = this.props.info
        const { handleDelete } = this.props

        return (
            <article className="book">
                <img src={image} alt="book" />
                <div> <h4>Title : {title}</h4>
                    <h6>Author : {author}</h6>
                    <button type="button" onClick={() => handleDelete(id)}>Delete me</button>
                    {/* <button type="button" onClick={addCount}>add count</button>
                    <button type="button" onClick={resetCount}>reset count</button>
                    <button type="button" onClick={lowerCount}>lower count</button> */}
                </div>
            </article>
        )
    }
}