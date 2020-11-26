import React, {createContext, useState, useEffect} from 'react';
import client from '../client';

export const BeachResortContext = createContext();

export const BeachResortDetailsProvider = (props) => {
    const [resortData, setResortData] = useState([]);
    const [resortDataImages, setResortDataImages] = useState([]);
    const [resortDataInfo, setResortDataInfo] = useState('');
    const [resortDataServices, setResortDataServices] = useState([]);
    const [resortDataReviews, setResortDataReviews] = useState([]);

    useEffect(() => {
        client.getEntries({
            content_type: 'beachResortDetails'
        })
        .then(response => response.items)
        .then(data => {
            setResortData(data);
            if(data.length > 0){
                setResortDataImages(data[0].fields.resortPictures.map(pic => {
                    return {key:pic.sys.id, img: pic.fields.file.url, bannerText: 'Deluxe Rooms Starting at $299'}
                }));
                setResortDataInfo(data[0].fields.resortDetails);
                setResortDataServices(data[0].fields.resortServices);
                setResortDataReviews(data[0].fields.resortReviews);
            }
        })
        .catch(console.error)
    }, []);

    return (
        <BeachResortContext.Provider value={{resortData, resortDataImages, resortDataInfo, resortDataServices, resortDataReviews}}> 
            {props.children}
        </BeachResortContext.Provider>
    );
}