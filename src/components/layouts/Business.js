import React from 'react'
import pic from '../../resources/Photo.png'
import bitmap from '../../resources/food-restaurants.png'
import ReactStars from "react-rating-stars-component"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Business = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className='py-5'>
            <div>
                <h5 className='boldFont'>HOT & NEW PRIDE PLACES BUSINESSES</h5>
                <p>Serving Up Fresh Pride Places Listings</p>
            </div>
            <div className='container'>
            <div className='d-block d-md-none'>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                renderDotsOutside={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div>
                    <div class="card col-sm-12 col-md-3 p-0 m-1">
                        <img class="card-img-top" src={pic} alt="Card image cap"/>
                        <div class="card-body p-1 text-left">
                            <h5 class="card-title pl-1 boldFont">HI TOPS</h5>
                            <span><img className='pl-1' src={bitmap} alt=""/> Food & Restaurants . <span style={{color:'#00cc96'}}>$$$</span></span>
                            <div className='row no-gutters mt-auto'>
                                <div className='col-6 text-center border-right'>
                                    <div>
                                        <span style={{fontSize: '2.5em'}}>4.2</span>
                                        <span>/5</span>
                                        <span className='d-flex justify-content-center'>
                                            <div className='row no-gutters'>
                                                <ReactStars
                                                    value={4}
                                                    size={15}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                />(29)
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-6 text-center my-auto p-0'>
                                    <div className="d-flex px-4 justify-content-around">
                                        <span> <i class="far fa-eye"></i></span>
                                        
                                        <span><i class="far fa-heart"></i></span>
                                    </div>
                                    <i class="fas fa-map-marker-alt" style={{'color':'#A00DA7'}}></i> San Francisco, CA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card col-sm-12 col-md-3 p-0 m-1">
                        <img class="card-img-top" src={pic} alt="Card image cap"/>
                        <div class="card-body p-1 text-left">
                            <h5 class="card-title pl-1 boldFont">HI TOPS</h5>
                            <img className='pl-1' src={bitmap} alt=""/> Food & Restaurants . <span style={{color:'#00cc96'}}>$$$</span>
                            <div className='row  no-gutters mt-auto'>
                                <div className='col-6 text-center border-right'>
                                    <div className='text-muted'>
                                        <span style={{fontSize: '2.5em'}}>0.0</span>
                                        <span>/5</span>
                                        <span className='d-flex justify-content-center'>
                                            <div className='row no-gutters'>
                                                <ReactStars
                                                    value={0}
                                                    size={15}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                />(29)
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-6 text-center my-auto p-0'>
                                    <div className="d-flex px-4 justify-content-around">
                                        <span> <i class="far fa-eye"></i></span>
                                        
                                        <span><i class="far fa-heart"></i></span>
                                    </div>
                                    <i class="fas fa-map-marker-alt" style={{'color':'#A00DA7'}}  ></i>New York, NY
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div>
                    <div class="card col-sm-12 col-md-3 p-0 m-1">
                        <img class="card-img-top" src={pic} alt="Card image cap"/>
                        <div class="card-body p-1 text-left">
                            <h5 class="card-title pl-1 boldFont">HI TOPS</h5>
                            <img className='pl-1' src={bitmap} alt=""/> Food & Restaurants . <span style={{color:'#00cc96'}}>$$$</span>
                            <div className='row no-gutters mt-auto'>
                                <div className='col-6 text-center border-right'>
                                    <div>
                                        <span style={{fontSize: '2.5em'}}>3.6</span>
                                        <span>/5</span>
                                        <span className='d-flex justify-content-center'>
                                            <div className='row no-gutters'>
                                                <ReactStars
                                                    value={3}
                                                    size={15}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                />(29)
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-6 text-center my-auto p-0'>
                                    <div className="d-flex px-4 justify-content-around">
                                        <span> <i class="far fa-eye"></i></span>
                                        
                                        <span><i class="far fa-heart"></i></span>
                                    </div>
                                    <i class="fas fa-map-marker-alt" style={{'color':'#A00DA7'}}></i>District of Columbia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Carousel>
                </div>
                <div className='d-none d-md-block'>
                <div className="row d-flex justify-content-around ">
                    <div class="card col-sm-12 col-md-3 p-0 m-1">
                        <img class="card-img-top" src={pic} alt="Card image cap"/>
                        <div class="card-body p-1 text-left">
                            <h5 class="card-title pl-1 boldFont">HI TOPS</h5>
                            <span><img className='pl-1' src={bitmap} alt=""/> Food & Restaurants . <span style={{color:'#00cc96'}}>$$$</span></span>
                            <div className='row no-gutters mt-auto'>
                                <div className='col-6 text-center border-right'>
                                    <div>
                                        <span style={{fontSize: '2.5em'}}>4.2</span>
                                        <span>/5</span>
                                        <span className='d-flex justify-content-center'>
                                            <div className='row no-gutters'>
                                                <ReactStars
                                                    value={4}
                                                    size={15}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                />(29)
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-6 text-center my-auto p-0'>
                                    <div className="d-flex px-4 justify-content-around">
                                        <span> <i class="far fa-eye"></i></span>
                                        
                                        <span><i class="far fa-heart"></i></span>
                                    </div>
                                    <i class="fas fa-map-marker-alt" style={{'color':'#A00DA7'}}></i> San Francisco, CA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-sm-12 col-md-3 p-0 m-1">
                        <img class="card-img-top" src={pic} alt="Card image cap"/>
                        <div class="card-body p-1 text-left">
                            <h5 class="card-title pl-1 boldFont">HI TOPS</h5>
                            <img className='pl-1' src={bitmap} alt=""/> Food & Restaurants . <span style={{color:'#00cc96'}}>$$$</span>
                            <div className='row  no-gutters mt-auto'>
                                <div className='col-6 text-center border-right'>
                                    <div className='text-muted'>
                                        <span style={{fontSize: '2.5em'}}>0.0</span>
                                        <span>/5</span>
                                        <span className='d-flex justify-content-center'>
                                            <div className='row no-gutters'>
                                                <ReactStars
                                                    value={0}
                                                    size={15}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                />(29)
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-6 text-center my-auto p-0'>
                                    <div className="d-flex px-4 justify-content-around">
                                        <span> <i class="far fa-eye"></i></span>
                                        
                                        <span><i class="far fa-heart"></i></span>
                                    </div>
                                    <i class="fas fa-map-marker-alt" style={{'color':'#A00DA7'}}  ></i>New York, NY
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-sm-12 col-md-3 p-0 m-1">
                        <img class="card-img-top" src={pic} alt="Card image cap"/>
                        <div class="card-body p-1 text-left">
                            <h5 class="card-title pl-1 boldFont">HI TOPS</h5>
                            <img className='pl-1' src={bitmap} alt=""/> Food & Restaurants . <span style={{color:'#00cc96'}}>$$$</span>
                            <div className='row no-gutters mt-auto'>
                                <div className='col-6 text-center border-right'>
                                    <div>
                                        <span style={{fontSize: '2.5em'}}>3.6</span>
                                        <span>/5</span>
                                        <span className='d-flex justify-content-center'>
                                            <div className='row no-gutters'>
                                                <ReactStars
                                                    value={3}
                                                    size={15}
                                                    activeColor="#ffd700"
                                                    edit={false}
                                                />(29)
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-6 text-center my-auto p-0'>
                                    <div className="d-flex px-4 justify-content-around">
                                        <span> <i class="far fa-eye"></i></span>
                                        
                                        <span><i class="far fa-heart"></i></span>
                                    </div>
                                    <i class="fas fa-map-marker-alt" style={{'color':'#A00DA7'}}></i>District of Columbia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Business
