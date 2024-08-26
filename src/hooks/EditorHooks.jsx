import { useEffect } from "react"

const GetNote=(reload)=>{
    useEffect(()=>{
        document.body.style.backgroundColor = "#806AE2";
    },[reload])
}
const handleMenuMovement=(event,menuIsGrabed,setMousePosition)=>{
    if(menuIsGrabed)
    {
        // console.log("moved")
        setMousePosition({x:event.clientX-100,y:event.clientY-50})
    }
}
const handleMenuGrab=(event,setMenuIsGrabed)=>{
    const c=event.target.closest(".notes-menu");
    if(c)
    {
        // console.log("held")
        setMenuIsGrabed(true)
    }
    
}
const handleMenuRelease=(event,setMenuIsGrabed)=>{
    // console.log("released")
    setMenuIsGrabed(false)
}
export {GetNote,handleMenuMovement,handleMenuGrab,handleMenuRelease}