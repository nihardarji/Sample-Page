import React from 'react'
import img from '../../resources/banner.png'

const SearchComponent = () => {
    return (
        <div className='justify-content-center border my-2'  style={{minHeight:'50vh', backgroundImage:`url(${img})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
            <div className='mt-5'> <h3 className='text-white'> <b>Explore</b> San Francisco </h3></div>
            <div className='mb-4 text-white mediumFont'> Discover the best LGBTQ resources, restanrants, hotels and shops nearest to you.</div>
            <div className='row m-0 justify-content-center'>
            <div class="input-group col-sm-10 col-md-8 p-3 mx-4" style={{backgroundColor:'rgba(255, 255, 255, 0.3)'}} >
                <div className='input-group col-md my-2 p-0'>
                    <div class="input-group-prepend" >
                        <span class="input-group-text bg-white rounded-left border-0" id="basic-addon1"><b>Find</b></span>
                    </div>
                    <input type="text" class=" form-control rounded-0 border-0" placeholder="food,service,barber,hotel" />
                </div>
                <div className='input-group col-md my-2 mr-md-2 mr-0 p-0'>
                    <div class="input-group-prepend" >
                        <span class="input-group-text bg-white rounded-0 border-0" id="basic-addon1"><b>In</b></span>
                    </div>
                    <input type="text" class="form-control rounded-right border-0" placeholder="San Francisco" />
                </div>
                <button class="btn col-md-2 my-2 text-white" style={{backgroundColor:'#A00DA7'}} type="submit">SEARCH</button>
            </div>
            </div>
        </div>
    )
}

export default SearchComponent
