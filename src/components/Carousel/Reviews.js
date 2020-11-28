import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Reviews.css';

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

const Reviews = ({autoPlay, slides}) => {
    let slidesDiv = slides.map(slide => (
        <div key={slide.from} >
            <i className="fas fa-quote-left"></i>
            <div className="reviews__style">
                {slide.details}
            </div>
            <div className="review__by__style">
                - {slide.from}
                <i className="fas fa-quote-right"></i>
            </div>
            {/* <i className="fas fa-quote-right"></i> */}
        </div> 
    ));
    return (
        <div className="reviews__wrapper">
            <h2 className="reviews__title">Testimonials</h2>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={autoPlay}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all 1s ease"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                deviceType="mobile"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {slidesDiv}
            </Carousel>
        </div>
    )
}

export default Reviews;
