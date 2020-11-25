import React, {useContext} from 'react';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Slider from '../components/Slider/Slider';
import {BeachResortContext} from '../context/ContextData';

const Home = () => {
    const {resortData, resortDataImages, resortDataInfo, resortDataServices} = useContext(BeachResortContext);
    return (
        <>
            {resortDataImages.length > 0 ? <Slider slides={resortDataImages}/> : null}
            {resortDataInfo !== '' ? <About resortDetails={resortDataInfo} /> : null}
            {resortDataServices.length > 0 ? <Services resortServices={resortDataServices} /> : null}
        </>
    )
}

export default Home;
