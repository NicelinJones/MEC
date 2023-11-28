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
  const [expense,setExpense]=useState(0);
  const [history,setHistory]=useState([]);
  const [text,setText]=useState("");
  const [amount,setAmount] =useState(0);
  const expenseArray = [],incomeArray = [];
const reducer =(acc,curr) => acc+curr;

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

// }



const handleSubmit = (e) => {
  let intAmount = parseInt(amount);
  e.preventDefault();
  if ((text === "" ) || ( amount === "")){
      alert ("invalid inputs");
      return;
    }
    
    
    if( intAmount>0){
    setBalance(intAmount + balance);
    incomeArray.push(intAmount);
    setIncome(incomeArray.reduce(reducer));
   }
    
    else{
            setBalance(balance + intAmount);
            expenseArray.push(intAmount);
            setExpense(-(expenseArray.reduce(reducer)));

    }
  

    
    setHistory ([...history,{text:text,amount:amount}])
    setText("");setAmount("");
    alert("Transaction added")
    

   }
  
  return(
  <div className="App" >
 <AppContext.Provider value={{balance,income,expense,history,text,amount,setText,setAmount,handleSubmit: {handleSubmit}}} >
  <div  className = "mobile-view">
    <Header />
    <br/><br/>   
     <hr/><hr/>
    <Balance/>
    <br/><br/>
    <hr/><hr/>
    <History/>
    <br/><br/>
    <hr/><hr/>
    <Transaction/>
    <hr/><hr/>
  </div>
 </AppContext.Provider>
 </div>
);
}
export default App;