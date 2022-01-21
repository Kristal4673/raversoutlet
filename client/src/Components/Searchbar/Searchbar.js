import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return(
    <div className='main-searchbar'>
        <input className='main-searchbar-input' type='text' placeholder='Search Item by Name'/>
    </div>
  );
}

export default Searchbar;
