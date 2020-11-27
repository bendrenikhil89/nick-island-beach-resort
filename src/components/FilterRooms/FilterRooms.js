import React, {useContext} from 'react';
import {BeachResortContext} from '../../context/ContextData';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

const FilterRooms = () => {
    const {changeHandler, resortRoomDetails} = useContext(BeachResortContext);
    let types = getUnique(resortRoomDetails, "roomType");
    types = ["All", ...types];
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    let maxPrice = Math.max(...resortRoomDetails.map(item => item.roomPrice));
    let maxSize = Math.max(...resortRoomDetails.map(item => item.roomSize));

    return (
        <div className="filter__container">
            <select>{types}</select>
            <input type="text" onChange={changeHandler} />
        </div>
    )
}

export default FilterRooms;
