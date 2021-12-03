import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        console.log(this.props);
        const { image, title, author } = this.props.info
        console.log(image);

        return (
            <article className="book">
                <img src={image} alt="book" />
                <div> <h4>Title : {title}</h4>
                    <h6>Author : {author}</h6>
                </div>
            </article>
        )
    }
}