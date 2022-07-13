import './styles.scss';

function Resumeitem({title, Icon, value}){
    return(
    <div className='main-resume'> 
        <div className='resume-header'>{title} <Icon size={28}/></div>
        <div className='resume-valor'>{value}</div>
    </div>
   
    )
}

export default Resumeitem;