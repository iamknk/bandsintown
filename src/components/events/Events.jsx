import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Event } from './Event'
import { ArtistCard } from '../index';
import '../../stylesheets/Events.css'


export const Events = ({ location : {state : {artist, image, facebookUrl }} }) => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const getEvents = async (name) => {
            const res = await fetch(`artists/${artist}/events?` + new URLSearchParams({
                app_id: 'bandsintown',
            }))
            const data = await res.json()
            setEvents(data)       
        }
        getEvents()        
      }, [])
      
    return (
        <>
            <Link to="/">
                <div className="p-2 mt-3">
                    <i className="fas fa-angle-left"></i>
                    <span className="p-2 mt-4"> Back to results</span>
                </div>
            </Link>
            <ArtistCard name={artist} image={image} facebookUrl={facebookUrl} viewEvent={false} />
            <p>{events.length} Upcoming Events</p>
           {events.length > 0 ? 
            <div className="container">
                <div className="row">
                {events.map(event => <Event key={event.id} event={event} />           
            )}</div> </div>  : <div className="text-center mt-5 pt-5">
            <h2>No upcoming event</h2>
            </div>
           }
        </>
    )
}

