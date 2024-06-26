import './Header.css'
import Select from '../Select/Select'
function Header({onOptionChange}){
    return(
        <>
        <div>
        <h1>Top News Headlines</h1>
        </div>
        <div>
           <Select onOptionChange={onOptionChange}/>
        </div>
        </>
    )
}
export default Header