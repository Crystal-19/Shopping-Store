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
            <div className="row pb-2 pt-5 m-auto Svs">
                <div style={{color:'var(--primary-white)'}} className="service-col col-lg-3 ">
                    <img src={logo} alt="logo" style={{height:'6rem', width:'6rem'}} className='img-lg py-2' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae quas vel sint commodi repudiandae consequuntur.
                    </p>
                    <div className="d-flex flex-row align-items-center py-3">
                        <img id='phone' src={phone} alt="phone" />
                        <p id='phonenum'> +84 932062297</p>
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
                <div style={{color:'var(--primary-white)'}} className="service-col col-lg-3 d-flex flex-column">
                    <p className='title-size' style={{color:'var(--primary-white)'}}> Our Services </p>
                    <p className='fa'> &#xf101; Home </p>
                    <p className='fa'> &#xf101; Services </p>
                    <p className='fa'> &#xf101; Team </p>
                    <p className='fa'> &#xf101; About Us </p>
                    <p className='fa'> &#xf101; Contact </p>
                </div>
                <div style={{color:'var(--primary-white)'}} className="service-col col-lg-3">
                    <p className='title-size'> Business Hours </p>
                    <p>Our support available to help you 24 hours a day, seven days week</p>
                    <p className='workingtime'> Monday-Saturday:  ------------ 8am-6pm</p>
                    <p className='workingtime'>Friday:  ------------ 09am-9pm</p>
                    <p className='workingtime'>Sunday:  ------------ 09am-8pm</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
