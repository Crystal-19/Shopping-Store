import React from 'react';

const CatalogFilter = ({colorHandler, priceHandler}) => {
    
    

    return(
    <div className="filter-container pt-3">
        <div className="col-lg-6 ms-4">
            <div className="title titleFormat ps-2 py-2"> Catagories </div>
            <ul className="list-group">
                <li className='list-groupitem'> Rolex </li>
                <li className='list-groupitem'> BVLGARI </li>
                <li className='list-groupitem'> Dior </li>
                <li className='list-groupitem'> Gucci </li>
                <li className='list-groupitem'> Cartier </li>
                <li className='list-groupitem'> Hublot </li>
                <li className='list-groupitem'> Hermes </li>
                <li className='list-groupitem'> Omega </li>
                <li className='list-groupitem'> Daniel Wellington </li>
                <li className='list-groupitem'> Seiko </li>
                <li className='list-groupitem'> Zenith </li>
                <li className='list-groupitem'> Oris </li>
                <li className='list-groupitem'> Blancpain </li>
                <li className='list-groupitem'> Philip Stein </li>
                <li className='list-groupitem'> Charriol </li>
            </ul>
        </div>
        <div className="col-lg-6 py-5 ms-4">
            <select onChange={(cl) => colorHandler(cl.target.value)} className='titleFormat'>
                <option> Shop by color </option>
                <option>White</option>
                <option>Gold</option>
                <option>Pink</option>
                <option>Silver</option>
            </select>
        </div>
        <div className="col-lg-6 pt-5 ms-4">
            <select onChange={(pr) => priceHandler(pr.target.value)} className="titleFormat">
                <option> Shop by price </option>
                <option> Low </option>
                <option> Medium </option>
                <option> High </option>
            </select>
        </div>
    </div>
    );
}

export default CatalogFilter;
