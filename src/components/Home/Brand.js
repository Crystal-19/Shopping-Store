import React from 'react';
import cartier from "../cartier-b.jpeg";
import hermes from "../hermes-b.jpeg";
import dior from "../dior-b.jpeg";
import dw from "../dw-b.jpeg";
import rolex from "../rolex-b.jpeg";
import hublot from "../hublot-b.jpeg";
import gucci from "../gucci-b.jpeg";
import omega from "../omega-b.jpeg";
import seiko from "../seiko-b.jpeg";

const Brand = () => {
    return (
        <section className='brands py-5 '>
            <div className="brand-container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active btn-slide" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="btn-slide" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="btn-slide" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active py-4 px-4">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={cartier} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                                <div className="col-lg-3">
                                    <img src={rolex} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                                <div className="col-lg-3">
                                    <img src={hermes} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item py-4 px-4">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={gucci} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                                <div className="col-lg-3">
                                    <img src={dw} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                                <div className="col-lg-3">
                                    <img src={seiko} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item py-4 px-4">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={dior} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                                <div className="col-lg-3">
                                    <img src={hublot} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                                <div className="col-lg-3">
                                    <img src={omega} className="d-block w-100 logo-b" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Brand;
