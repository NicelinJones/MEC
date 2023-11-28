import React,{useContext} from 'react';
import { AppContext } from '../App';
import './Balance.css';
function Balance(){
    const {balance,income,expense} = useContext(AppContext);
    return(
        <div className='sib'>
            <div>
                <h2> Your Balance:Rs{balance}</h2>
            </div>
            <div>
                <h2>Income:Rs{income}</h2>
            </div>
            <div>
                <h2>Expense:Rs{expense}</h2>
            </div>

        </div>
    );
}
export default Balance;