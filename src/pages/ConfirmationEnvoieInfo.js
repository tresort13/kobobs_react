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
import InputGroup from 'react-bootstrap/InputGroup';



const useState = React.useState

function ConfirmationEnvoieInfo(props)
{

    const [message,setMessage] = useState("Page de confirmation envoie")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    
   
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
      <p className='couleur2'><b><u>Page de confirmation d'envoie</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='couleur2'>{props.envoie3.infoEnvoie.nom_expediteur} {props.envoie3.infoEnvoie.postnom_expediteur} {props.envoie3.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui (Noms complets Beneficiare): <b className='couleur2'>{props.envoie3.infoEnvoie.nom_beneficiaire} {props.envoie3.infoEnvoie.postnom_beneficiaire} {props.envoie3.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays Expediteur) : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays Beneficiare) : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo ya kozwa epayi ya Motindi(Montant à récupérer): <b className='couleur2'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Mbongo yako Futa(Montant à payer): <b className='couleur2'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Code Retrait : <b className='couleur2'> {props.envoie3.infoEnvoie.code_retrait} ({props.envoie3.infoEnvoie.status_retrait})</b></p>
        <p className='text-light'>opération envoie fait par : <b className='couleur2'> {props.username}</b></p>
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
        ok
        </Button>
        </Link>
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
      <p className='couleur2'><b><u>Page de confirmation d'envoie</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='couleur2'>{props.envoie3.infoEnvoie.nom_expediteur} {props.envoie3.infoEnvoie.postnom_expediteur} {props.envoie3.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya MoZUI (Noms complets Beneficiare): <b className='couleur2'>{props.envoie3.infoEnvoie.nom_beneficiaire} {props.envoie3.infoEnvoie.postnom_beneficiaire} {props.envoie3.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays) : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays) : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo (Montant): <b className='couleur2'>{Number(props.envoie3.infoEnvoie.montant_envoie).toFixed(2)} {props.envoie3.infoEnvoie.montant_device}</b> </p>
        <p className='text-light'>Talo ya lisungi ya mosala na biso : <b className='couleur2'>{Number(props.envoie3.infoEnvoie.frais_envoie ).toFixed(2)} {props.envoie3.infoEnvoie.montant_device }</b> </p>
        <p className='text-light'>Mbongo Nionso yako futa(Montant Total): <b className='couleur2'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} {props.envoie3.infoEnvoie.montant_device}</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Code Retrait : <b className='couleur2'> {props.envoie3.infoEnvoie.code_retrait}</b></p>
        <p className='text-light'>opération fait par : <b className='couleur2'> {props.username}</b></p>
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
        ok
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
<Footer />
        </>
       
    )
}

export default ConfirmationEnvoieInfo;