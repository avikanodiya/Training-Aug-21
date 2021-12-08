import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import { tourData } from "../../tourData"

export default class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour = (id) => {
        console.log(id);
    }
    render() {
        const { tours } = this.state

        return (
            <section>
                {
                    tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={ }></Tour>))
                }
            </section>
        )
    }
}
