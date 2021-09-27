import React from 'react';

const Home = ( { Header, BestSeller, Brand, Team, Contact, toggle, Process, toggleTab, Services } ) => {
    return (
        <div className={toggle === 1 ? 'active-content' : 'deactive-content'} >
            <Header />
            <BestSeller 
                toggleTab={toggleTab}
            />
            <Process />
            <Team />
            <Brand />
            <Contact />
            <Services />
        </div>
    )
}

export default Home;
