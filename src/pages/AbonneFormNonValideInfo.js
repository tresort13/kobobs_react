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
import Modal from 'react-bootstrap/Modal';




const useState = React.useState
function AbonneFormNonValideInfo(props)
{

    const [envoie4,setEnvoie4] = useState([])
       
    const [message,setMessage] = useState("Liste des formulaires non validés")
    const [couleur,setCouleur] = useState("text-dark")
    const[status,setStatus] = useState({statusInfo :{
        statusRetrait :"",
    }})

    const [modalShow, setModalShow] = React.useState(false);

    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
    
    


      const submit =(e)=>
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

      useEffect(()=>
      {
         const interval =  setInterval((e)=>submit(e),1000);
          return () => clearInterval(interval)
      },[envoie4])



      const validateCodeRetrait = (e)=>
      {       
          e.preventDefault()
          console.log(e.target.value)
         // setStatus("Code Retrait Valide")     
          fetch('https://kobobsapi.herokuapp.com/api/validateCodeRetrait/'+e.target.value+'/', {
                  method: 'PUT',
                  headers: {'Content-Type': 'application/json'},
                 // body: JSON.stringify(status.statusInfo.statusRetrait)
                })
                .then( res => res.json())
                .then(
                  res => {   
                    setModalShow(true)
                     navigate('/form_abonne_non_valide')
                  }
                )
                .catch( (error) =>
                  {
                      console.log(error)
                  } )
  
      }

   
   
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



    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations générales </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
    <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='text-dark bg-warning'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui (Noms complets Beneficiare): <b className='couleur2'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays Expediteur) : <b className='couleur2'> {value.pays_expediteur}</b></p>
        <p className='text-light'>Numéro ya Motindi (Numéro Expediteur) : <b className='text-dark bg-warning'> {value.numero_expediteur}</b></p>
        <p className='text-light'>Email ya Motindi (Numéro Expediteur) : <b className='couleur2'> {value.email_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays Beneficiare) : <b className='couleur2'> {value.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo yako zwa (Montant à Recuperer): <b className='text-dark bg-warning'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Mbongo yako futa (Montant à payer): <b className='text-dark bg-warning'>{Number(value.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='text-dark bg-warning'>{value.type_service}</b> </p>
        <p className='text-light'>Code Retrait : <b className='text-dark bg-warning'>{value.code_retrait}</b> </p>
        <p className='text-light'>Status Retrait : <b className='text-dark bg-warning'>{value.status_retrait}</b> </p>
        <p className='text-light'>date et heure : <b className='couleur2'> {value.date_heure_operation}</b></p> 
    </Col>
    <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='pt-3' variant="warning" type="submit" onClick={e=>validateCodeRetrait(e)}>
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
    <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='text-dark bg-warning'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui (Noms complets Beneficiare): <b className='couleur2'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays Expediteur) : <b className='couleur2'> {value.pays_expediteur}</b></p>
        <p className='text-light'>Numéro ya Motindi (Numéro Expediteur) : <b className='text-dark bg-warning'> {value.numero_expediteur}</b></p>
        <p className='text-light'>Email ya Motindi (Numéro Expediteur) : <b className='couleur2'> {value.email_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays Beneficiare) : <b className='couleur2'> {value.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo yako zwa (Montant à Recuperer): <b className='text-dark bg-warning'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Mbongo yako futa (Montant à payer): <b className='text-dark bg-warning'>{Number(value.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='text-dark bg-warning'>{value.type_service}</b> </p>
        <p className='text-light'>Code Retrait : <b className='text-dark bg-warning'>{value.code_retrait}</b> </p>
        <p className='text-light'>Status Retrait : <b className='text-dark bg-warning'>{value.status_retrait}</b> </p>
        <p className='text-light'>date et heure : <b className='couleur2'> {value.date_heure_operation}</b></p> 
    </Col>
    <Col xs={6}>
        <Link to="/envoi_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Valider le code de retrait
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
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<Footer />
        </>
       
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Validation Réussie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Changement Status Code Retrait Reussi : </h4>
          <p className='text-success'><b>le code de retrait a été validé avec success </b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default AbonneFormNonValideInfo;