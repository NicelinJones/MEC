import React from 'react';
import './Header.css';
import logo from './logoimage.png'
import bimage from './th.jpg'
function Header() {
    return(
        <div  className='main'>
             <div className='hed'>
            <img src={logo} height="100px" width="125px" alt="logo" className='logodesign' />
            </div>
        <div className='girl' >
            <h1>Monthly Expense Calculator</h1>
            <img src={bimage} alt='girl with calculator' ></img>
    </div>
    
        </div>
    );
};
export default Header;