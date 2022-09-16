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
function EnvoiInfo(props)
{

    const [message,setMessage] = useState("Veuillez Vérifier les informations avant d'envoyer")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
      const navigate = useNavigate()
      const [modalShow, setModalShow] = React.useState(false);
    
console.log(props.envoie.infoEnvoie)

    const submitEnvoie = (e)=>
    {   
      e.preventDefault()
        fetch('https://kobobsapi.herokuapp.com/api/envoieFormulaire/', {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(props.envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => { 
                  
                 props.dataEnvoie3(res)
                 console.log(res)
                 props.setEnvoie({infoEnvoie:{
                  nom_expediteur : '',
                  postnom_expediteur : '',
                  prenom_expediteur : '',
                  adresse_expediteur : '',
                  email_expediteur : '',
                  numero_expediteur: '',
                  pays_expediteur : 'Angleterre',
                  nom_beneficiaire : '',
                  postnom_beneficiaire : '',
                  prenom_beneficiaire : '',
                  adresse_beneficiaire : '',
                  numero_beneficiaire : '',
                  pays_beneficiaire : 'RD Congo',
                  montant_envoie_sans_frais : '',
                  montant_beneficiaire : '',
                  type_service : 'Kozua na maboko (kozua na nzela ya agence)',
                  frais_envoie : '',
                  frais_tva : '',
                  montant_total : '',
                  code_retrait : '',
                  data_operation : '',
                  date_heure_operation : '',
                  code_abonne : '',
                  status_retrait : '',
                  numero_transfer: '**********'
                 }})
                 navigate('/confirmation_envoie_info')
                 
                }
              )
              .catch( (error) =>
                {
                  setModalShow(true)  
                   console.log(error)
                   navigate('/envoi_info')
                } )

    }


    

   
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
      <p className='couleur2'><b><u>Motindi (Expediteur Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): <b className='couleur2'>{props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): <b className='couleur2'>{props.envoie.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p>
        <p className='text-light'>Email Adresse : <b className='couleur2'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : <b className='couleur2'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>Ekolo (Pays) : <b className='couleur2'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui (Bénéficiare Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): <b className='couleur2'>{props.envoie.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): <b className='couleur2'>{props.envoie.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'> {props.envoie.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : <b className='couleur2'>{props.envoie.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-light'>Ekolo (Pays) : <b className='couleur2'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo (Motant Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Mbongo ya kozwa epayi ya Mozui(Montant à recevoir chez le Bénéficiare): <b className='couleur2'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Numéro ya transfer(Numéro à transferer de l'argent): <b className='couleur2'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>Mbongo Yako Futa Pona ko Tinda(Montant Total à payer): <b className='bg-warning text-dark'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
        envoyer
        </Button>
        </Col>

        <Col xs={6}>
        <Link to="/form_envoie_client">
         <Button variant="outline-warning" type="submit">
        modifier
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    

</Container>
}

{isMobileOrTablet &&  <Container className='bg-dark justify-content-center text-center bordure mx-auto my-auto'  >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Motindi (Expediteur Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): <b className='couleur2'>{props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): <b className='couleur2'>{props.envoie.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p>
        <p className='text-light'>Email Adresse : <b className='couleur2'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : <b className='couleur2'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>Ekolo (Pays) : <b className='couleur2'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui (Bénéficiare Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): <b className='couleur2'>{props.envoie.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): <b className='couleur2'>{props.envoie.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'> {props.envoie.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : <b className='couleur2'>{props.envoie.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-light'>Ekolo (Pays) : <b className='couleur2'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo (Motant Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-light'>Mbongo ya kozwa epayi ya Mozui(Montant à recevoir chez le Bénéficiare): <b className='couleur2'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Numéro ya transfer(Numéro à transferer de l'argent): <b className='couleur2'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>Mbongo Yako Futa Pona ko Tinda(Montant Total à payer): <b className='bg-warning text-dark'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
        envoyer
        </Button>
        </Col>

        <Col xs={6}>
        <Link to="/form_envoie_client">
         <Button variant="outline-warning" type="submit">
        modifier
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
          Echec d'envoi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Message : </h4>
        <p className='text-danger'><b>Désolé veuillez verifier que vous avez renseigner tous les champs !!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default EnvoiInfo;