import React,{useContext} from 'react';
import { AppContext } from '../App';
import './Balance.css';
function Balance(){
    const {balance,income,expense} = useContext(AppContext);
    return(
        <div className='sib'>
            <div>
                <h3> Your Balance:Rs{balance}</h3>
            </div>
            <div>
                <h3>Income:Rs{income}</h3>
            </div>
            <div>
                <h3>Expense:Rs{expense}</h3>
            </div>

        </div>
    );
}
export default Balance;