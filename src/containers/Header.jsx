import "./styles/Header.scss"
import { memo } from "react";
function Header({children})
{
    return(
        <header>
            <div className="menu-bar row ">
                {children}
            </div>
        </header>
    )
}
export default memo(Header);