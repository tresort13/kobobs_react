import React , {useRef} from 'react';
import { useIdleTimer }  from 'react-idle-timer'
import { useNavigate} from "react-router-dom";




function SessionOut()
{
 const idleTimerRef = useRef(null)
 const navigate = useNavigate()
 
 const logout = ()=>
 {
   window.localStorage.setItem("username", JSON.stringify("")) 
   window.localStorage.setItem("isAdmin", JSON.stringify(false))  
   navigate('/')
 }

 
 const idleTimer = useIdleTimer({
    crossTab: true,
    timeout: 5 * 1000,
    ref: idleTimerRef,
    onIdle:logout
  })
 
 return (
     <idleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={logout}></idleTimer>
     
 )
}

export default SessionOut