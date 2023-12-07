import React from 'react';
import './Header.css';
import logo from './logoimage.png'
function Header() {
    return(
        <div  className='main'>
             <div className='hed'>
            <img src={logo} height="100px" width="125px" alt="logo" className='logodesign' />
            </div>
        
             
            <h1>Monthly Expense Calculator</h1>
    
    
        </div>
    );
};
export default Header;