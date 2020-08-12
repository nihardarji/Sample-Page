import React from 'react'
import list1 from '../../resources/Listing1.png'
import list2 from '../../resources/Listing2.png'
import list3 from '../../resources/Listing3.png'
import review from '../../resources/Reviews.png'
import fav from '../../resources/Favorites.png'

const Directory = () => {
    return (
        <div className='bg-light py-5'>
            <h5 className='boldFont'>BEYOND A BUSINESS DIRECTORY</h5>
            <h6>Pride Places Builds Comminity By Connecting You With LGBTQ-Owned And Friendly Companies</h6>
            <div className="container mt-5 p-0">
                <div className='row no-gutters'>
                    <div className="col-md-4 col-sm-12 col-lg-4 my-auto text-left">
                        <h5 className='boldFont'>LGBTQ SAFE BUSINESSES AT YOUR FINGERTIPS</h5>
                        <span>Easily find safe and friendly restaurants, financial services, healthcare providers and more...</span>
                    </div>
                    <div className="col-md-8 col-sm-12 col-lg-8 d-flex justify-content-around">
                        <div>
                        <img src={list1} className='img-fluid w-100' />
                        </div>
                        <div>
                        <img src={list2} className='img-fluid w-100' />
                        </div>
                        <div>
                        <img src={list3} className='img-fluid w-100' />
                        </div>
                    </div>
                </div> 
                <div className='row no-gutters'>
                    <div className="col-md-8 col-sm-12 col-lg-8 d-flex justify-content-around">
                        <div>
                        <img src={review} className='img-fluid w-100' />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-lg-4 my-auto text-left">
                        <h5 className='boldFont'>CREDIT WHERE CREDIT'S DUE</h5>
                        <span>Read the reviews beofre you go and contribute to the community with one of your own.</span>
                    </div>     
                </div>
                <div className='row no-gutters'>
                    <div className="col-md-4 col-sm-12 col-lg-4 my-auto text-left">
                        <h5 className='boldFont'>YOUR FAVORITES A TAP AWAY</h5>
                        <span>Staying on top of your favorite Pride Places spots is now only a tap away</span>
                    </div>
                    <div className="col-md-8 col-sm-12 col-lg-8 d-flex justify-content-around">
                        <img src={fav} className='img-fluid w-100' alt=""/>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Directory
