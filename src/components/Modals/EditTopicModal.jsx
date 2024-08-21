import "../styles/EditTopicModal.scss"
import { handleTopicButtons ,handleChange} from "../../hooks/TopicsHooks";
import { useContext ,useState} from "react";
import { ReloaderContext } from "../../contexts/ReloaderContext";
import { truncateString } from "../../helpers/utils";
function EditTopicModal({topic_name,topic_id})
{
    const[topicName,setTopicName]=useState(topic_name)
    const{setReload}=useContext(ReloaderContext)
    return(
        <div className="modal fade EditTopicModal" id={"EditTopicModal"+topic_id} tabIndex="2" aria-labelledby="EditTopicModalable" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 
                            className="modal-title" 
                            id="exampleModalLabel"
                            >
                            <p>{truncateString(topic_name,15)}</p>
                        </h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                            >
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label 
                                    htmlFor="topic-name" 
                                    className="col-form-label">
                                    Write A New Name For Your Topic 
                                </label>
                                <input 
                                    onChange={(event)=>handleChange(event,setTopicName)}
                                    type="text" 
                                    value={topicName}
                                    className="form-control" 
                                    id="topic-name" />
                            </div>
                            <div className="mb-3">
                                <span style={{color:"red"}}>NOTE : </span>
                                Your Topic Name Should Be Less Than 80 Characters
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button 
                            onClick={(event)=>handleTopicButtons(event,setReload)}
                            type="submit" 
                            data-bs-dismiss="modal"
                            className="btn btn-success">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditTopicModal;