import { cuteToast } from "cute-alert"
const toast = (type,title,msg,timer=5000)=>{
    cuteToast({
        type: type,
        title: title,
        description: msg,
        timer: timer
    })
}
export {toast}