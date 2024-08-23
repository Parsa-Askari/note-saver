import "../styles/DeleteTopicModal.scss"

function DeleteTopicModal(props)
{
    
    return(
        <div className="modal fade DeleteTopicModal" 
            id={"DeleteTopicModal"+props.item_id}
            tabIndex="2" 
            aria-labelledby="DeleteTopicModalLable" 
            aria-hidden="true">
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
                        <h4>Are You Sure You Want To Remove This {props.item} ?</h4>
                        <h5 >"{props.item_name}"</h5>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="submit" 
                            data-bs-dismiss="modal"
                            id="delete-item"
                            onClick={props.handleItemButtons}
                            className="btn btn-danger">
                            Delete
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
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