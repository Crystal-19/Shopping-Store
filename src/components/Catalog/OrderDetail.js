import React, { useState } from 'react';
import pd1 from "../pd1.jpeg";

const OrderDetail = ( {cardItems, productItems, Data} ) => {
    const [qtt, setQtt] = useState(1);
    const Plus = () => {
        setQtt(qtt + 1);
        console.log('ngan')
    }
    const Minor = () => {
        setQtt(qtt - 1);
    }
    return (
        <div className="row ms-2 d-flex align-items-center">
            <img src={pd1} alt="pd" className='prodImg'/>
            <div className="col"> $39000 </div>
            <div className="col"> {qtt} </div>
            <div className="col"> 
                <div className="row">
                    <a onClick={Plus} href='#up' className='up fa'> &#xf106; </a>
                    <a onClick={Minor} href='#down' className='down fa'> &#xf107; </a>
                </div>
            </div>
            <div className="col"> $39000 </div>
        </div>
    );
}

export default OrderDetail;
