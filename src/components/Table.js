import React, { useEffect, useState } from "react";

const Table = () => {

    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Decsription</th>
                    <th>Category</th>
                    <th>Amount</th>
                    </tr>  
                </thead>
                <tbody>
                 < Transaction />
                </tbody>
            </table> 
        </>
    )
}

export default Table;

function Transaction() {
    const [transactions, setTransactions] = useState([])
    
    useEffect(() => {
      const fetchTransactions = async ()=>{
        const result = await fetch("http://localhost:8001/transactions")
        const resultJson = await result.json();
    
        setTransactions(resultJson)
      }
      fetchTransactions();
    },[])
  
    return (
      transactions.map(transaction =>
        <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
        </tr>
      )
    )}
  