import React from 'react';
import './Filter.css'

function Filter() {
    return (
        <div className='main-filter-ctn'>
            <form className='main-filter'>
                <select className='main-label' name='category' id='category'>
                    <option value="all">Category</option>
                </select>
                <select className='main-label' name='price' id='price'>
                    <option value="all">Price</option>
                </select>
                <select className='main-label' name='quantity' id='quantity'>
                    <option value="all">Quantity</option>
                </select>
            </form>
        </div>
    );
}

export default Filter;
