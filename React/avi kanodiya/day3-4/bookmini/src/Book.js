import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     console.log(this.state.count);
    // }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    lowerCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount = () => {
        this.setState({
            count: 0
        })

    }

    render() {
        const { image, title, author } = this.props.info

        return (
            <article className="book">
                <img src={image} alt="book" />
                <div> <h4>Title : {title}</h4>
                    <h6>Author : {author}</h6>
                    <Button>Delete me</Button>
                    <button type="button" onClick={this.addCount}>add count</button>
                    <button type="button" onClick={this.resetCount}>reset count</button>
                    <button type="button" onClick={this.lowerCount}>lower count</button>
                    <h6>counter : {this.state.count}</h6>
                </div>
            </article>
        )
    }
}