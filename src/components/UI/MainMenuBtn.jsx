import { memo } from "react"
import "../styles/MainMenuBtn.scss"
function MainMenuBtn({btnClass,optionText,id})
{
    return(
        <div className={btnClass} id={id}>
            <div className="menu-option">
                <h1 className="d-none d-xl-block">{optionText}</h1>
                <h2 className="d-none d-md-block d-xl-none">{optionText}</h2>
                <p className="d-sm-block d-md-none">{optionText}</p>
            </div>
        </div>
    )
}
export default memo(MainMenuBtn)