import React,{useContext} from 'react';
import { AppContext } from '../App';
import './Transaction.css';

 function Transaction(){
    const {amount1,amount2,seluct,TotalIncomes,TotalExpenses,setSeluct,setAmount,incomes,expenses,TotalIncome:{TotalIncome},TotalExpense:{TotalExpense},handleSubmit:{handleSubmit}} = useContext(AppContext);   
    
    return(
  <div className='lib'>
    <form >
    <table >
      <tr className='df'>
      <td><h2>INCOME</h2>
        <select name='Income' value={seluct} onChange= {e => setSeluct(e.target.value)}>
          <option></option>
          <option >Salary Income</option> 
            <option >Rent Income</option>
            <option >Business Income</option>
            <option >Other Income</option> 
            </select>
      <h2>Amount</h2>
      <input type="number" placeholder='Enter Amount..' value={amount1} name ='Income' onChange={e => setAmount(e.target.value)}/><br></br>
      <button type="submit" onClick={handleSubmit} > Submit</button>
      <button type="reset" value="Reset">reset</button>
      </td><br></br>
      <td className='vll'>INCOME
                {incomes.map((e,i)=>(
                        <div key={i}>
            {e.seluct} {e.amount}
                       </div>
                    ) )}    
             </td><br></br>
             <td className='vll'>
             <h6>{TotalIncomes}</h6>
             <button type="button" onClick={TotalIncome} >Total Incomes </button>
              </td><br></br>
        <td className="vll" >
      <h2>EXPENSE</h2>
      <select name='Expense' value={seluct} onChange= {e => setSeluct(e.target.value)}>
        <option></option>
          <option >Salary Expense</option> 
            <option >Rent Expense</option>
            <option >Business Expense</option>
            <option >Other Expense</option> 
            </select>

        <h2>Amount</h2>
      <input type="number" placeholder='Enter Amount..' value={amount2} name ='Expense' onChange={e => setAmount(-(e.target.value))}/><br></br>   
      <button type="submit" onClick={handleSubmit} > Submit</button>
      <button type="reset" value="Reset">reset</button>
        </td><br></br>
        <td className='vll'>EXPENSE
{expenses.map((e,i)=>(
        <div key={i}>
{e.seluct} {e.amount}
</div>
    )
)
}
</td><br></br>
<td className='vll'>
  <h6>{TotalExpenses}</h6>
<button type="button" onClick={TotalExpense} >Total Expenses</button>
</td>
</tr>
    </table>
    </form>    
 </div>
    );
}
export default Transaction;