import React , {useRef} from 'react';
import { useIdleTimer } from 'react-idle-timer'

function SessionOut()
{
 const idleTimerRef = useRef(null)
 const logout = ()=>
 {
   window.localStorage.setItem("username", JSON.stringify("")) 
   window.localStorage.setItem("isAdmin", JSON.stringify(false))  
   navigate('/')
 }

 return (
     <>
     <IdleTimer ref={idleTimerRef} timeout={5000} onIdle={logout} />
     </>
     
 )
}

export default SessionOut