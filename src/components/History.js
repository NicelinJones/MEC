import React,{useContext} from 'react';
import { AppContext } from '../App';
import './History.css'
function History() {
const {history} =useContext(AppContext);
    return(
   <div className='sub'> 
   <h3>History</h3>
     {history.map( (e,i) => (
        <div key={i}>
            {e.text} {e.amount}
        </div>
     ))}
   </div>
    )
}
export default History;