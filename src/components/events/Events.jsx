import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ArtistCard, Event, Spinner } from '../index';

import '../../stylesheets/Events.css'


export const Events = ({ location : {state : {artist, image, facebookUrl }} }) => {
    const [events, setEvents] = useState([])
    const [eventsLoading, setEventsLoading] = useState(true)

    useEffect(() => {
        const getEvents = async (name) => {
            const res = await fetch(`artists/${artist}/events?` + new URLSearchParams({
                app_id: 'bandsintown',
            }))
            const data = await res.json()
            setEvents(data)     
            setEventsLoading(false)   
        }
        getEvents()        
      }, [])
      
    return (
        <>
            <Link to="/">
                <div className="p-2 mt-3">
                    <i class="fas fa-angle-left"></i>
                    <span className="p-2 mt-4"> Back to results</span>
                </div>
            </Link>
            <ArtistCard name={artist} image={image} facebookUrl={facebookUrl} viewEvent={false} />
            <p>{events.length} Upcoming Events</p>
            
           { eventsLoading ? <Spinner /> : <> {events.length > 0 ? 
            <div className="container">
            <div className="row">
            {events.map(event => <Event key={event.id} event={event} />
                
           )}</div> </div>  : <div className="text-center mt-5 pt-5">
           <h2>No upcoming event</h2>
        </div>
           }</>}
        </>
    )
}
