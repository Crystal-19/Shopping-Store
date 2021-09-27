import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import BestSeller from "./components/Home/BestSeller";
import Process from "./components/Home/Process";
import Team from "./components/Home/Team";
import Brand from "./components/Home/Brand";
import Contact from "./components/Home/Contact";
import Catalog from "./components/Catalog/Catalog";
import CatalogFilter from "./components/Catalog/CatalogFilter";
import CatalogProduct from "./components/Catalog/CatalogProduct";
import CartDetail from "./components/Catalog/CartDetail";
import OrderDetail from "./components/Catalog/OrderDetail";
import Data from "/Users/a9876543/Desktop/lovebook/src/components/Catalog/Data.js";
import Services from "./components/Home/Services";


function App() {
  const { productItems } = Data;
  const [cartItems, setcartItems] = useState([]);

  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
      setToggle(index);
  }

  
  const [cartNum, setCartNum] = useState(0);
  const AddCart = (product) => {
    setCartNum(cartNum + 1);
    
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if(ProductExist) {
      setcartItems(cartItems.map((item) => item.id === product.id
      ? {...ProductExist, Quantity: ProductExist.Quantity + 1} : item
      ))
    } else{
      setcartItems([...cartItems, {...product, Quantity: 1}]);
    }
  }

  const Plus = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if(ProductExist){
      setcartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist, Quantity: ProductExist.Quantity + 1} : item ));
    }

    setCartNum(cartNum + 1);
  }
  const Minor = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if(ProductExist.Quantity === 1){
      setcartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setcartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, Quantity: ProductExist.Quantity - 1 } : item ));

    }

    setCartNum(cartNum - 1);
  }
  const [inputText, setInputText] = useState('');
  const [vouchers, setVouchers] = useState([]);
    
  const [showCart, setShowCart] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const [filteredColor, setFilteredColor] = useState('Shop by color');
  const [Filter, setFilter] = useState(productItems);


  const searchHandler = (name) => {
      setFilter(productItems.filter((item) => item.name.toLowerCase().includes(name)));
  }

  // const colorHandler = (e) => {
  //   switch(e){
  //     case 'Pink':
  //       setFilter(productItems.filter((color) => color.color === 'pink'));
  //       break;
  //     case 'White':
  //       setFilter(productItems.filter((color) => color.color === 'white'));
  //       break;
  //     case 'Gold':
  //       setFilter(productItems.filter((color) => color.color === 'gold'));
  //       break;
  //     case 'Silver':
  //       setFilter(productItems.filter((color) => color.color === 'silver'));
  //       break;
  //     default:
  //       setFilter(productItems);
  //   }
  // }
  
  const colorHandler = (cl) => {
    const colorExist = productItems.find((item) => item.color === cl)
    if(colorExist){
      setFilter(productItems.filter((color) => color.color === cl));
    }else{
      setFilter(productItems)
    }
    
  }

  const priceHandler = (pr) => {
    const priceExist = productItems.find((item) => item.level === pr)
    if(priceExist){
      setFilter(productItems.filter((price) => price.level === pr));
    }else{
      setFilter(productItems)
    }
    
  }

  return (
    <>
      <Navbar 
        toggleTab={toggleTab}
      />
      <Home 
        Header={Header}
        BestSeller={BestSeller}
        Process={Process}
        Brand={Brand}
        Team={Team}
        Contact={Contact}
        toggle={toggle}
        setToggle={setToggle}
        toggleTab={toggleTab}
        Services={Services}
      />
      <Catalog 
        CartDetail={CartDetail}
        CatalogFilter={CatalogFilter}
        CatalogProduct={CatalogProduct}
        toggle={toggle}
        setToggle={setToggle}
        toggleTab={toggleTab}
        AddCart={AddCart}
        setCartNum={setCartNum}
        cartNum={cartNum}
        OrderDetail={OrderDetail}
        cartItems={cartItems}
        Data={Data}
        productFilter={Filter}
        Plus={Plus}
        Minor={Minor}
        showCart={showCart}
        setShowCart={setShowCart}
        inputText={inputText}
        setInputText={setInputText}
        vouchers={vouchers}
        setVouchers={setVouchers}
        checkBox={checkBox}
        setCheckBox={setCheckBox}
        filteredColor={filteredColor}
        setFilteredColor={setFilteredColor}
        Filter={Filter}
        setFilter={setFilter}
        colorHandler = {colorHandler}
        priceHandler={priceHandler}
        searchHandler={searchHandler}
      />
    </>
  );
}

export default App;
