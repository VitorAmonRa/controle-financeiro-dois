import './styles.scss'
import { useState } from 'react';
import BrowserHistory from '../BrowserHistory';


function Forms( {handleAdd, transactionlist,  setTransactionList}){
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setExpense] = useState('');

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () =>{
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        }else if(amount < 1){
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

    return(
        <div className='forms-main'>
            <div className='form-description'>
                <span>Descrição</span>
                <input value={desc} onChange={(e) => setDesc(e.target.value)}/> 
            </div>
            <div className='form-description'>
                <span id='children'>Valor</span>
                <input id='children'type={'number'} value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <div className='form-choose'>
                <input type={'radio'} name='select' id='choose' defaultChecked onChange={() => setExpense(!isExpense)}/>
                <span >Entradas</span>
                <input type={'radio'} name='select' id='choose' onChange={() => setExpense(!isExpense)}/>
                <span>Saida</span>
            </div>
            <div className='form-button'>
                <button onClick={handleSave}>Adicionar</button>
            </div>
            <BrowserHistory itens={transactionlist} setItens={setTransactionList} />
        </div>
    )
}

export default Forms;