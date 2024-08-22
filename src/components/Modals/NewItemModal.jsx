import "../styles/NewTopicModal.scss"
import { useState } from "react";

function NewItemModal({value,handleSumbit,handleChange,name})
{
    return(
        <div className="modal fade" id="addNewItem" tabIndex="2" aria-labelledby="addNewTopicLable" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 
                            className="modal-title" 
                            id="exampleModalLabel"
                            >
                            Add A New {name}
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
                                    Write A Name For Your {name} 
                                </label>
                                <input 
                                    onChange={handleChange}
                                    type="text" 
                                    value={value}
                                    className="form-control" 
                                    id="topic-name" />
                            </div>
                            <div className="mb-3">
                                <span style={{color:"red"}}>NOTE : </span>
                                Your {name} Name Should Be Less Than 80 Characters
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button 
                            onClick={handleSumbit}
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
export default NewItemModal;