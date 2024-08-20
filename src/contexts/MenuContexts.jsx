import { createContext , useContext} from "react";
import { useState } from "react";
const MenuContext=createContext("");
function MenuContextProvider(props)
{
    const[btnClass,setBtnClass]=useState("")
    const[menuClass,setMenuClass]=useState("")
    function handleMenuClick()
    {
        
        if(btnClass=="")
        {

            setBtnClass("openMenu")
            setMenuClass("showMenu")
        }
        else{
            setBtnClass("")
            setMenuClass("")
        }
    }
    return(
        <MenuContext.Provider value={{btnClass,menuClass,handleMenuClick}}>
            {props.children}
        </MenuContext.Provider>
    )
}
export {MenuContext};
export default MenuContextProvider;