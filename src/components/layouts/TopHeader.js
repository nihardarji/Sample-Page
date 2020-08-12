import React from 'react'
import logo from '../../resources/Mark.png'

const TopHeader = () => {
    return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand d-block d-lg-none"> <div className='d-flex flex-column'> <b>PRIDE <img src={logo} alt=""/> PLACES</b>
                    <span className='smallfontSize boldFont text-right'>LGBTQ DIRECTORY</span></div></a>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Advertise</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">For Business</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Supporting New Business</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Events</a>
                            </li>
                            <li className="nav-item d-block d-lg-none">
                                <a href="" className='nav-link'>Sign In</a>
                            </li>
                            <li className="nav-item d-block d-lg-none">
                                <a href="" className='nav-link'>ADD LISTING</a>
                            </li>
                        </ul>

                        <form class="form-inline my-2 my-lg-0 d-none d-lg-block">
                            <a href="" className='text-dark no-underline' style={{color:'rbga(0,0,0,0.7)'}}> <span className='mr-3'>|</span> Sign In</a>
                        </form>
                    </div>       
                </nav>
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand d-none d-lg-block"> <h3><b>PRIDE <img src={logo} alt=""/> PLACES</b> </h3></a> 
                    <form class="form-inline d-none d-lg-block">
                        
                        <button class="btn text-white my-2 my-sm-0 boldFont" style={{'backgroundColor':'#A00DA7'}} type="submit"> <i class="fas fa-plus fa-xs text-white" ></i> ADD LISTING</button>
                    </form>
                </nav>
            </div>
    )
}

export default TopHeader
