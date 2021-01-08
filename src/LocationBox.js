import React from 'react'

function LocationBox(props) {
    return(
        <div className="location-box">
            <div className="location">{props.city}, {props.country}</div>
            <div className="date">{props.dateBuilder(new Date())}</div>
        </div>
    )
}

export default LocationBox