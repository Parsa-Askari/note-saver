import { createContext } from "react";
import { useState } from "react";
const NoteWindowContext=createContext("");
function NoteWindowContextProvider(props)
{
    const[displayedNoteName,setdisplayedNoteName]=useState(false);
    const handleWindowDisplay = (event)=>{
        const name=event.target.closest('.note').getAttribute('name');
        setdisplayedNoteName(name)
    }
    return(
        <NoteWindowContext.Provider value={{displayedNoteName,handleWindowDisplay}}>
            {props.children}
        </NoteWindowContext.Provider>
    )
}
export {NoteWindowContext};
export default NoteWindowContextProvider;