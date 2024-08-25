import { useEffect } from "react"

const GetNote=(reload)=>{
    useEffect(()=>{
        document.body.style.backgroundColor = "#806AE2";
    },[reload])
}
export {GetNote}