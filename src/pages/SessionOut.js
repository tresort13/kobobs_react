import React , {useRef} from 'react';
import IdleTimer from 'react-idle-timer'


function SessionOut()
{
 const idleTimerRef = useRef(null)
 const logout = ()=>
 {
   window.localStorage.setItem("username", JSON.stringify(""))
   navigate('/')
 }

 return (
     <>
     <IdleTimer ref={idleTimerRef} timeout={5000} onIdle={logout}></IdleTimer>
     </>
     
 )
}

export default SessionOut