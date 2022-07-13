import './styles.scss'
import {FaRegArrowAltCircleDown,
        FaRegArrowAltCircleUp,
        FaTrash,
} from "react-icons/fa";

function BrowserHistoryItem({ item, onDelete}){
    return(
        <div className='history-main'>
            <div className='to-main'>
                <table>
                    <tbody>
                        <td>{item.desc}</td>
                        <td>{item.amount}</td>
                        <td>{item.expense ? (
                            <FaRegArrowAltCircleDown color="red"/>
                        ) : (
                            <FaRegArrowAltCircleUp color="green"/>
                            )} 
                        </td>
                        <td id='trash'>
                            <FaTrash onClick={() => onDelete(item.id)} />
                        </td>
                    </tbody>
                </table>
            </div>
                
        </div>
    )
}

export default BrowserHistoryItem