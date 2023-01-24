import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import SessionOut from './SessionOut';



const useState = React.useState

function ConfirmationEnvoieInfo(props)
{

    const [message,setMessage] = useState("Code retrait ne sera valide qu'après votre paiement")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(true);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    console.log(props.envoie3)
   
    return (
        
        <>
        <Header username={props.username} isAdmin={props.isAdmin}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6} className="text-start">
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie3.infoEnvoie.code_retrait} </b></p>
        <p className='text-dark'>Code Abonné : <b className='text-danger'> {props.envoie3.infoEnvoie.code_abonne} (à retenir)</b></p>
        <p className='text-dark'>Montant à récupérer: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Montant à payer: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark'>{props.envoie3.infoEnvoie.prenom_expediteur} {props.envoie3.infoEnvoie.nom_expediteur} </b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        </Col>

        <Col xs={6} className="text-start">
        <p className='text-dark'>Noms Beneficiare: <b className='text-dark'>{props.envoie3.infoEnvoie.prenom_beneficiaire} {props.envoie3.infoEnvoie.nom_beneficiaire}  </b> </p>   
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Mobile money Numéro: <b className='text-dark'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date : <b className='text-dark'> {JSON.stringify(props.envoie3.infoEnvoie.data_operation)}</b></p>
        </Col>
    </Row>
    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        fermer
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie3.infoEnvoie.code_retrait} </b></p>
        <p className='text-dark'>Code Abonné : <b className='text-danger'> {props.envoie3.infoEnvoie.code_abonne} (à retenir)</b></p>
        <p className='text-dark'>Montant à récupérer: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Montant à payer: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark'> {props.envoie3.infoEnvoie.prenom_expediteur} {props.envoie3.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Noms Beneficiare: <b className='text-dark'>{props.envoie3.infoEnvoie.prenom_beneficiaire} {props.envoie3.infoEnvoie.nom_beneficiaire}</b> </p>   
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Mobile money : <b className='text-dark'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date : <b className='text-dark'> {JSON.stringify(props.envoie3.infoEnvoie.data_operation)}</b></p>
        </Col>
    </Row>
    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        fermer
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
  <MyVerticallyCenteredModal envoie3 = {props.envoie3} show={modalShow} onHide={() => setModalShow(false)} />
  <SessionOut setIsadmin={props.setIsadmin}/>
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
        <p >code retrait : <b className='text-danger'>{props.envoie3.infoEnvoie.code_retrait}</b></p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p >code abonné : <b className='text-success'>{props.envoie3.infoEnvoie.code_abonne}</b></p>    
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok j'ai rétenu</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationEnvoieInfo;