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
import EnvoiInfo from './pages/EnvoiInfo';
import EnvoieAbonneInfo from './pages/EnvoieAbonneInfo';
import FormRetrait from './pages/FormRetrait';
import RetraitInfo from './pages/RetraitInfo';
import AbonneFormNonValideInfo from './pages/AbonneFormNonValideInfo';
import FormRetrouverCodeAbonne from './pages/FormRetrouverCodeAbonne';
import AbonneCodeInfo from './pages/AbonneCodeInfo';
import ConfirmationEnvoieInfo from './pages/ConfirmationEnvoieInfo';
import ConfirmationRetraitInfo from './pages/ConfirmationRetraitInfo';



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

  const [taux,setTaux] = useState(()=>
  {
    const localData = localStorage.getItem('taux');
    return localData ? JSON.parse(localData) : "";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("taux", JSON.stringify(taux))
  }, [taux])

  const [codeRetraitStatus,setCodeRetraitStatus] = useState(0)


  const [envoie,setEnvoie] = useState(()=>
  {
    const localData = localStorage.getItem('envoie');
    return localData ? JSON.parse(localData) : {infoEnvoie :{
      nom_expediteur : '',
      postnom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : '',
      nom_beneficiaire : '',
      postnom_beneficiaire : '',
      prenom_beneficiaire : '',
      adresse_beneficiaire : '',
      numero_beneficiaire : '',
      pays_beneficiaire : '',
      montant_beneficiaire : '',
      montant_pour_payer :'',
      frais_envoie : '',
      frais_tva : '',
      type_service : '',
      code_abonne : ''
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("envoie", JSON.stringify(envoie))
  }, [envoie])

  const dataEnvoie = (donne)=>
  {
    setEnvoie({infoEnvoie :{
      nom_expediteur : donne.nom_expediteur,
      postnom_expediteur :donne.postnom_expediteur,
      prenom_expediteur : donne.prenom_expediteur,
      adresse_expediteur : donne.adresse_expediteur,
      email_expediteur : donne.email_expediteur,
      numero_expediteur: donne.numero_expediteur,
      pays_expediteur : donne.pays_expediteur,
      nom_beneficiaire : donne.nom_beneficiaire,
      postnom_beneficiaire : donne.postnom_beneficiaire,
      prenom_beneficiaire : donne.prenom_beneficiaire,
      adresse_beneficiaire :donne.adresse_beneficiaire,
      numero_beneficiaire : donne.numero_beneficiaire,
      pays_beneficiaire : donne.pays_beneficiaire,
      montant_beneficiaire : donne.montant_beneficiaire,
      montant_pour_payer : (Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) + ((Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 5)/100 + ((Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 1)/100,
      frais_envoie : ((Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 5)/100,
      frais_tva : ((Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 1)/100,
      type_service : donne.type_service,
      code_abonne : ''
      }})
  }


  const [envoie2,setEnvoie2] = useState(()=>
  {
    const localData = localStorage.getItem('envoie2');
    return localData ? JSON.parse(localData) : {infoEnvoie :{
      nom_expediteur : '',
      postnom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : '',
      nom_beneficiaire : '',
      postnom_beneficiaire : '',
      prenom_beneficiaire : '',
      adresse_beneficiaire : '',
      numero_beneficiaire : '',
      pays_beneficiaire : '',
      montant_beneficiaire : '',
      type_service : '',
      frais_envoie : '',
      montant_total : '',
      code_retrait : '',
      data_operation : '',
      date_heure_operation : '',
      code_abonne : '',
      status_retrait : ''
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("envoie2", JSON.stringify(envoie2))
  }, [envoie2])

  const dataEnvoie2 = (donne)=>
  {
    setEnvoie2({infoEnvoie :{
      nom_expediteur : donne[0].nom_expediteur,
      postnom_expediteur :donne[0].postnom_expediteur,
      prenom_expediteur : donne[0].prenom_expediteur,
      adresse_expediteur : donne[0].adresse_expediteur,
      email_expediteur : donne[0].email_expediteur,
      numero_expediteur: donne[0].numero_expediteur,
      pays_expediteur : donne[0].pays_expediteur,
      nom_beneficiaire : donne[0].nom_beneficiaire,
      postnom_beneficiaire : donne[0].postnom_beneficiaire,
      prenom_beneficiaire : donne[0].prenom_beneficiaire,
      adresse_beneficiaire :donne[0].adresse_beneficiaire,
      numero_beneficiaire : donne[0].numero_beneficiaire,
      pays_beneficiaire : donne[0].pays_beneficiaire,
      montant_envoie_sans_frais : donne[0].montant_envoie_sans_frais,
      montant_beneficiaire : donne[0].montant_beneficiaire,
      type_service : donne[0].type_service,
      frais_envoie : donne[0].frais_envoie,
      frais_tva : donne[0].frais_tva,
      montant_total : donne[0].montant_total,
      code_retrait : donne[0].code_retrait,
      data_operation : donne[0].date_operation,
      date_heure_operation : donne[0].date_heure_operation,
      code_abonne : donne[0].code_abonne,
      status_retrait : donne[0].status_retrait
      }})
  }

  const [envoie3,setEnvoie3] = useState(()=>
  {
    const localData = localStorage.getItem('envoie3');
    return localData ? JSON.parse(localData) : {infoEnvoie :{
      nom_expediteur : '',
      postnom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : '',
      nom_beneficiaire : '',
      postnom_beneficiaire : '',
      prenom_beneficiaire : '',
      adresse_beneficiaire : '',
      numero_beneficiaire : '',
      pays_beneficiaire : '',
      montant_envoie_sans_frais : '',
      montant_beneficiaire : '',
      type_service : '',
      frais_envoie : '',
      frais_tva : '',
      montant_total : '',
      code_retrait : '',
      data_operation : '',
      date_heure_operation : '',
      code_abonne : '',
      status_retrait : ''
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("envoie3", JSON.stringify(envoie3))
  }, [envoie3])

  const dataEnvoie3 = (donne)=>
  {
    setEnvoie3({infoEnvoie :{
      nom_expediteur : donne.nom_expediteur,
      postnom_expediteur :donne.postnom_expediteur,
      prenom_expediteur : donne.prenom_expediteur,
      adresse_expediteur : donne.adresse_expediteur,
      email_expediteur : donne.email_expediteur,
      numero_expediteur: donne.numero_expediteur,
      pays_expediteur : donne.pays_expediteur,
      nom_beneficiaire : donne.nom_beneficiaire,
      postnom_beneficiaire : donne.postnom_beneficiaire,
      prenom_beneficiaire : donne.prenom_beneficiaire,
      adresse_beneficiaire :donne.adresse_beneficiaire,
      numero_beneficiaire : donne.numero_beneficiaire,
      pays_beneficiaire : donne.pays_beneficiaire,
      montant_beneficiaire : donne.montant_beneficiaire,
      type_service : donne.type_service,
      frais_envoie : donne.frais_envoie,
      montant_total : donne.montant_total,
      code_retrait : donne.code_retrait,
      data_operation : donne.date_operation,
      date_heure_operation : donne.date_heure_operation,
      code_abonne : donne.code_abonne,
      status_retrait : donne.status_retrait
      }})
  }



  const [abonne,setAbonne] = useState(()=>
  {
    const localData = localStorage.getItem('abonne');
    return localData ? JSON.parse(localData) : {infoAbonne :{
      nom_expediteur : '',
      postnom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : '',
      code_abonne : ''
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("abonne", JSON.stringify(abonne))
  }, [abonne])

  const dataAbonne = (donne)=>
  {
    setAbonne({infoAbonne : {
      nom_expediteur : donne[0].nom_expediteur,
      postnom_expediteur :donne[0].postnom_expediteur,
      prenom_expediteur : donne[0].prenom_expediteur,
      adresse_expediteur : donne[0].adresse_expediteur,
      email_expediteur : donne[0].email_expediteur,
      numero_expediteur: donne[0].numero_expediteur,
      pays_expediteur : donne[0].pays_expediteur,
      code_abonne : donne[0].code_abonne
      }})
  }

  const dataEnvoieAbonne = (donne1,donne2)=>
  {
    setEnvoie({infoEnvoie :{
      nom_expediteur : donne1.infoAbonne.nom_expediteur,
      postnom_expediteur :donne1.infoAbonne.postnom_expediteur,
      prenom_expediteur : donne1.infoAbonne.prenom_expediteur,
      adresse_expediteur : donne1.infoAbonne.adresse_expediteur,
      email_expediteur : donne1.infoAbonne.email_expediteur,
      numero_expediteur: donne1.infoAbonne.numero_expediteur,
      pays_expediteur : donne1.infoAbonne.pays_expediteur,
      nom_beneficiaire : donne2.nom_beneficiaire,
      postnom_beneficiaire : donne2.postnom_beneficiaire,
      prenom_beneficiaire : donne2.prenom_beneficiaire,
      adresse_beneficiaire :donne2.adresse_beneficiaire,
      numero_beneficiaire : donne2.numero_beneficiaire,
      pays_beneficiaire : donne2.pays_beneficiaire,
      montant_beneficiaire : donne2.montant_beneficiaire,
      montant_pour_payer : donne2.montant_pour_payer,
      type_service : donne2.type_service,
      code_abonne : donne1.infoAbonne.code_abonne
      }})
  }
 
  

  const [abonneInfo,setAbonneInfo] = useState(()=>
  {
    const localData = localStorage.getItem('abonneInfo');
    return localData ? JSON.parse(localData) : {infoAbonne :{
      nom_expediteur : '',
      postnom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : '',
      code_abonne : ''
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("abonneInfo", JSON.stringify(abonneInfo))
  }, [abonneInfo])

  const dataAbonneInfo = (donne)=>
  {
    setAbonneInfo({infoAbonne : {
      nom_expediteur : donne[0].nom_expediteur,
      postnom_expediteur :donne[0].postnom_expediteur,
      prenom_expediteur : donne[0].prenom_expediteur,
      adresse_expediteur : donne[0].adresse_expediteur,
      email_expediteur : donne[0].email_expediteur,
      numero_expediteur: donne[0].numero_expediteur,
      pays_expediteur : donne[0].pays_expediteur,
      code_abonne : donne[0].code_abonne
      }})
  }



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

        <Route path="/form_envoie_client" element={username == "" ? <Navigate to ='/' /> :<FormEnvoiClient username = {username} dataEnvoie={dataEnvoie} envoie={envoie} setTaux={setTaux}/>}>
        </Route>

        <Route path="/form_envoie_abonne_id" element={username == "" ? <Navigate to ='/' /> :<FormEnvoiAbonneId username = {username} dataAbonne={dataAbonne} />} >
        </Route>
        <Route path="/form_envoie_abonne" element={username == "" ? <Navigate to ='/' /> :<FormEnvoiAbonne username = {username} abonne={abonne} dataEnvoieAbonne={dataEnvoieAbonne}/>} >
        </Route>
        
        <Route path="/envoi_info" element={username == "" ? <Navigate to ='/' /> :<EnvoiInfo username = {username} dataEnvoie3={dataEnvoie3} envoie={envoie}/>} >
        </Route>

        <Route path="/envoi_abonne_info" element={username == "" ? <Navigate to ='/' /> :<EnvoieAbonneInfo username = {username} dataEnvoie3={dataEnvoie3} envoie={envoie}/>} >
        </Route>

        <Route path="/form_retrait" element={username == "" ? <Navigate to ='/' /> :<FormRetrait username = {username} dataEnvoie2={dataEnvoie2} />} >
        </Route>

        <Route path="/retrait_info" element={username == "" ? <Navigate to ='/' /> :<RetraitInfo username = {username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} />} >
        </Route>
        
        <Route path="/form_abonne_non_valide" element={username == "" ? <Navigate to ='/' /> :<AbonneFormNonValideInfo username = {username} setCodeRetraitStatus={setCodeRetraitStatus} codeRetraitStatus={codeRetraitStatus}/>} >
        </Route>

        <Route path="/form_retrouver_abonne" element={username == "" ? <Navigate to ='/' /> :<FormRetrouverCodeAbonne username = {username} dataAbonneInfo={dataAbonneInfo}/>} >
        </Route>

        <Route path="/abonne_code_info" element={username == "" ? <Navigate to ='/' /> :<AbonneCodeInfo username = {username} abonneInfo={abonneInfo}/>} >
        </Route>

        <Route path="/confirmation_envoie_info" element={username == "" ? <Navigate to ='/' /> :<ConfirmationEnvoieInfo username = {username} envoie3={envoie3}/>} >
        </Route>

        <Route path="/confirmation_retrait_info" element={username == "" ? <Navigate to ='/' /> :<ConfirmationRetraitInfo username = {username} envoie2={envoie2} dataEnvoie2={dataEnvoie2}/>} >
        </Route>




      </Routes >
    </BrowserRouter>
  );
}

export default App;

