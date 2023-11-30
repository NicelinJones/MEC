import React,{useContext} from 'react';
import { AppContext } from '../App';
import './Transaction.css'

 function Transaction(){
    const {amount1,amount2,seluct,setSeluct,setAmount,handleSubmit:{handleSubmit}} = useContext(AppContext);
           return(
  <div className='lib'>
    <form >
    <div className='df'>
      <div className='vll'>
      <h2>INCOME</h2>
        <select name='Income' value={seluct} onChange= {e => setSeluct(e.target.value)}>
          <option></option>
          <option >Salary Income</option> 
            <option >Rent Income</option>
            <option >Business Income</option>
            <option >Other Income</option> 
            </select>
      <h2>Amount</h2>
      <input type="number" placeholder='Enter Amount..' value={amount1} name ='amount1' onChange={e => setAmount(e.target.value)}/>
      <div>
      <button type="submit" onClick={handleSubmit} > Submit</button>
      </div>
      </div>
      <div className="vll" >
      <h2>EXPENSE</h2>
      <select name='Expense' value={seluct} onChange= {e => setSeluct(e.target.value)}>
        <option></option>
          <option >Salary Expense</option> 
            <option >Rent Expense</option>
            <option >Business Expense</option>
            <option >Other Expense</option> 
            </select>
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