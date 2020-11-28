import React, {useContext} from 'react'
import FilterRooms from '../components/FilterRooms/FilterRooms';
import Loader from '../components/Loader/Loader';
import Room from '../components/Room/Room'
import RoomsBanner from '../components/RoomsBanner/RoomsBanner';
import {BeachResortContext} from '../context/ContextData';

const Rooms = () => {
    let {resortRoomDetails, loading} = useContext(BeachResortContext);
    resortRoomDetails = resortRoomDetails.sort((a,b) => (a.roomPrice < b.roomPrice ? -1 : 1))

    let room = resortRoomDetails.map(room => {
        return <Room roomDetails={room} key={room.roomType} />
    })
    
    let roomsPage = null;
    if(!loading){
        roomsPage = (
            <>
                <RoomsBanner />
                <FilterRooms />
                {resortRoomDetails.length > 0 ? room : <h4 className="room__notfound">
                    There are no rooms matching your search criteria.
                </h4>}
            </>
         );
    } else {
        roomsPage = <Loader />
    }
    return (
        <>
            {roomsPage}
        </>
    )
}

export default Rooms;
