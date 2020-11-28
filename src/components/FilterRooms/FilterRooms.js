import React, {useContext} from 'react';
import {BeachResortContext} from '../../context/ContextData';
import './FilterRooms.css';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

const FilterRooms = () => {
    const {changeHandler, filters, resortAllRoomDetails} = useContext(BeachResortContext);
    let types = getUnique(resortAllRoomDetails, "roomType");
    types.sort();
    types = ["All", ...types];
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    let people = getUnique(resortAllRoomDetails, "roomMaxCapacity");
    people.sort(function(a, b){return a - b});
    people = ["All", ...people];
    people = people.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    let maxPrice = Math.max(...resortAllRoomDetails.map(item => item.roomPrice));
    
    return (
        <div className="filter__container">
            <div className="filter__header">
                <label>Room Type</label>
                <select onChange={changeHandler} identifier="roomType">{types}</select>
            </div>
            <div className="filter__header">
                <label>Guests</label>
                <select onChange={changeHandler} identifier="roomMaxCapacity">{people}</select>
            </div>
            <div className="filter__header">
                <label>Room Price ${filters.roomPrice}</label>
                <input className="range" type="range" identifier="roomPrice" min="0" max={maxPrice} value={filters.roomPrice} step="1" onChange={changeHandler} />
            </div>
        </div>
    )
}

export default FilterRooms;
