import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';



const useState = React.useState

function ConfirmationEnvoieInfo(props)
{

    const [message,setMessage] = useState("Page de confirmation envoie")
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
        <Header username={props.username} />
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Page de confirmation d'envoi</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='couleur2'>{props.envoie3.infoEnvoie.nom_expediteur} {props.envoie3.infoEnvoie.postnom_expediteur} {props.envoie3.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui (Noms complets Beneficiare): <b className='couleur2'>{props.envoie3.infoEnvoie.nom_beneficiaire} {props.envoie3.infoEnvoie.postnom_beneficiaire} {props.envoie3.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays Expediteur) : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays Beneficiare) : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo ya kozwa epayi ya Motindi(Montant à récupérer): <b className='text-dark bg-warning'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Mbongo yako Futa(Montant à payer): <b className='text-dark bg-warning'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Numéro ya transfer(Numéro à transferer de l'argent): <b className='couleur2'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>Code Retrait : <b className='text-dark bg-warning'> {props.envoie3.infoEnvoie.code_retrait} </b> ({props.envoie3.infoEnvoie.status_retrait})</p>
        <p className='text-light'>Code Abonné : <b className='text-dark bg-warning'> {props.envoie3.infoEnvoie.code_abonne} </b></p>
        <p className='text-light'>date et heure : <b className='couleur2'> {JSON.stringify(props.envoie3.infoEnvoie.date_heure_operation)}</b></p>
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

{isMobileOrTablet && <Container className='bg-dark justify-content-center text-center bordure mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Page de confirmation d'envoi</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='couleur2'>{props.envoie3.infoEnvoie.nom_expediteur} {props.envoie3.infoEnvoie.postnom_expediteur} {props.envoie3.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui (Noms complets Beneficiare): <b className='couleur2'>{props.envoie3.infoEnvoie.nom_beneficiaire} {props.envoie3.infoEnvoie.postnom_beneficiaire} {props.envoie3.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays Expediteur) : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays Beneficiare) : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo ya kozwa epayi ya Motindi(Montant à récupérer): <b className='text-dark bg-warning'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Mbongo yako Futa(Montant à payer): <b className='text-dark bg-warning'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Numéro ya transfer(Numéro à transferer de l'argent): <b className='couleur2'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>Code Retrait : <b className='text-dark bg-warning'> {props.envoie3.infoEnvoie.code_retrait} </b> ({props.envoie3.infoEnvoie.status_retrait})</p>
        <p className='text-light'>Code Abonné : <b className='text-dark bg-warning'> {props.envoie3.infoEnvoie.code_abonne} </b></p>
        <p className='text-light'>date et heure : <b className='couleur2'> {JSON.stringify(props.envoie3.infoEnvoie.date_heure_operation)}</b></p>
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
        Envoi Réussi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Message : </h4>
        <p className='text-success'><b>Votre formulaire a été envoyé avec succès</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationEnvoieInfo;