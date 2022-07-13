import Resumeitem from '../ResumeItens';
import './styles.scss';
import {FaRegArrowAltCircleDown,
        FaRegArrowAltCircleUp,
        FaRegArrowAltCircleRight} 
from 'react-icons/fa'

function Resume({income, expense, total}){
    return(
    <div className='resume'>
        <Resumeitem title="Entrada" Icon={FaRegArrowAltCircleUp} value={income}/>
        <Resumeitem title="Saida"  Icon={FaRegArrowAltCircleDown} value={expense}/>
        <Resumeitem title="Total" Icon={FaRegArrowAltCircleRight} value={total}/>
    </div>
    )
}
    
export default Resume;