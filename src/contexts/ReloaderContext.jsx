import { createContext } from "react";
import { useState } from "react";
const ReloaderContext=createContext("");
function ReloaderContextProvider(props)
{
    const[reload,setReload]=useState(false);

    return(
        <ReloaderContext.Provider value={{reload,setReload}}>
            {props.children}
        </ReloaderContext.Provider>
    )
}
export {ReloaderContext};
export default ReloaderContextProvider;