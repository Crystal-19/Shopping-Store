import React, {useState} from 'react';

const CartDetail = ( {cartItems, Plus, Minor, vouchers, setVouchers, inputText, setInputText, 
    showCart, setShowCart, checkBox, setCheckBox} ) => {
    const Total = cartItems.reduce((price, item) => price + item.Quantity * item.price, 0)
    
    
    const inputVoucher = (e) => {
        setInputText(e.target.value)
        console.log(e.target.value)
    }
    const [totalStatus, setTotalStatus] = useState(false)

    const voucherHandler = () => {
        if(vouchers.length > 0){
            alert('this voucher was applied, please try again !')
        }else{
            if(inputText === 'lovebook'){
                setVouchers([...vouchers, {text: inputText, apply: true}])
                setTotalStatus(true)
            }else{
                setVouchers([...vouchers, {text: inputText, apply: false}])
            }
        }
        
    }


    return(<div className='container text-center py-5 checkoutPopup'>
            <button onClick={() => setShowCart(false)} style={{border: 'none', background: 'none', fontSize:'16pt'}}> Back </button>
            <div className="row py-5">
                <div className="col-lg-7 text-center white-bg ms-4">
                    <div className="row pb-5 pt-3">
                        <div className="col"> Product </div>
                        <div className="col"> Price </div>
                        <div className="col"> QTT </div>
                        <div className="col"> Adjust </div>
                        <div className="col"> Total </div>
                    </div>
                    <div className="row">
                        {cartItems.length === 0 && (<div> No items are added.</div>
                        )}
                        <div>
                            {cartItems.map((item) => (
                                <div key={item.id} className="row ms-2 d-flex align-items-center pb-2">
                                    <img src={item.image} alt="pd" className='prodImg'/>
                                    <div className="col"> ${item.price} </div>
                                    <div className="col"> {item.Quantity} </div>
                                    <div className="col"> 
                                        <div className="row">
                                            <a onClick={() => Plus(item)} href='#up' className='up fa'> &#xf106; </a>
                                            <a onClick={() => Minor(item)} href='#down' className='down fa'> &#xf107; </a>
                                        </div>
                                    </div>
                                    <div className="col"> ${`${item.price * item.Quantity}`} </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 totalDetail bg-pink">
                    <div className="col-lg-6 dash "></div>
                    <div className="d-flex flex-column justify-content-center align-items-end">
                        <h5 className={totalStatus===true ? 'delTotal' : ''}> Cart Total: $ {Total} </h5>
                            {vouchers.map((voucher) => (
                                <div className="d-flex flex-row align-items-center justify-content-md-around">
                                    <h5 className='ms-2' style={{fontWeight:'bold'}}> Cart Total: ${Total*0.3} </h5>
                                    <h6 style={{color: 'red'}}> -30% </h6>
                                </div>
                            )
                            )}
                    </div>
                    <div className="col-lg-8 py-5">
                        <div className="row">
                            <div className="col-lg-3">
                                <p>Voucher</p>
                            </div>
                            <div className="col-lg-6">
                                <input 
                                onChange={inputVoucher} 
                                type="text" 
                                placeholder='Enter Your Code' 
                                value= {inputText}
                                />
                            </div>
                            <div className="col-lg-2">
                                <button onClick={() => voucherHandler()} className='apl'> Apply </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <input onChange={() => setCheckBox(!checkBox)} type="checkbox"/>
                            <p className="d-flex align-items-center mb-0 ms-2"> I agree to Term of Love Book </p>
                        </div>
                    </div>
                    {checkBox ? 
                        <div className='btn2'> Checkout </div>
                        :
                        <div className='checkBox'> Checkout </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CartDetail;
