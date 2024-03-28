
import {createContext,useState} from 'react';
import Header from './components/Header'; 
import Balance from './components/Balance';
import History from './components/History';
import Transaction from './components/Transaction'; 
import './App.css';
export const AppContext=createContext(null);
 function App(){
  const [balance,setBalance]=useState(0);
  const [income,setIncome]=useState(0);
  const [incomes,setIncomes]=useState([]);
  const [expense,setExpense]=useState(0);
  const [expenses,setExpenses]=useState([]);
  const [history,setHistory]=useState([]);
  const [seluct,setSeluct]=useState("");
  const [amount,setAmount] =useState(0);
  const [TotalIncomes,setTotaltIncomes]=useState(0);
  const [TotalExpenses,setTotaltExpenses]=useState(0);
 //const incomeArray =[];
  //const expenseArray=[];
  const [incomeArray] =useState ([]);
  const[expenseArray] =useState ([]);
const reducer =(acc,curr) => acc+curr;

const TotalIncome =() =>{
 // 
  let sum =0;
   incomeArray.forEach(n => sum += n)
   console.log(sum)
   console.log(incomeArray);
   setTotaltIncomes(sum)
   return(sum)  
}

const TotalExpense =() =>{
  // 
   let sum =0;
    expenseArray.forEach(n => sum += n)
    console.log(sum)
    console.log(expenseArray);
    setTotaltExpenses(sum)
    return(sum)
    
 
   
 }
//var Total ={TotalIncome}
//console.log(Total);
// const handleTextAmount = (e)=>{
// if((text2 === "") || (amount2=== "")){
//   setText(e.target.text1)
//   setAmount(e.target.amount1)
// }
// if((text1==="") || (amount1===""))
// {
//   setText(e.target.text2);
//  setAmount(e.target.amount2)
 
// }
// else
// {
//   alert("INVALID INPUTS");
// }





const handleSubmit = (e) => { 
 
  e.preventDefault();
  if( amount>0){

 
  //console.log(seluct,amount);

  let intAmount = parseInt(amount);
  
  //  if ((seluct === "" ) || ( amount === 0 )){
  //     alert ("invalid inputs");
  //     return;
  //   }
 
    

      
    setBalance(intAmount + balance);
    incomeArray.push(intAmount);
    setIncome(incomeArray.reduce(reducer));
    //console.log(incomeArray);

  
    //console.log(income) ;    
    
    setIncomes([...incomes,{seluct:seluct,amount:amount}])
    
     }
    
    
    
    if(amount<0){

      let intAmount = parseInt(amount);
  
      
            setBalance(balance + intAmount);
            expenseArray.push(intAmount);
            setExpense(-(expenseArray.reduce(reducer)));
            setExpenses([...expenses,{seluct:seluct,amount:amount}])
    

    }
    setHistory ([...history,{seluct:seluct,amount:amount}])
    alert("Transaction added")
    
    setSeluct("");
    setAmount(0);

   } 
  
  
  return(
  <div className="App" >
 <AppContext.Provider value={{balance,TotalIncomes,TotalExpenses,income,expense,history,incomes,expenses,seluct,amount,setSeluct,setAmount,TotalIncome:{TotalIncome},TotalExpense:{TotalExpense},handleSubmit: {handleSubmit}}} >
  <div  className = "mobile-view">
    <Header />
    <br/><br/>  
    <hr></hr> 
    <Transaction/>
    <br></br>
    <hr/><hr/>
    <Balance/>
    <br/><br/>
    <hr/><hr/>
    <History/>
    <br/><br/>
    <hr/><hr/>
    </div>
 </AppContext.Provider>
 </div>
);
}
export default App;