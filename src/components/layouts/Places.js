import React from 'react'
import img1 from '../../resources/Washington-DC.png'
import img2 from '../../resources/Seattle.png'
import img3 from '../../resources/SanFrancisco.png'
import img4 from '../../resources/SaintLouis.png'
import img5 from '../../resources/New-York.png'
import img6 from '../../resources/LosAngeles.png'
import img7 from '../../resources/Chicago.png'
import img8 from '../../resources/Austin.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Places = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
    return (
        <div className='p-0 my-5'>
        <h4 className='boldFont'>HAPPENING CITIES</h4>
            <h6>Places To Explore</h6>
            <div className='d-block d-md-none'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    ssr={true}
                    infinite={true}
                    responsive={responsive}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    reactButtonGroupOutside= {true}
                    renderDotsOutside={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className='mr-2'><img src={img1} className='mb-auto img-fluid imageHeight' alt=""/></div>
                    <div className='mr-2'><img src={img2} className='mb-auto img-fluid imageHeight' alt=""/></div>
                    <div className='mr-2'><img src={img3} className='mb-auto img-fluid imageHeight' alt=""/></div>
                    <div className='mr-2'><img src={img4} className='mb-auto img-fluid imageHeight' alt=""/></div>
                    <div className='mr-2'><img src={img5} className='mb-auto img-fluid imageHeight' alt=""/></div>
                    <div className='mr-2'><img src={img6} className='mb-auto img-fluid imageHeight' alt=""/></div>
                    <div className='mr-2'><img src={img7} className='mb-auto img-fluid imageHeight' alt=""/></div>
                    <div className='mr-2'><img src={img8} className='mb-auto img-fluid imageHeight' alt=""/></div>
                </Carousel>
            </div>
            <div className="container pr-0 d-none d-md-block">
            <div className='row text-center mb-4'>
                <div className='col-6'>
                    <img src={img1} className='img-fluid' alt=""/> 
                </div>
                <div className='col-6 d-flex align-items-start flex-column'>
                    <img src={img2} className='mb-auto img-fluid' alt=""/>
                    <div className='row d-flex'>
                        <div className='col-6 mr-auto'>
                            <img src={img3} className='img-fluid' alt=""/>
                        </div>
                        <div className='col-6'>
                            <img src={img4} className='img-fluid' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between mb-4'>
                <div className='mb-2 pr-2'>
                    <img src={img5} className='img-fluid' alt=""/>
                </div>
                <div className='mb-2 px-2'>
                    <img src={img6} className='img-fluid' alt=""/>
                </div>
                <div className='mb-2 px-2'>
                    <img src={img7} className='img-fluid' alt=""/>
                </div>
                <div className='mb-2 pl-2'>
                    <img src={img8} className='img-fluid' alt=""/>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Places
