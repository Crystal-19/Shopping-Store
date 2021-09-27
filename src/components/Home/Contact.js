import React from 'react';
import fb from "../fb.png";
import ig from "../ig.png";
import linkedin from "../in.png";
import twt from "../tw.jpeg";

const Contact = () => {
    return (
        <section className="contact py-5">
             <div className="container" style={{background:'var(--primary-white'}}>
                 <div className="row">
                     <div className="col-lg-5 m-auto text-center py-4">
                         <h1> Contact </h1>
                         <h6> Alway Be In Touch With Us  </h6>
                     </div>
                 </div>
                 <div className="row py-4">
                     <div className="col-lg-9 m-auto">
                         <div className="row">
                             <div className="col-lg-4 contactFormat">
                                 <h6> Location </h6>
                                 <p> 199 Panda Street, HCMC, VietNam </p>
                                 <h6> Phone </h6>
                                 <p> +84 19191919 </p>
                                 <h6> Email </h6>
                                 <p> panda@gmail.com </p>
                             </div>
                             <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control bg-light" placeholder='First Name' />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control bg-light" placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 py-3">
                                        <textarea name="" className='form-control bg-light' placeholder='Enter Your Information' id="" cols="10" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <a href='#btn2' className='submitBtn'> Submit </a>
                                </div>
                            </div> 
                         </div>
                     </div>
                 </div>
             </div>
             <div className="d-flex justify-content-md-around text-center pt-5" style={{width:'100%'}}>
                <div className="col-lg-2 d-flex flex-column justify-content-center align-items-center" style={{background: 'var(--primary-white)', height:'8rem'}}>
                    <img src={fb} alt="fb" className='social-m' style={{background: 'linear-gradient(90deg, #00d7c8, #9e4eff, #ff21bd, #ff6633)', color: 'var(--primary-white)'}}/>
                    <p> lovebook.fb.com </p>
                </div>
                <div className="col-lg-2 d-flex flex-column justify-content-center align-items-center" style={{background: 'var(--primary-white)', height:'8rem'}}>
                    <img src={ig} alt="fb" className='social-m' style={{background: 'linear-gradient(90deg, #00d7c8, #9e4eff, #ff21bd, #ff6633)', color: 'var(--primary-white)'}}/>
                    <p> lovebook.ig.com </p>
                </div>
                <div className="col-lg-2 d-flex flex-column justify-content-center align-items-center" style={{background: 'var(--primary-white)', height:'8rem'}}>
                    <img src={twt} alt="fb" className='social-m' style={{background: 'linear-gradient(90deg, #00d7c8, #9e4eff, #ff21bd, #ff6633)', color: 'var(--primary-white)'}}/>
                    <p> lovebook.twt.com </p>
                </div>
                <div className="col-lg-2 d-flex flex-column justify-content-center align-items-center" style={{background: 'var(--primary-white)', height:'8rem'}}>
                    <img src={linkedin} alt="fb" className='social-m' style={{background: 'linear-gradient(90deg, #00d7c8, #9e4eff, #ff21bd, #ff6633)', color: 'var(--primary-white)'}}/>
                    <p> lovebook.in.com </p>
                </div>
             </div>
        </section>
    );
}

export default Contact;
