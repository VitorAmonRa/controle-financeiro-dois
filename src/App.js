import React from "react";
import { useState, useEffect } from "react";
import Header from './components/Header/index'
import Resume from './components/Resume';
import Forms from './components/Forms';
import BrowserHistory from './components/BrowserHistory';

function App() {
    const data = localStorage.getItem("transaction");
    const [transactionlist, setTransactionList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionlist.filter((item) => item.expense).map((transaction) => Number(transaction.amount));

        const amountIncome = transactionlist.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce ((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce ((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total} `);
    }, [transactionlist]);

    const handleAdd = (transaction) => {
        const newArrayTransaction = [...transactionlist, transaction];

        setTransactionList(newArrayTransaction);

        localStorage.setItem("transactions" , JSON.stringify(newArrayTransaction));
    };

    return(
        <div className="app">
            <Header/>
            <Resume income={income} expense={expense} total={total} />
            <Forms handleAdd={handleAdd} transactionlist={transactionlist} setTransactionList={setTransactionList} />
        </div>
    )
}
export default App;