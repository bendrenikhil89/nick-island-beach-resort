import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './RoomPhotos.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 465 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 1 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const RoomPhotos = ({autoPlay, slides}) => {
    let slidesDiv = slides.map((slide, i) => (
        <img
            key={slide.key}
            src={slide.img}
            style={{
                display: 'block',
                height: '250px',
                margin: 'auto',
                width: 'inherit',
                backgroundSize: 'contain'
            }}
        /> 
    ));
    return (
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={autoPlay}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all 1s ease"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                deviceType="desktop"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {slidesDiv}
            </Carousel>
        
    )
}

export default RoomPhotos;
