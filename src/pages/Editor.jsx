import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons';
import { useEffect , useState,useContext} from "react";
import { GetNote,handleMenuMovement,handleMenuGrab,handleMenuRelease} from "../hooks/EditorHooks";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ReloaderContext } from "../contexts/ReloaderContext";
import EditorTopMenuBtn from "../components/UI/EditorTopMenuBtn";
import NoteMenuBtn from "../components/UI/NoteMenuBtn";
import EditorItem from "../components/EditorItem";
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
                    <EditorTopMenuBtn id={"heading"} icon={"fa-header"} 
                                        name={"Heading"} border={"l"}/>
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
function NotesMenu(props)
{ 
    const style={
        position: 'absolute',
        left: `${props.mousePosition.x}px`,
        top: `${props.mousePosition.y}px`
    }
    return(
        <div className="notes-menu" style={style} >
            <div className="notes-menu__header">
                <EditorTopMenuBtn id={"dote"} 
                            icon={"fa fa-minus"} 
                            name={""} 
                            border={"n"}/>
                <div className="grab-menu" onMouseDown={props.handleMenuGrab}>
                    <FontAwesomeIcon icon={faGrip} size="sm"/>
                </div>
            </div>
            <div className="notes-menu__body">
                <NoteMenuBtn name={"part1"} id={"1"}/>
                <NoteMenuBtn name={"part2"} id={"2"}/>
                <NoteMenuBtn name={"part3"} id={"3"}/>
                <NoteMenuBtn name={"part4"} id={"4"}/>
            </div>
        </div>
    )
}
function Editor()
{
    const {topic_id,note_id}=useParams();
    const [mousePosition,setMousePosition]=useState({x:20,y:300})
    const [menuIsGrabed,setMenuIsGrabed]=useState(false)  
    const{reload} = useContext(ReloaderContext)
    const [editsList,setEditsList]=useState([
                                            {"type":"text","id":1},
                                            {"type":"text","id":2},
                                            {"type":"heading","id":3}])
    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(editsList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setEditsList(items);
    };
    GetNote(reload);
    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <main 
                className="container-fluid" 
                onMouseMove={(event)=>handleMenuMovement(event,menuIsGrabed,setMousePosition)} 
                onMouseUp={(event)=>handleMenuRelease(event,setMenuIsGrabed)}>
                <div className="row justify-content-center mt-2">
                    <div className="col-8">
                        <TopMenu />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-2">
                        <NotesMenu 
                            mousePosition={mousePosition}
                            handleMenuGrab={(event)=>handleMenuGrab(event,setMenuIsGrabed)}
                        />  
                    </div>
                    <Droppable droppableId="edits">
                        {(provided)=>(
                            <div className="col-8" 
                            ref={provided.innerRef} {...provided.droppableProps}>
                                {editsList.map((item,index)=>(
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id.toString()}
                                        index={index}
                                        >
                                        {(provided)=>(
                                            <EditorItem
                                                key={index}
                                                provided={provided}
                                                type={item['type']} 
                                                id={item['id']}/> 
                                        )}
                                    </Draggable>                                          
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <div className="col-2">3</div>
                </div>
            </main>
        </DragDropContext>
    )

}
export default Editor;