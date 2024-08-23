import "../styles/EditTopicModal.scss"

import {  useState} from "react";
import { truncateString } from "../../helpers/utils";
function EditTopicModal(props)
{
    
    return(
        <div className="modal fade EditTopicModal" 
            id={"EditTopicModal"+props.item_id} 
            tabIndex="2" 
            aria-labelledby="EditTopicModalable" 
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 
                            className="modal-title" 
                            id="exampleModalLabel"
                            >
                            <p>{truncateString(props.item_name,15)}</p>
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
                                    Write A New Name For Your {props.item} 
                                </label>
                                <input 
                                    onChange={props.handleChange}
                                    type="text" 
                                    value={props.new_item_name}
                                    className="form-control" 
                                    id="topic-name" />
                            </div>
                            <div className="mb-3">
                                <span style={{color:"red"}}>NOTE : </span>
                                Your {props.item} Name Should Be Less Than 80 Characters
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button 
                            onClick={props.handleItemButtons}
                            type="submit" 
                            data-bs-dismiss="modal"
                            id="edit-item"
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