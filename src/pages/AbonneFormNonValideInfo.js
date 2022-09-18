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
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';





const useState = React.useState
function AbonneFormNonValideInfo(props)
{

    const [envoie4,setEnvoie4] = useState([])
       
    const [message,setMessage] = useState("formulaire non validé")
    const [couleur,setCouleur] = useState("text-dark")
    const[status,setStatus] = useState({statusInfo :{
        statusRetrait :"",
    }})

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(true);

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
         const interval =  setInterval(()=>setModalShow3(false),4000);
          return () => clearInterval(interval)
      },[])


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

      const suprimerOperation = (e)=>
      {       
          e.preventDefault()
          setModalShow2(true)
          console.log(e.target.value)
         // setStatus("Code Retrait Valide")     
          fetch('https://kobobsapi.herokuapp.com/api/suprimer/'+e.target.value+'/', {
                  method: 'DELETE',
                  headers: {'Content-Type': 'application/json'},
                 // body: JSON.stringify(status.statusInfo.statusRetrait)
                })
                .then( res => res.json())
                .then(
                  res => {   
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
    return <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>



    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>

    </Row>
    <Row className='justify-content-start pb-3 text-start' >
    <Col className='justify-content-start text-start'  xs={6}>
       <p className='text-dark'>Code Retrait : <b className='text-danger'>{value.code_retrait}</b> </p>
        <p className='text-dark'>Status Retrait : <b className='text-dark '>{value.status_retrait}</b> </p>
        <p className='text-dark'>Noms complets Expediteur: <b className='text-dark '>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-dark'>Noms complets Beneficiare: <b className='text-dark'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark'> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro Expediteur: <b className='text-dark'> {value.numero_expediteur}</b></p>
    </Col>

    <Col className='justify-content-start text-start'  xs={6}>
    <p className='text-dark'>Montant à payer: <b className='text-danger'>{Number(value.montant_total).toFixed(2)} £</b> </p>
    <p className='text-dark'>Montant à Recuperer: <b className='text-dark'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Email Expediteur: <b className='text-dark'> {value.email_expediteur}</b></p>
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {value.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark '>{value.type_service}</b> </p>
        <p className='text-dark'>date et heure : <b className='text-dark'> {value.date_heure_operation}</b></p> 
    </Col>
    </Row>

    <Row className="pb-3">
      <hr style={{color:"darkorange"}} ></hr>

    <Col className='text-center' xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='pt-3' variant="warning" type="submit" onClick={e=>validateCodeRetrait(e)}>
        Valider code
        </Button>
        </Link>
        </Col>

        <Col className='text-center' xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='pt-3' variant="danger" type="submit" onClick={e=>suprimerOperation(e)}>
        suprimer opération
        </Button>
        </Link>
        </Col>
    </Row>

    

</Container> })
} 


{isMobileOrTablet && envoie4.map((value)=>
    {
    return <Container className='bg-light justify-content-center text-center mx-auto my-auto mb-5' >
    <Row className='justify-content-center mb-3 pt-3' >
            <Col xs={6}>
            <p className='couleur2 display-6'><i><b>{message}</b></i></p>
            </Col>
        </Row>
    
    
    
        <Row className='justify-content-center pb-3'>
          <hr style={{color:"darkorange"}}></hr>
        </Row>
        <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-dark'>Code Retrait : <b className='text-dark bg-danger'>{value.code_retrait}</b> </p>
        <p className='text-dark'>Montant à payer: <b className='text-dark bg-danger'>{Number(value.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Montant à Recuperer: <b className='text-dark '>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Status Retrait : <b className='text-dark'>{value.status_retrait}</b> </p>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark '>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-dark'>Numéro Expediteur: <b className='text-dark'> {value.numero_expediteur}</b></p>
        <p className='text-dark'>Email Expediteur: <b className='text-dark'> {value.email_expediteur}</b></p>
        <p className='text-dark'>Noms  Beneficiare: <b className='text-dark'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p> 
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {value.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{value.type_service}</b> </p>
        <p className='text-dark'>date et heure : <b className='text-dark'> {value.date_heure_operation}</b></p> 
        </Col>
        </Row>

        <Row className='pt-3'>
        <hr style={{color:"darkorange"}}></hr>
        <Col xs={6} className="text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button name='validate' value={value.code_retrait} className='pt-3' variant="warning" type="submit" onClick={e=>validateCodeRetrait(e)}>
            Valider code 
            </Button>
            </Link>
            </Col>
    
            <Col xs={6} className="text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button name='validate' value={value.code_retrait} className='pt-3' variant="danger" type="submit" onClick={e=>suprimerOperation(e)}>
            suprimer opération
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
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
<Footer />
        </>
       
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Validation Réussie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-success'><b>le code de retrait a été validé avec success </b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Suppression Réussie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-success'><b>le formulaire d'envoi a été supprimé avec succès</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal3(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Veuillez Patienter...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ClipLoader color={"#ff8c00"} loading={true} size={150} /> 
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }



export default AbonneFormNonValideInfo;