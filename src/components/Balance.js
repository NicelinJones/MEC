import React,{useContext} from 'react';
import { AppContext } from '../App';
import './Balance.css';
function Balance(){
    const {balance} = useContext(AppContext);
    return(
        <div className='sib'>
            <div>
                <h2> Your Balance:Rs{balance}</h2>
            </div>
            
            

        </div>
    );
}
export default Balance;