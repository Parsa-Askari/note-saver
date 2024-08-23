import "../styles/SearchBar.scss"
import { useRef ,useContext} from "react";
import { SearchContext } from "../../contexts/SearchContext";
function SearchBar()
{
    const searchRef = useRef(null);
    const {searchValue,saveSearchValue}=useContext(SearchContext)
    
    const handleEnter=(event)=>{
        if(event.key=="Enter")
        {
            console.log(1)
            searchRef.current.blur()   
        }
    }
    return(
        <>
            <div className='col-3'></div>
            <div className="search col-6" onKeyDown={handleEnter} >
                <span className="fa fa-search" aria-hidden="true"></span>
                <input type="text" value={searchValue} onChange={saveSearchValue} placeholder="Search" ref={searchRef}></input>
            </div>
            <div className='col-3'></div>
        </>
        
    )
}
export default SearchBar;