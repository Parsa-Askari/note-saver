import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { useEffect , useState,useContext} from "react";
import { GetNote } from "../hooks/EditorHooks";
import { ReloaderContext } from "../contexts/ReloaderContext";
import EditorTopMenuBtn from "../components/UI/EditorTopMenuBtn";
import "./styles/Editor.scss"
function TopMenu()
{

    return(
        <div className="top-menu">
            <div className="main-menu">
                <EditorTopMenuBtn id={"save"} icon={"fa-floppy-o"} 
                                    name={"Save"} border={"r"}/>
                <EditorTopMenuBtn id={"home"} icon={"fa-home"} 
                                    name={"Home"} border={"r"}/>
            </div>
            <div className="dynamic-menu">
                <div className="desktop d-none d-sm-flex">
                    <EditorTopMenuBtn id={"Code"} icon={"fa-code"} 
                                        name={"Code"} border={"l"}/>
                    <EditorTopMenuBtn id={"text"} icon={"fa-text-width"} 
                                        name={"Text"} border={"l"}/>
                    <EditorTopMenuBtn id={"image"} icon={"fa-picture-o"} 
                                        name={"Image"} border={"l"}/>
                </div>
                <div className="mobile d-sm-none d-flex ">
                    <EditorTopMenuBtn id={"dote"} 
                        icon={"fa-ellipsis-v"} 
                        name={"Dote"} 
                        border={"n"}/>
                </div>
            </div>
        </div>
    )
}
function NotesMenu()
{
    const [mousePosition,setMousePosition]=useState({x:20,y:70})
    const style={
        position: 'absolute',
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`
    }
    
    return(
        <div className="notes-menu" style={style}>
            <div className="notes-menu__header">
                <EditorTopMenuBtn id={"dote"} 
                            icon={"fa fa-minus"} 
                            name={""} 
                            border={"n"}/>
            </div>
            <div className="notes-menu__body">
                <div className="notes-menu__note mb-1">
                    <div className="grab">
                        <FontAwesomeIcon icon={faGrip} size="sm"/>
                    </div>
                    <span>hello</span>
                </div>
                <div className="notes-menu__note mb-1">
                    <span>span</span>
                </div>
                <div className="notes-menu__note mb-1">
                    <span>parsa</span>
                </div>
            </div>
        </div>
    )
}
function Editor()
{
    const {topic_id,note_id}=useParams();
    const{reload} = useContext(ReloaderContext)
    GetNote(reload);
    return(
        <main className="container-fluid">
            <div className="row justify-content-center mt-2">
                <div className="col-8">
                    <TopMenu />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-1">
                    <NotesMenu />  
                </div>
                <div className="col-10">2</div>
                <div className="col-1">3</div>
            </div>
        </main>
    )

}
export default Editor;