import React from 'react'
import logo from '../../resources/Mark.png'

const Footer = () => {
    return (
        <div class="page-footer font-small pt-4 " style={{backgroundColor:'#312D3F'}}>

                    <div class="container-fluid text-center text-md-left">
                    <div class="row text-white text-left">

                        <div class="col-md-4 mt-md-0 mt-3">

                            <h4><b>PRIDE <img src={logo} alt=""/> PLACES</b> </h4>
                            
                            <div class="row">
                                <div class="col-md-12 py-3">
                                    <div class="flex-center">

                                        <a class="fb-ic">
                                            <i class="fab fa-facebook-square fa-lg text-white mr-md-2 mr-3 "> </i>
                                        </a>
                                        <a class="ins-ic">
                                            <i class="fab fa-instagram fa-lg text-white mr-md-2 mr-3 "> </i>
                                        </a>
                                        <a class="li-ic">
                                            <i class="fab fa-linkedin fa-lg text-white mr-md-2 mr-3"> </i>
                                        </a>
                                        <a class="tw-ic">
                                            <i class="fab fa-twitter-square fa-lg text-white mr-md-2 mr-3 "> </i>
                                        </a> 
                                    </div>
                                </div>

                            </div>
                        </div>

                        <hr class="clearfix w-100 d-md-none pb-3"/>

                        <div class="col-md-2 mb-md-0 mb-3 ">
                                <h5 class="text-uppercase">COMPANY</h5>

                                <ul class="list-unstyled">
                                    <li>
                                    <a href="#!" className='text-white'>About Us</a>
                                    </li>
                                    <li>
                                    <a href="#!" className='text-white'>Blog</a>
                                    </li>
                                    <li>
                                    <a href="#!" className='text-white'>News</a>
                                    </li>
                                    <li>
                                    <a href="#!" className='text-white'>Contact</a>
                                    </li>
                                </ul>
                        </div>

                        <div class="col-md-2 mb-md-0 mb-3">

                        <h5 class="text-uppercase">JOIN US</h5>

                        <ul class="list-unstyled">
                            <li>
                            <a href="#!" className='text-white'>Advertise</a>
                            </li>
                            <li>
                            <a href="#!" className='text-white'>For Business</a>
                            </li>
                            <li>
                            <a href="#!" className='text-white'>Supporting New Business</a>
                            </li>
                            <li>
                            <a href="#!" className='text-white'>Events</a>
                            </li>
                        </ul>
                        </div>
                        <div class="col-md-2 mb-md-0 mb-3">

                        <h5 class="text-uppercase">CITIES</h5>

                        <ul class="list-unstyled">
                            <li>
                            <a href="#!" className='text-white'>San Francisco</a>
                            </li>
                            <li>
                            <a href="#!" className='text-white'>Chicago</a>
                            </li>
                            <li>
                            <a href="#!" className='text-white'>New York</a>
                            </li>
                            <li>
                            <a href="#!" className='text-white'>See more</a>
                            </li>
                        </ul>
                        </div>
                    </div>

        </div>



<div class="footer-copyright text-center text-white py-3">© 2020 Pride Places.All rights reserved.
  <a href="#!" className='text-white'>|Terms Of Use</a>
  <a href="#!" className='text-white'>|Privacy Policy</a>
</div>


</div>

    )
}

export default Footer
