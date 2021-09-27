import React from 'react';
import cart from "../cart.png";


const CatalogProduct = ( {AddCart, setCartNum, cartNum, Data, productFilter, 
    showCart, setShowCart, filteredColor, setFilteredColor, getFilteredColor,
    Filter, setFilter, searchHandler} ) => {


    return (
        <div>
            <div className="ProductContainer pt-3 pb-5 m-auto ">
                <div className="row pb-5 m-auto">
                    <div className="col">
                        <div onClick={() => setShowCart(true)}  className="cartContainer">
                            <p>{cartNum}</p>
                            <a href='#cart'> <img src={cart} className='cartIcon' alt="cart" /> </a>
                        </div>
                    </div>
                    <div className="col">
                        <input onChange={(name) => searchHandler(name.target.value)} type="text" placeholder='Search...' />
                    </div>
                </div>
                <div className="row pb-2">
                        {productFilter.map((productItem) => (
                            <div key={productItem.id} className="col-lg-4 text-center addCenter">
                                <div className="card border-0 bg-light mb-3">
                                    <div className="card-body">
                                        <img src={productItem.image} alt={productItem.name} className='img-fluid'/>
                                    </div>
                                </div>
                                <h6> {productItem.name} </h6>
                                <p> ${productItem.price} </p>
                                <a href='#ac' className='addCart mb-3' onClick={() => AddCart(productItem)} > + </a>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default CatalogProduct;
