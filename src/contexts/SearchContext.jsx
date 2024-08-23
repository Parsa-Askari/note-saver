import { createContext } from "react";
import { useState } from "react";
const SearchContext=createContext("");
function SearchContextProvider(props)
{
    const[searchValue,setSearchValue]=useState("");
    const saveSearchValue= (event)=>{
        const value=event.target.value
        setSearchValue(value)
    }
    const clearSearchValue=(event)=>{
        setSearchValue("")
    }
    return(
        <SearchContext.Provider value={{searchValue,saveSearchValue,clearSearchValue}}>
            {props.children}
        </SearchContext.Provider>
    )
}
export {SearchContext};
export default SearchContextProvider;