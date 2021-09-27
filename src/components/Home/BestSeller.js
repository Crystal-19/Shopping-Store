import React from 'react';
import pd1 from "../pd1.jpeg";
import pd4 from "../pd4.jpeg";
import pd6 from "../pd6.jpeg";
import pd14 from "../pd14.jpeg";

const BestSeller = ({toggleTab}) => {
    return (
        <section className='product'>
            <div className='container py-5'>
                <div className="row pb-3">
                    <div className="col-lg-5 m-auto text-center">
                        <h5> Best Seller </h5>
                        <h6> Be Trendy Luxury Timepiece </h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 text-center">
                        <div className="card border-0 bg-light mb-3">
                            <div className="card-body">
                                <img src={pd1} alt="pd1" className='img-fluid'/>
                            </div>
                        </div>
                        <h6> Rolex </h6>
                        <p> $39,500</p>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="card border-0 bg-light mb-3">
                            <div className="card-body">
                                <img src={pd4} alt="pd4" className='img-fluid'/>
                            </div>
                        </div>
                        <h6> Gucci </h6>
                        <p> $9,400</p>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="card border-0 bg-light mb-3">
                            <div className="card-body">
                                <img src={pd6} alt="pd6" className='img-fluid'/>
                            </div>
                        </div>
                        <h6> Hublot </h6>
                        <p> $33,500</p>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="card border-0 bg-light mb-3">
                            <div className="card-body">
                                <img src={pd14} alt="pd14" className='img-fluid'/>
                            </div>
                        </div>
                        <h6> Philip Stein </h6>
                        <p> $6,300</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 text-center m-auto">
                        <a href='#btn2' className='btn2'onClick={() => toggleTab(5)} > Click For More </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BestSeller;

