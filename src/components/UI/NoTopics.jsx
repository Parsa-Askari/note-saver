import { memo } from "react"
import "../styles/Notopics.scss"
function Notopics()
{
    return(
        <>
            <div className="col-3"></div>
            <div className="no-topics col-6 mt-5">
                <h3 className="text d-none d-sm-block text-center">
                    No Topics Created
                </h3>
                <h5 className="text d-sm-none d-block text-center">
                    No Topics Created
                </h5>
            </div>
            <div className="col-3"></div>
        </>
        
    )
}
export default memo(Notopics)