import React, {useContext} from 'react';

import About from '../components/About/About';
import Reviews from '../components/Carousel/Reviews';
import Services from '../components/Services/Services';
import Slider from '../components/Slider/Slider';
import {BeachResortContext} from '../context/ContextData';
import Loader from '../components/Loader/Loader';


const Home = () => {
    const {resortDataImages, resortDataInfo, resortDataServices, resortDataReviews, loading} = useContext(BeachResortContext);
    let home = null;
    if(!loading){
        home = (
            <>
                <Slider slides={resortDataImages}/>
                <About resortDetails={resortDataInfo} />
                <Services resortServices={resortDataServices} />
                <Reviews autoPlay={true} slides={resortDataReviews} />
            </>
        );
    }
    else{
        home = <Loader />
    }

    return (
        <>
            {home}
        </>
    )
}

export default Home;
