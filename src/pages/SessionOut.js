import React , {useRef} from 'react';
import { useNavigate} from "react-router-dom";
import {useIdleTimer} from 'react-idle-timer'



function SessionOut()
{
 const navigate = useNavigate()
 
 const logout = ()=>
 {
   console.log("you out boy")
   window.localStorage.setItem("username", JSON.stringify("")) 
   window.localStorage.setItem("isAdmin",false)  
   navigate('/')
 }

 const idleTimer = useIdleTimer({
 timeout : 5 * 1000,
 onIdle : logout
 })
}


export default SessionOut