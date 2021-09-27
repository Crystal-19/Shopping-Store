import React from 'react';
import logo from "../logo.jpeg";
import phone from "../phone.png";
import fb from "../fb.png";
import ig from "../ig.png";
import linkedin from "../in.png";
import twt from "../tw.jpeg";

const Services = () => {
    return (
        <section style={{background: 'var(--primary-gray-dark)'}}>
            <div className="row py-5 m-auto">
                <div style={{color:'var(--primary-white)'}} className="col-lg-3 ms-5">
                    <img src={logo} alt="logo" style={{height:'6rem', width:'6rem'}} className='py-2' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae quas vel sint commodi repudiandae consequuntur.
                    </p>
                    <div className="d-flex flex-row align-items-center py-3">
                        <img style={{height:'3.5rem', width:'3.5rem'}} src={phone} alt="phone" />
                        <p> +84 932062297</p>
                    </div>
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <a href="#fb">
                            <img src={fb} alt="fb" className='social-m'/>
                        </a>
                        <a href="#ig">
                            <img src={ig} alt="ig" className='social-m ms-3' />
                        </a>
                        <a href="#twt">
                            <img src={twt} alt="twt" className='social-m ms-3' />
                        </a>
                        <a href="#linkedin">
                            <img src={linkedin} alt="linkedin" className='social-m ms-3' />
                        </a>
                    </div>
                </div>
                <div style={{color:'var(--primary-white)'}} className="col-lg-3 d-flex flex-column">
                    <p style={{fontSize:'30pt', color:'var(--primary-white)'}}> Our Services </p>
                    <p className='fa'> &#xf101; Home </p>
                    <p className='fa'> &#xf101; Services </p>
                    <p className='fa'> &#xf101; Team </p>
                    <p className='fa'> &#xf101; About Us </p>
                    <p className='fa'> &#xf101; Contact </p>
                </div>
                <div style={{color:'var(--primary-white)'}} className="col-lg-3">
                    <p style={{fontSize:'30pt'}}> Business Hours </p>
                    <p>Our support available to help you 24 hours a day, seven days week</p>
                    <p> Monday-Saturday:  ------------ 8am-6pm</p>
                    <p>Friday:  ------------ 09am-9pm</p>
                    <p>Sunday:  ------------ 09am-8pm</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
