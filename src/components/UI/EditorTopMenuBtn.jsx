import { memo } from "react";
import "../styles/EditorTopMenuBtn.scss"
function EditorTopMenuBtn(props)
{
    return(
        <div className="d-flex align-items-center">
            {
                props.border=="l" ? (
                    <div className="left-menu-border"></div>
                ) : null
            }
            <div className="top-menu-items" id={props.id}>
                <i className={`fa ${props.icon}`} aria-hidden="true"></i>
                <span className={props.id}>{props.name}</span>
            </div>
            {
                props.border=="r" ? (
                    <div className="right-menu-border"></div>
                ) : null
            }
            
        </div>
        
        
    )
}
export default memo(EditorTopMenuBtn)