import React,{ useState } from 'react'
import img from '../../resources/girls.png'
import { Link } from 'react-router-dom'

const ContactForm = () => {
    const [show, setShow]= useState(true)
    const onSubmit = (e) => {
        e.preventDefault()
        setShow(false)
    } 
    return (
        <div className='pt-5' style={{backgroundColor:'#3AC4C8'}}>
            <div className='container' >
                {show && 
                <form onSubmit={onSubmit}>
                <div className='row no-gutters text-left'>
                    <div className='col-md-6 text-white'>
                        <h4 className='boldFont'>BE THE FIRST TO KNOW</h4>
                        <p className='m-0'>Want to be in our latest announcements? Sign Up below</p>
                        <p className='mb-5'>Dont worry we won't spam you.We hate that too!</p>
                        <div className='row'>
                            <div className="col-md-6 p-1">
                                <input type="email" className='form-control mr-2' placeholder='Email' required/>
                            </div>
                            <div className="col-md-6 p-1">
                            <input type="text" className='form-control' placeholder='Name' required/>
                            </div>
                        </div>


                        <div className='row'>
                            <div className="col-lg-9 p-1">
                                <div className="row no-gutters justify-content-lg-start  justify-content-between">
                                    <div className="col-8 mr-0 mr-md-2">
                                        <input type="text" className='form-control' placeholder='City' required/>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className='form-control' placeholder='State' required/>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 p-1">
                                <button type='submit' className='btn btn-block text-white' style={{'backgroundColor':'#A00DA7'}}>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={img} className='img-fluid' alt=""/>
                    </div>
                </div>
                </form>}
                { !show && 
                <div className='pb-3'>
                <h3 className='text-center m-0'>
                    Form Successfully Submitted<br/>
                    <Link to='/newComponent'>Click Here </Link> to go to Next Steps
                </h3>
                </div> }
            </div>
        </div>
    )
}

export default ContactForm
