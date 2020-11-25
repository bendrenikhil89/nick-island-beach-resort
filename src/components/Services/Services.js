import React from 'react';
import './Services.css';
import Service from './Service';

const Services = ({resortServices}) => {
    return (
        <div className="services__main__wrapper">
            <h2 className="services__title">Services</h2>
            <div className="services__container">
                
                <div className="services__wrapper">
                    <Service title={resortServices[0].title} desc={resortServices[0].details} iconClass={resortServices[0].iconClass}/>
                    <Service title={resortServices[1].title} desc={resortServices[1].details} iconClass={resortServices[1].iconClass}/>
                </div>
                <div className="services__wrapper">
                    <Service title={resortServices[2].title} desc={resortServices[2].details} iconClass={resortServices[2].iconClass}/>
                    <Service title={resortServices[3].title} desc={resortServices[3].details} iconClass={resortServices[3].iconClass}/>
                </div>
            </div>
        </div>
    )
}

export default Services;
