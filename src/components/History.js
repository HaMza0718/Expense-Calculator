import React, { useContext} from 'react'
import { GlobalContext } from '../context/Global';
import { TransactionUpdate } from './TransactionUpdate';

const History = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <div className="hero">
        <h3>History</h3>
      <ul className="list">
      {transactions.map(transaction => 
       (<TransactionUpdate key={transaction.id} transaction={transaction}/>)
      )}
      </ul>
    </div>
  )
}

export default History;