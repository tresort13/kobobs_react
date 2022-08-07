import React,{ useEffect } from 'react';
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import Homepage from './pages/Homepage';
import {Navigate} from  'react-router-dom';
import  './pages/Assets.css';
import MenuEnvoi from './pages/MenuEnvoi';
import MenuRetrait from './pages/MenuRetrait';
import MenuGestionOperation from './pages/MenuGestionOperation';
import MenuParametre from './pages/MenuParametre';
import MenuUsers from './pages/MenuUsers';
import MenuAbonne from './pages/MenuAbonne';
import FormEnvoiClient from './pages/FormEnvoiClient';
import FormEnvoiAbonneId from './pages/FormEnvoiAbonneId';
import FormEnvoiAbonne from './pages/FormEnvoiAbonne';



const useState = React.useState

function App() {

  const [username,setUsername] = useState(()=>
  {
    const localData = localStorage.getItem('username');
    return localData ? JSON.parse(localData) : "";
  });
  
  

  useEffect(() => {
    window.localStorage.setItem("username", JSON.stringify(username))
  }, [username])

  
  const[temps,setTemps] = useState(()=>
    {
      const localData = localStorage.getItem('temps');
   return localData ? JSON.parse(localData) : "";})

   useEffect(() => {
    window.localStorage.setItem("temps", JSON.stringify(temps))
  }, [temps])


    
    
  

  return ( 
    <BrowserRouter>
      <Routes >
        
         <Route path="/"  element={<Login  setUsername = {setUsername} />} >
        </Route>

        

        <Route path="/home"  element={username == "" ? <Navigate to ='/' /> : <Homepage username = {username} setUsername = {setUsername}/>} >
        </Route>

        <Route path="/menu_envoie" element={username == "" ? <Navigate to ='/' /> :<MenuEnvoi username = {username}/>} >
        </Route>

        <Route path="/menu_retrait" element={username == "" ? <Navigate to ='/' /> :<MenuRetrait username = {username}/>} >
        </Route>

        <Route path="/menu_gestion_operation" element={username == "" ? <Navigate to ='/' /> :<MenuGestionOperation username = {username}/>} >
        </Route>

        <Route path="/menu_gestion_abonne" element={username == "" ? <Navigate to ='/' /> :<MenuAbonne username = {username}/>} >
        </Route>

        <Route path="/menu_parametre" element={username == "" ? <Navigate to ='/' /> :<MenuParametre username = {username}/>} >
        </Route>

        <Route path="/menu_users" element={username == "" ? <Navigate to ='/' /> :<MenuUsers username = {username}/>} >
        </Route>

        <Route path="/form_envoie_client" element={username == "" ? <Navigate to ='/' /> :<FormEnvoiClient username = {username}/>} >
        </Route>

        <Route path="/form_envoie_abonne_id" element={username == "" ? <Navigate to ='/' /> :<FormEnvoiAbonneId username = {username}/>} >
        </Route>
        <Route path="/form_envoie_abonne" element={username == "" ? <Navigate to ='/' /> :<FormEnvoiAbonne username = {username}/>} >
        </Route>
        

      </Routes >
    </BrowserRouter>
  );
}

export default App;

