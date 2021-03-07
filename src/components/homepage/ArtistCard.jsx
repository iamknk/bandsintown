import React from 'react'

import '../../stylesheets/ArtistCard.css'

export const ArtistCard = ({ name, image, facebookUrl, onClick }) => {
    return (
        <div className="col-md-3 p-3">
            <div className="artist-card">
                <a href={facebookUrl} target="_blank">
                <i className="fab fa-facebook-f social-icon"></i>
                </a> 
                <img className="card-img-top artist-img p-4 pt-0"  src={image} />
                <div className="card-foot">
                    <button className="btn" onClick={(e) => onClick(name)}>View Events</button>
                    <div className="card-title">{name}</div>
                </div>
            </div>        
        </div>       
    )
}


