import React from 'react'
import heroImage from '../assets/Images/hero1 (4).png' // Rename the import
import Certificate from '../assets/Images/certi.png'

const Hero = () => {
    return (
        <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
            <div className="row flex-lg-row-reverse align-items-center g-5 ">
                <div className="col-10 col-sm-8 col-lg-5">
                    <img
                        src={heroImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6 py-5 hero-text">
                    <h1 className="display-1 fw-bold lh-1 mb-3">
                        <span>Your online Shopping Market</span>
                    </h1>
                    <div className='d-flex align-items-center my-5'>
                        <img src={Certificate} alt="" className='me-3' />
                        <p className='fw-bold'>We deliver straight from the market to your doorstep</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 rounded-2">Order Now</button>
                            <button type="button" className="btn btn-white btn-lg px-4 rounded-2">View cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
