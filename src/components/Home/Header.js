import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header  = () => {
    return (
        <div className='header-wraper'>
            <div className="main-info">
                <Typed 
                    className='typed-text'
                    strings={['Luxury and Contemporary Jewelry', 'High-end Watches and Accessories']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
            <Particles 
                className= {`particles-canvas toggle === 1 ? 'active-content' : 'deactive-content'`}
                params={{
                    particles: {
                    number: {
                        value: 30, 
                        density: {
                        enable: true,
                        value_area: 900 
                        }
                    },
                    shape:{
                        type: 'star',
                        stroke: {
                        width: 6,
                        color: '#f9ab00'
                        }
                    }
                    }
                            }}
                />
            <p> Design </p>
            <a href="#contact" className="btn1">Contact Us</a>
        </div>
    );
}

export default Header;
