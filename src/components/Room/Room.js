import React, {useContext} from 'react';
import './Room.css';
import RoomPhotos from '../Carousel/RoomPhotos';

const Room = ({roomDetails}) => {
    return (
        <div className="room__container">
            <div className="room__photos">
                <h3>{roomDetails.roomType}</h3>
                <RoomPhotos autoPlay={false} slides={roomDetails.roomPhotos}/>
            </div>
            <div className="room__details1">
                <h4>{roomDetails.roomName}</h4>
                <p>{roomDetails.roomDesc}</p>
                <h4>Inclusion highlights:</h4>
                <ul>
                    {roomDetails.roomInclusions.map((inc, i) => {
                        return <li key={i}>{inc}</li>
                    })}
                </ul>
            </div>
            <div className="room__details2">
                <div className="room__details2__header">
                    
                </div>
                <h4>Room size: <span>{roomDetails.roomSize} sq/foot</span></h4>
                <h4 style={{marginTop:'15px'}}>Maximum Capacity: <span>{roomDetails.roomMaxCapacity} people</span></h4>
                <div className="room__details2__facilities">
                    <h4>Room Facilities:</h4>
                    <ul>
                        {roomDetails.roomFacilities.map((facility, i) => {
                            return <li key={i}>{facility}</li>
                        })}
                    </ul>
                </div>
                <h4>Price: ${roomDetails.roomPrice}</h4>
                <h6>Incl. taxes and fees</h6>
            </div>
        </div>
    )
}

export default Room;
