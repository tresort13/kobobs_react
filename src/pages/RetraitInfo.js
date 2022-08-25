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



const useState = React.useState
function RetraitInfo(props)
{

    const [message,setMessage] = useState("Veuillez Vérifier les informations avant validation")
    const [message2,setMessage2] = useState("")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(false);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
const navigate = useNavigate()
   


    const validerRetrait = (e)=>
    { 
      e.preventDefault()     
      fetch('https://kobobsapi.herokuapp.com/api/getRetraitInfo/'+props.envoie2.infoEnvoie.code_retrait+'/', {
              method:'GET',
               headers: {'Content-Type': 'application/json'},
                //body: JSON.stringify(props.envoie2.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => { 
                  if(res.status_retrait == "Code Retrait Valide")
                  {
                    props.dataEnvoie2(res)
                    console.log(res.status_retrait)
                    navigate('/confirmation_retrait_info')
                  }  
                  else
                  {
                    setModalShow(true)
                  }
                
                }
              )
              .catch( (error) =>
                {            
                   console.log(error)
                } )

    }


    console.log(props.envoie2.infoEnvoie.status_retrait)

   
    return (
        
        <>
        <Header username={props.username} />
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
            <Link to="">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Motindi (Expediteur Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): <b className='couleur2'>{props.envoie2.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): <b className='couleur2'>{props.envoie2.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : <b className='couleur2'>{props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Email Adresse : <b className='couleur2'>{props.envoie2.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : <b className='couleur2'> {props.envoie2.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>Ekolo (Pays) : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui (Bénéficiare Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): <b className='couleur2'>{props.envoie2.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): <b className='couleur2'>{props.envoie2.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : <b className='couleur2'>{props.envoie2.infoEnvoie.prenom_beneficiaire} </b> </p>
        <p className='text-light'>Email Adresse : <b className='couleur2'> {props.envoie2.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : <b className='couleur2'>{props.envoie2.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-light'>Ekolo (Pays) : <b className='couleur2'>{props.envoie2.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo (Motant Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Mbongo yako zwa epayi ya Mozui(Montant): <b className='couleur2'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{props.envoie2.infoEnvoie.type_service}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Retrait Status</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Status Retrait : <b className='couleur2'>{props.envoie2.infoEnvoie.status_retrait}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>validerRetrait(e)}>
        Valider Retrait pour Servir
        </Button>
        </Link>
        </Col>
        
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col  xs={"auto"}>    
        <p className='pt-3 text-danger'><b>{message2}</b></p>
        </Col>
    </Row>
    


</Container>
}

{isMobileOrTablet && <Container className='bg-dark my-auto mx-auto justify-content-center text-center bordure mb-5' style={{marginTop:50,backgroundColor:'white'}} >
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
      <p className='couleur2'><b><u>Motindi (Expediteur Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): {props.envoie2.infoEnvoie.nom_expediteur} </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): {props.envoie2.infoEnvoie.postnom_expediteur} </p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : {props.envoie2.infoEnvoie.prenom_expediteur}</p>
        <p className='text-light'>Email Adresse : {props.envoie2.infoEnvoie.adresse_expediteur}</p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : {props.envoie2.infoEnvoie.numero_expediteur} </p>
        <p className='text-light'>Ekolo (Pays) : {props.envoie2.infoEnvoie.email_expediteur}</p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui (Bénéficiare Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): {props.envoie2.infoEnvoie.nom_beneficiaire} </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): {props.envoie2.infoEnvoie.postnom_beneficiaire}</p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : {props.envoie2.infoEnvoie.prenom_beneficiaire} </p>
        <p className='text-light'>Email Adresse : {props.envoie2.infoEnvoie.adresse_beneficiaire}</p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : {props.envoie2.infoEnvoie.numero_beneficiaire} </p>
        <p className='text-light'>Ekolo (Pays) : {props.envoie2.infoEnvoie.pays_beneficiaire}</p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo (Motant Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Mbongo (Montant): {props.envoie2.infoEnvoie.montant_beneficiaire} $</p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): {props.envoie2.infoEnvoie.type_service}</p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>validerRetrait(e)}>
        Valider Informations
        </Button>
        </Link>
        </Col>
        
        <Col xs={6}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit">
        Modifier Informations
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
          Echec de Validation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Status Code Retrait : </h4>
        <p className='text-danger'><b>Ce code de retrait n'est pas encore validé !!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}




export default RetraitInfo;