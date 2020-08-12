import React from 'react'
import money from '../../resources/money.png'
import food from '../../resources/utensils-white.png'
import steth from '../../resources/stethoscope-white.png'
import real from '../../resources/real-estate-white.png'
import open from '../../resources/Open-Sign-White.png'
import virus from '../../resources/Virus-white.png'




const Category = () => {
    return (
        <div className='d-flex justify-content-center text-white marginTopClass' >
            <div className="row container justify-content-between minwidth">
                <div className="col-xs-6 col-sm-6 col-lg-2 col-6 my-2">
                    <div className="card h-100" style={{backgroundColor:'#A00DA7'}}>
                        <div className='text-center mt-3'>
                            <img src={money} className='img-fluid' width='25%'/>
                        </div>
                        <div className="card-body p-1 d-flex mx-auto mt-auto">
                            Financial Services
                        </div>  
                    </div>
                </div>
                <div className="col-xs-6 col-lg-2 col-6 my-2">
                    <div className="card h-100" style={{backgroundColor:'#A00DA7'}}>
                        <div className='text-center mt-3'>
                            <img src={food} className='img-fluid' width='25%'/>
                        </div>
                        <div className="card-body p-1 d-flex mx-auto mt-auto">
                            Food & Restaurant
                        </div>  
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-2 col-6 my-2">
                    <div className="card h-100" style={{backgroundColor:'#A00DA7'}}>
                        <div className='text-center mt-3'>
                            <img src={steth} className='img-fluid' width='25%'/>
                        </div>
                        <div className="card-body p-1 d-flex mx-auto mt-auto">
                            Health & Wellnes
                        </div>  
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-2 col-6 my-2">
                    <div className="card h-100" style={{backgroundColor:'#A00DA7'}}>
                        <div className='text-center mt-3'>
                            <img src={real} className='img-fluid' width='25%'/>
                        </div>
                        <div className="card-body p-1 d-flex mx-auto mt-auto">
                            Real Estate
                        </div>  
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-2 col-6 my-2">
                    <div className="card h-100" style={{backgroundColor:'#A00DA7'}}>
                        <div className='text-center mt-3'>
                            <img src={open} className='img-fluid' width='25%'/>
                        </div>
                        <div className="card-body p-1 d-flex mx-auto mt-auto">
                            Open Essentials
                        </div>  
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-lg-2 col-6 my-2">
                    <div className="card h-100" style={{backgroundColor:'#A00DA7'}}>
                        <div className='text-center mt-3'>
                            <img src={virus} className='img-fluid' width='25%'/>
                        </div>
                        <div className="card-body p-1 d-flex mx-auto mt-auto">
                            Support During Covid-19
                        </div>  
                    </div>
                </div>
            </div>

            {/* <div className='card mx-2' style={{width:'8%', height:'15vh', backgroundColor:'#A00DA7'}}>
                <div className='text-center mt-3'>
                <img src={money} width='25%'/>
                </div>
                <div className="card-body p-1 d-flex align-items-center">
                    Financial Services
                </div>
            </div>
            <div className='card mx-2' style={{width:'8%', height:'15vh', backgroundColor:'#A00DA7'}}>
                
                <div className='text-center mt-3'>
                    <img src={food} width='25%'/>
                </div>
                <div className="card-body p-1 d-flex align-items-center">
                    Food & Restaurant
                </div>
            </div>
            <div className='card mx-2' style={{width:'8%', height:'15vh', backgroundColor:'#A00DA7'}}>
            <div className='text-center mt-3'>
                <img src={steth} width='25%'/>
                </div>
                <div className="card-body p-1 d-flex align-items-center">
                    Health & Wellness
                </div>
            </div>
            
            <div className='card mx-2' style={{width:'8%', height:'15vh', backgroundColor:'#A00DA7'}}>
            <div className='text-center mt-3'>
                <img src={real} width='25%'/>
                </div>
                <div className="card-body p-1 d-flex align-items-center">
                    Real Estate
                </div>
            </div>

            <div className='card mx-2' style={{width:'8%', height:'15vh', backgroundColor:'#A00DA7'}}>
            <div className='text-center mt-3'>
                <img src={open} width='25%'/>
                </div>
                <div className="card-body p-1 d-flex align-items-center">
                    Open Essentials
                </div>
            </div>
            
            <div className='card mx-2' style={{width:'8%', height:'15vh', backgroundColor:'#A00DA7'}}>
            <div className='text-center mt-3'>
                <img src={virus} width='25%'/>
                </div>
                <div className="card-body p-1 d-flex align-items-center">
                    Support During Covid-19
                </div>
            </div> */}
        </div>
    )
}

export default Category
