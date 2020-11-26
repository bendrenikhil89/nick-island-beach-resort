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
                swipeable={false}
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
                {/* <img
                    src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                    }}
                />
                <img
                    src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    style={{
                    display: 'block',
                    height: '100%',
                    margin: 'auto',
                    width: '100%'
                    }}
                /> */}
                {/* <div style={{height:'200px', width:'200px'}}>Item1</div>
                <div style={{height:'200px', width:'200px'}}>Item2</div> */}
            </Carousel>
        </div>
    )
}

export default Reviews;
