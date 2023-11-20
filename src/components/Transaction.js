import React,{useContext} from 'react';
import { AppContext } from '../App';
import './Transaction.css'
function Transaction(){
    const {text,setText,amount,setAmount,handleSubmit} = useContext(AppContext);

    return(
        <div className='lib'>
            <div>
                <h3>Add Transaction</h3>
            </div>
            <div>
                <h3>text</h3><input type="text" placeholder='Enter Text..' value={text} name = 'text' onChange={e => setText(e.target.value)}/>
            </div>
            <div>
                <h3>Amount<br/>[negative - expense,positive - income]</h3><input type="number" placeholder='Enter Amount..' value={amount} name ='number' onChange={e => setAmount(e.target.value)}/>
            </div>
    
    
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <br/><br/>
    </div>


    );
}
export default Transaction;