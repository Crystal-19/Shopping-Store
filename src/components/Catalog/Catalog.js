import React from 'react';


const Catalog = ( { CatalogFilter, CatalogProduct, toggle, 
    CartDetail, AddCart, setCartNum, cartNum, OrderDetail, 
    Data, productFilter, Plus, Minor, vouchers, setVouchers, 
    inputText, setInputText, showCart, setShowCart, cartItems, 
    checkBox, setCheckBox, filteredColor, setFilteredColor, 
    getFilteredColor, Filter, setFilter, colorHandler, priceHandler, searchHandler } ) => {
    return (
        <div className={toggle === 2 || toggle === 5 ? 'active-content' : 'deactive-content'}>
            {showCart ? 
            <CartDetail 
                OrderDetail={OrderDetail}
                cartItems={cartItems}
                Data={Data}
                Plus={Plus}
                Minor={Minor}
                vouchers={vouchers}
                setVouchers={setVouchers}
                inputText={inputText}
                setInputText={setInputText}
                showCart={showCart}
                setShowCart={setShowCart}
                checkBox={checkBox}
                setCheckBox={setCheckBox}
            /> :
            <div className="row">
                <div className="col-lg-3 me-5">
                    <CatalogFilter
                        filteredColor={filteredColor}
                        setFilteredColor={setFilteredColor}
                        getFilteredColor={getFilteredColor}
                        Filter={Filter}
                        colorHandler={colorHandler}
                        priceHandler={priceHandler}
                     />
                </div>
                <div className="col-lg-8 px-2">
                    <CatalogProduct 
                        AddCart={AddCart}
                        setCartNum={setCartNum}
                        cartNum={cartNum}
                        Data={Data}
                        productFilter={productFilter}
                        showCart={showCart}
                        setShowCart={setShowCart}
                        getFilteredColor={getFilteredColor}
                        Filter={Filter}
                        setFilter={setFilter}
                        searchHandler={searchHandler}
                    />
                </div>
            </div>}
        </div> 
    );
}

export default Catalog;
