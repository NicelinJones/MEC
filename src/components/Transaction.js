import React,{useContext} from 'react';
import { AppContext } from '../App';
import './Transaction.css'

 function Transaction(){
    const {text1,text2,amount1,amount2,setText,setAmount,handleSubmit:{handleSubmit}} = useContext(AppContext);
    


   
    
       return(
        <div className='lib'>
    <form >
    <div className='df'>
      <div className='vll'>
      <h2>INCOME</h2>
        <input type="text" placeholder='Enter Text..' value={text1} name = 'text1' onChange= {e => setText(e.target.value)} />
      <h2>Amount</h2>
      <input type="number" placeholder='Enter Amount..' value={amount1} name ='amount1' onChange={e => setAmount(e.target.value)}/>
      <div>
      <button type="submit" onClick={handleSubmit} > Submit</button>
      </div>
      </div>
      <div className="vll" >
      <h2>EXPENSE</h2>
        <input type="text" placeholder='Enter Text..' value={text2} name = 'text2' onChange={e => setText(e.target.value)}/>
        <h2>Amount</h2>
      <input type="number" placeholder='Enter Amount..' value={amount2} name ='amount2' onChange={e => setAmount(-(e.target.value))}/>   
      <div>
      <button type="submit" onClick={handleSubmit} > Submit</button>
     </div>
    </div>
    </div>
   
 </form>    
 </div>


    );
}
export default Transaction;