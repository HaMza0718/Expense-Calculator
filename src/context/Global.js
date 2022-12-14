import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

const initialState = {
  transactions : []
}
//context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id){
        dispatch({
            type: 'delete_transaction',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'add_transaction',
            payload: transaction
        });
    }

    return(
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    );
}