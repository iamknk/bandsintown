import React from 'react'
import moment from 'moment'


export const Event = ({ event }) => {
    const { city, country, location} = event.venue

    return (
        <div className="col-md-6 col-lg-4 mb-3">
            <div className="card">
            <div className="card-header">
                Event Details
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <span className="p-2">{event.title}</span>
                </div>
                <div className="mb-3">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="p-2">{`${location}, ${city}, ${country}`}</span>
                </div>
                <div className="mb-3">
                    <i className="fas fa-clock"></i>
                    <span className="p-2">{moment(event.datetime).format("MMMM Do, YYYY")}</span>
                </div>
            </div>
            </div>
        </div>
    )
}

