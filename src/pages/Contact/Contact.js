import React from 'react'
import './Contact.css'
import contact from '../../images/contact.jpeg'
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className='contact' id='contacts'>
        <div className='card-card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <img src={contact} 
                            alt='contact'
                            className='image'/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-5'>
                <div className='card2 d-flex card border-0 px-4 py-5'>
                        <div className='row'>
                            <div className='row'>
                        <h6>Contact With Icons
                            <BsLinkedin color='blue' size={25} className='ms-2'/>
                            <BsGithub color='black' size={25} className='ms-2'/>
                            <BsFacebook color='blue' size={25} className='ms-2'/>
                            <BsWhatsapp color='green' size={25} className='ms-2'/>
                        </h6>
                        </div>
                        <div className='row px-3 mb-4'>
                            <div className='line'/>
                                <small className='or text-center'>OR</small>
                                <div className='line'/>
                        </div>
                        <div className='row px-3'>
                            <input
                             type='text'
                              name='name'
                               placeholder='Write your name'
                                className='mb-3' />
                        </div>
                        <div className='row px-3'>
                            <input
                             type='email'
                              name='email'
                               placeholder='Enter your Email Address'
                                className='mb-3' />
                        </div>
                        <div className='row px-3'>
                            <textarea
                             type='text'
                              name='msg'
                               placeholder='Write your name'
                                className='mb-3' />
                        </div>
                        <div className='row px-3'>
                           <button className='button' type='submit'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
