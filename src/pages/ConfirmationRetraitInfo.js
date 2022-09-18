import React from 'react';
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

function ConfirmationRetraitInfo(props)
{
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2,setModalShow2] = React.useState(false);
    
    const [message,setMessage] = useState("Page de confirmation Retrait")
    const [couleur,setCouleur] = useState("text-dark")
    const navigate = useNavigate()
    


    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

      
  
      const payerRetrait = (e)=>
      {  
        e.preventDefault()  
        setModalShow2(true)  
        fetch('https://kobobsapi.herokuapp.com/api/payerCodeRetrait/'+props.envoie2.infoEnvoie.code_retrait+'/', {
                method: 'PUT',
                 headers: {'Content-Type': 'application/json'},
                  //body: JSON.stringify(props.envoie2.infoEnvoie)
                })
                .then( res => res.json())
                .then(
                  res => {    
                    setModalShow(true)     

                    navigate('/confirmation_retrait_info')

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
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>Montant à récupérer: <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Noms Beneficiare: <b className='text-dark'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={6}>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark'>{props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} {props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro à transferer de l'argent: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date et heure : <b className='text-dark'> {JSON.stringify(props.envoie2.infoEnvoie.date_heure_operation)}</b></p>
        <p className='text-dark'>Mobile Money: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>payerRetrait(e)}> 
        Payé Beneficiaire
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Page de confirmation de rétrait</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
    <Col xs={12}>
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>Montant à récupérer: <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Noms Beneficiare: <b className='text-dark'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark'>{props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} {props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Mobile Money: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date et heure : <b className='text-dark'> {JSON.stringify(props.envoie2.infoEnvoie.date_heure_operation)}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>payerRetrait(e)}> 
        Payé Beneficiaire
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
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
          Paiement Reussi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>le code de retrait a été payé avec success </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/home">
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
        </Link>
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


export default ConfirmationRetraitInfo;