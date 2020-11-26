import React, {useContext} from 'react';

import About from '../components/About/About';
import Reviews from '../components/Carousel/Reviews';
import Footer from '../components/Footer/Footer';
import Services from '../components/Services/Services';
import Slider from '../components/Slider/Slider';
import {BeachResortContext} from '../context/ContextData';


const Home = () => {
    const {resortDataImages, resortDataInfo, resortDataServices, resortDataReviews} = useContext(BeachResortContext);
    return (
        <>
            {resortDataImages.length > 0 ? <Slider slides={resortDataImages}/> : null}
            {resortDataInfo !== '' ? <About resortDetails={resortDataInfo} /> : null}
            {resortDataServices.length > 0 ? <Services resortServices={resortDataServices} /> : null}
            {resortDataReviews.length > 0 ?<Reviews autoPlay={true} slides={resortDataReviews} /> : null }
            <Footer />
        </>
    )
}

export default Home;
