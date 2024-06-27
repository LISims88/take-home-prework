import './Header.css'
import Select from '../Select/Select'
function Header({onOptionChange}){
    return(
        <div className='header'>
            <div>
            <h1>Top News Headlines Today</h1>
            </div>
            <div>
            <Select onOptionChange={onOptionChange}/>
            </div>
        </div>
    )
}
export default Header