import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="cube-container">
            <div className="cube-wrapper">
                <div className="cube-folding">
                    <span className="leaf1"></span>
                    <span className="leaf2"></span>
                    <span className="leaf3"></span>
                    <span className="leaf4"></span>
                </div>
                <span className="loading" data-name="Loading">Loading</span>
            </div>
        </div>
    )
}

export default Loader;
