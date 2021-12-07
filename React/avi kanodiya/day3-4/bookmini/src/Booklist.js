import React, { Component } from 'react'
import Book from './Book'
import booksData from './bookData'

export default class Booklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: booksData
        }
    }

    handleDelete = (id) => {
        console.log(this.state.books);
        const sortedBooks = this.state.books.filter((item) => item.id !== id)
        this.setState({
            books: sortedBooks
        })
    }
    render() {
        return (
            <section>
                <h2>Book list</h2>
                {this.state.books.map(item => (
                    <Book key={item.id} info={item} handleDelete={this.handleDelete} />
                ))}
            </section>
        )
    }
}