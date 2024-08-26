import { memo } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import "../styles/NoteMenuBtn.scss"
function NoteMenuBtn(props)
{
    return(
        <div className="notes-menu__note mb-1" id={`menu-btn__${props.id}`}>
            <div className="grab">
                <FontAwesomeIcon icon={faGrip} size="sm"/>
            </div>
            <span>{props.name}</span>
        </div>
    )
    
}
export default NoteMenuBtn