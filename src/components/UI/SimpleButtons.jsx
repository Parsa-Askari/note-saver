import "../styles/SimpleButtons.scss"
const stopbuble=(event)=>{
    // event.stopPropagation();
}
function EditBtn({id,dataBsToggle,dataBsTarget})
{
    
    return(
        <div 
            className='btn btn-success edit'
            id={id} 
            onClick={stopbuble}
            data-bs-toggle={dataBsToggle}
            data-bs-target={dataBsTarget}>
            <i className="fa fa-pencil-square-o"></i>
        </div>
                            
    )
}
function DeleteBtn({id,dataBsToggle,dataBsTarget})
{
    return(
        <div 
            className='btn btn-danger delete' 
            id={id} 
            onClick={stopbuble}
            data-bs-toggle={dataBsToggle}
            data-bs-target={dataBsTarget}>
            <i className="fa fa-trash" ></i>
        </div>
    )
}
export {EditBtn,DeleteBtn};