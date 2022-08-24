import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';




const useState = React.useState
function AbonneFormNonValideInfo(props)
{

    const [envoie4,setEnvoie4] = useState([])
       
    const [message,setMessage] = useState("Liste des formulaires non validés")
    const [couleur,setCouleur] = useState("text-dark")
    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
    
    


      const submit = (e)=>
      {
                
          fetch('https://kobobsapi.herokuapp.com/api/getRetraitNonValideInfo/code retrait en attente de validation/', {
                  method:'GET',
                  headers: {'Content-Type': 'application/json'},
                 // body: JSON.stringify(codeRetrait.infoCodeRetrait)
                })
                .then( res => res.json())
                .then(
                  res => {   
                    setEnvoie4(res)
                     console.log(res)
                  }
                )
                .catch( (error) =>
                  {
                      console.log(error)
                  } )
  
      }

      const validateCodeRetrait = (value)=>
      {
                
          fetch('https://kobobsapi.herokuapp.com/api/validateCodeRetrait/'+value+'/', {
                  method:'PUT',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(value)
                })
                .then( res => res.json())
                .then(
                  res => {   
                     console.log(value)
                     navigate('/form_abonne_non_valide')
                  }
                )
                .catch( (error) =>
                  {
                      console.log(error)
                  } )
  
      }

      useEffect(()=>
      {
         const interval =  setInterval(()=>submit(),1000);
          return () => clearInterval(interval)
      },[])
   
    return (
        
        <>
        <Header username={props.username} />
{isDesktop && envoie4.map((value)=>
    {
    return <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
            <Link to="/tracer_baggages">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations générales </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
    <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='couleur2'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui (Noms complets Beneficiare): <b className='couleur2'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays Expediteur) : <b className='couleur2'> {value.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays Beneficiare) : <b className='couleur2'> {value.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo Bazui (Montant Récuperé): <b className='couleur2'>{Number(value.montant_beneficiaire).toFixed(2)}</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{value.type_service}</b> </p>
        <p className='text-light'>Code Retrait : <b className='couleur2'>{value.code_retrait}</b> </p>
        <p className='text-light'>Status Retrait : <b className='couleur2'>{value.status_retrait}</b> </p>
        <p className='text-light'>opération retrait fait par : <b className='couleur2'> {props.username}</b></p>
        <p className='text-light'>date et heure : <b className='couleur2'> {value.date_heure_operation}</b></p> 
    </Col>
    <Col xs={12}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button className='pt-3' variant="warning" type="submit" onClick={validateCodeRetrait(value.code_retrait)}>
        Valider le code de retrait
        </Button>
        </Link>
        </Col>
    </Row>

    

</Container> })
} 


{isMobileOrTablet && envoie4.map((value)=>
    {
    return <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
            <Link to="/tracer_baggages">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations générales </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
    <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='couleur2'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui (Noms complets Beneficiare): <b className='couleur2'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays Expediteur) : <b className='couleur2'> {value.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays Beneficiare) : <b className='couleur2'> {value.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo Bazui (Montant Récuperé): <b className='couleur2'>{Number(value.montant_beneficiaire).toFixed(2)}</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{value.type_service}</b> </p>
        <p className='text-light'>Status Retrait : <b className='couleur2'>{value.status_retrait}</b> </p>
        <p className='text-light'>opération retrait fait par : <b className='couleur2'> {props.username}</b></p>
        <p className='text-light'>date et heure : <b className='couleur2'> {value.date_heure_operation}</b></p> 
    </Col>
    <Col xs={6}>
        <Link to="/envoi_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Valider le code de retrait
        </Button>
        </Link>
        </Col>
        <Col xs={6}>
        <Link to="/envoi_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Click pour voir plus des détails
        </Button>
        </Link>
        </Col>
    </Row>  

</Container> })
} 

<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<Footer />
        </>
       
    )
}

export default AbonneFormNonValideInfo;