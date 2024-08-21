import "../styles/DeleteTopicModal.scss"
import { useState } from "react";
import { handleTopicButtons } from "../../hooks/TopicsHooks";
import { useContext } from "react";
import { ReloaderContext } from "../../contexts/ReloaderContext";
function DeleteTopicModal({topic_name,topic_id})
{
    const {reload,setReload}=useContext(ReloaderContext)
    return(
        <div className="modal fade DeleteTopicModal" id={"DeleteTopicModal"+topic_id} tabIndex="2" aria-labelledby="DeleteTopicModalLable" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 
                            className="modal-title" 
                            id="exampleModalLabel"
                            >
                            WARNING
                        </h5>
                    </div>
                    <div className="modal-body">
                        <h4>Are You Sure You Want To Remove This Topic ?</h4>
                        <h5 >"{topic_name}"</h5>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="submit" 
                            data-bs-dismiss="modal"
                            id="delete-topic"
                            onClick={(event)=>handleTopicButtons(event,setReload,topic_id)}
                            className="btn btn-success">
                            Delete
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            data-bs-dismiss="modal" 
                            aria-label="Close">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteTopicModal;