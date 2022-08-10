import React from 'react'
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/Global';

const Transaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const {addTransaction} = useContext(GlobalContext);

    const submit= e =>{
      e.preventDefault();
      const newTransaction={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
    }
  return (
    <div className="hero"> 
      <h3>Add New Transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>Amount: (use ➖ for expense)</label>
          <input type="number" value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}
export default Transaction;