import React from 'react';

const Service = (props) => {
    return (
        <div className="card-section radial-1">
            <div className="card-title-wrapper">
            <h4 className="card-title">{props.title}</h4>
            <div className="border-line"></div>
            <i className={props.iconClass}></i>
            </div>
            <div className="card-body">
                {/* <h4 className="card-title">{props.title}</h4> */}
                {/* <div className="border-line"></div> */}
                <p className="card-text">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}

export default Service;
