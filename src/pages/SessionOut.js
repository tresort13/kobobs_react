import React , {useRef} from 'react';
import { useNavigate} from "react-router-dom";




function SessionOut()
{
 const idleTimerRef = useRef(null)
 const navigate = useNavigate()
 
 const logout = ()=>
 {
   console.log("you out boy")
   window.localStorage.setItem("username", JSON.stringify("")) 
   window.localStorage.setItem("isAdmin", JSON.stringify(false))  
   navigate('/')
 }

 
 
 
 return (
     <div>
     <idleTimer ref={idleTimerRef} timeout={ 10 * 1000 } onIdle={logout} ></idleTimer>
     </div>

     
 )
}

export default SessionOut