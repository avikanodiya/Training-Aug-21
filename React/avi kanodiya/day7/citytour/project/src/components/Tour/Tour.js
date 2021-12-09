import React, { Component } from 'react'
import './tour.scss'
export default class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { id, city, img, name, info } = this.props.tour
        console.log(id);
        const { removeTour } = this.props
        return (
            <article className='tour'>
                <div className='image-container'>
                    <img src={img} alt="places" />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info {" "}<span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}
