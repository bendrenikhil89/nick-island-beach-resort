import React from 'react';
import './About.css';

const About = ({resortDetails}) => {
    return (
        <div className="about__wrapper">
            <h2 className="about__title">Nick Island Beach Resort</h2>
            <h3 className="about__subtitle">Five-Star Nick Island Escape with All-Inclusive Dining & Daily Cocktails</h3>
            <p className="about__para">
                {resortDetails}
            </p>
        </div>
    )
}

export default About;
