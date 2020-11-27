import React, {createContext, useState, useEffect} from 'react';
import client from '../client';

export const BeachResortContext = createContext();

export const BeachResortDetailsProvider = (props) => {
    const [resortDataImages, setResortDataImages] = useState([]);
    const [resortDataInfo, setResortDataInfo] = useState('');
    const [resortDataServices, setResortDataServices] = useState([]);
    const [resortDataReviews, setResortDataReviews] = useState([]);

    const [resortRoomDetails, setResortRoomDetails] = useState([]);
    const [resortAllRoomDetails, setResortAllRoomDetails] = useState([]);

    const getBeachResortData = async() => {
        var getResortDetails = client.getEntries({
            content_type: 'beachResortDetails'
        });
        var getResortRoomsDetails = client.getEntries({
            content_type: 'beachResortRooms'
        });
        await Promise.all([getResortDetails, getResortRoomsDetails])
            .then(results => {
                let resortDataTemp = results[0].items;
                if(resortDataTemp.length > 0){
                    setResortDataImages(resortDataTemp[0].fields.resortPictures.map(pic => {
                        return {key:pic.sys.id, img: pic.fields.file.url, bannerText: 'Deluxe Rooms Starting at $299'}
                    }));
                    setResortDataInfo(resortDataTemp[0].fields.resortDetails);
                    setResortDataServices(resortDataTemp[0].fields.resortServices);
                    setResortDataReviews(resortDataTemp[0].fields.resortReviews);
                }
                let resortRoomsTemp = results[1].items;
                if(resortRoomsTemp.length > 0){
                    setResortRoomDetails(extractResortRoomDetails(resortRoomsTemp));
                    setResortAllRoomDetails(extractResortRoomDetails(resortRoomsTemp));
                }
            })
            .catch(console.error)
    }

    const extractResortRoomDetails = (resortRoomsTemp) => {
        return resortRoomsTemp.map(room => {
            return { 
                key: room.fields.roomType,
                roomType: room.fields.roomType, 
                roomName: room.fields.roomName,
                roomPrice: room.fields.roomPrice,
                roomSize: room.fields.roomSize,
                roomDesc: room.fields.roomDesc,
                roomMaxCapacity: room.fields.roomMaxCapacity,
                roomFacilities: room.fields.roomFacilities[0].facilities,
                roomInclusions: room.fields.roomInclusions[0].inclusions,
                roomPhotos: room.fields.roomPhotos.map(pic => {
                    return {key:pic.sys.id, img: pic.fields.file.url}
                })
            }
        })
    }

    const changeHandler = e => {
        let tempResortRoomDetails = [...resortAllRoomDetails];
        setResortRoomDetails(tempResortRoomDetails.filter(tempRoom => tempRoom.roomMaxCapacity > e.target.value));
    }
    
    useEffect(() => {
        getBeachResortData();
    }, []);

    return (
        <BeachResortContext.Provider value={{resortDataImages, resortDataInfo, resortDataServices, resortDataReviews, resortRoomDetails, changeHandler}}> 
            {props.children}
        </BeachResortContext.Provider>
    );
}