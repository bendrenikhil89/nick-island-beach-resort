import React, {useContext, useState} from 'react'
import FilterRooms from '../components/FilterRooms/FilterRooms';
import Room from '../components/Room/Room'
import RoomsBanner from '../components/RoomsBanner/RoomsBanner';
import {BeachResortContext} from '../context/ContextData';

const Rooms = () => {
    let {resortRoomDetails} = useContext(BeachResortContext);
    resortRoomDetails = resortRoomDetails.sort((a,b) => (a.roomPrice < b.roomPrice ? -1 : 1))

    let rooms = resortRoomDetails.map(room => {
        return <Room roomDetails={room} key={room.roomType} />
    })
    
    return (
        <>
           <RoomsBanner />
           <FilterRooms />
           {resortRoomDetails.length > 0 ? rooms : null}
        </>
    )
}

export default Rooms;
