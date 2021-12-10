/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import mb1 from "../member1.png";
import mb2 from "../member2.jpeg";
import mb3 from "../member3.jpeg";
import mb4 from "../member4.png";
import fb from "../fb.png";
import ig from "../ig.png";
import linkedin from "../in.png";
import twt from "../tw.jpeg";


const Team = () => {
    return (
        <section className='team'>
            <div className='container pt-5 text-center'>
                <div className="row pb-3">
                    <div className="col-lg-5 m-auto text-center">
                        <h1> Our Team</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 text-center mb-container">
                        <div className="card border-0 bg-light member-container">
                            <div className="card-body">
                                <img src={mb1} alt="mb1" className='img-mb'/>
                            </div>
                        </div>
                        <div className="hide-ct">
                            <h6> CEO </h6>
                            <div className="row">
                                <a href="#fb" className='col'>
                                    <img src={fb} alt="fb" className='social-m'/>
                                </a>
                                <a href="#ig" className='col'>
                                    <img src={ig} alt="ig" className='social-m' />
                                </a>
                                <a href="#twt" className='col'>
                                    <img src={twt} alt="twt" className='social-m' />
                                </a>
                                <a href="#linkedin" className='col'>
                                    <img src={linkedin} alt="linkedin" className='social-m' />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3 text-center mb-container">
                        <div className="card border-0 bg-light member-container">
                            <div className="card-body">
                                <img src={mb2} alt="mb2" className='img-mb'/>
                            </div>
                        </div>
                        <div className="hide-ct">
                            <h6> Designer </h6>
                            <div className="row">
                                <a href="#fb" className='col'>
                                    <img src={fb} alt="fb" className='social-m'/>
                                </a>
                                <a href="#ig" className='col'>
                                    <img src={ig} alt="ig" className='social-m' />
                                </a>
                                <a href="#twt" className='col'>
                                    <img src={twt} alt="twt" className='social-m' />
                                </a>
                                <a href="#linkedin" className='col'>
                                    <img src={linkedin} alt="linkedin" className='social-m' />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3 text-center mb-container">
                        <div className="card border-0 bg-light member-container">
                            <div className="card-body">
                                <img src={mb3} alt="mb3" className='img-mb'/>
                            </div>
                        </div>
                        <div className="hide-ct">
                            <h6> Marketing Manager </h6>
                            <div className="row">
                                <a href="#fb" className='col'>
                                    <img src={fb} alt="fb" className='social-m'/>
                                </a>
                                <a href="#ig" className='col'>
                                    <img src={ig} alt="ig" className='social-m' />
                                </a>
                                <a href="#twt" className='col'>
                                    <img src={twt} alt="twt" className='social-m' />
                                </a>
                                <a href="#linkedin" className='col'>
                                    <img src={linkedin} alt="linkedin" className='social-m' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center mb-container">
                        <div className="card border-0 bg-light member-container">
                            <div className="card-body">
                                <img src={mb4} alt="mb4" className='img-mb'/>
                            </div>
                        </div>
                        <div className="hide-ct">
                        <h6> Sales Manager </h6>
                            <div className="row">
                                <a href="#fb" className='col'>
                                    <img src={fb} alt="fb" className='social-m'/>
                                </a>
                                <a href="#ig" className='col'>
                                    <img src={ig} alt="ig" className='social-m' />
                                </a>
                                <a href="#twt" className='col'>
                                    <img src={twt} alt="twt" className='social-m' />
                                </a>
                                <a href="#linkedin" className='col'>
                                    <img src={linkedin} alt="linkedin" className='social-m' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-5 text-center mission">
                    <div className="col-lg-4">
                        <h1 className='mission' style={{background: 'linear-gradient(90deg, #00d7c8, #9e4eff, #ff21bd, #ff6633)', color: 'var(--primary-white)'}}> 2021 </h1>
                        <h5> Since We Start </h5>
                    </div>
                    <div className="mission col-lg-4"> Our team's mission to bring the most 
                        professional services for your business.
                    </div>
                    <div className="mission col-lg-4">
                        <h1 className='clientnum'></h1>
                        <h5> Our Clients </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;

