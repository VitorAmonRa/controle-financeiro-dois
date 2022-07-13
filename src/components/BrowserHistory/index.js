import './styles.scss'
import BrowserHistoryItem from '../BrowserHistoryItem';
import {FaTrash} from 'react-icons/fa'

function BrowserHistory({ itens, setItens}){
    const onDelete = (ID) =>{
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    }
    return(
        <div className='browser-history'>
             <div className='main'>
                <table>
                    <thead> 
                        <td>Descrição</td>
                        <td >Valor</td>
                        <td>Tipo</td>
                        <td> <FaTrash size={20} /> </td>
                    </thead>
                </table>
                        {itens?.map((item, index) => (
                            <BrowserHistoryItem key={index} item={item} onDelete={onDelete} />
                        ))}
             </div>
        </div>
    )
}

export default BrowserHistory;