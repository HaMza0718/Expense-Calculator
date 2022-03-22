import './App.css'
import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp';
import History from './components/History';
import Transaction from './components/Transaction';
import { GlobalProvider } from './context/Global'

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className="container">
     <Balance />
     <IncomeExp />
     <History />
     <Transaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
