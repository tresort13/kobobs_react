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
import SessionOut from 'SessionOut';



const useState = React.useState
function AbonneCodeInfo(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodeBagage:"",
        operation:"",
        position:"",
        volInfo:""
    }})

    
        const[position,setPosition] = useState('')

    const [message,setMessage] = useState("Informations Abonné")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    

console.log(props.abonneInfo)
   
   
    return (
        
        <>
        <Header username={props.username} />
{isDesktop && <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>



    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6} className ="text-start">
        <p className='text-dark'>Nom: <b className='text-dark'>{props.abonneInfo.infoAbonne.nom_expediteur}</b></p>
        <p className='text-dark'>Postnom: <b className='text-dark'>{props.abonneInfo.infoAbonne.postnom_expediteur}</b></p>
        <p className='text-dark'>Prénom: <b className='text-dark'>{props.abonneInfo.infoAbonne.prenom_expediteur}</b> </p>
        <p className='text-dark'>Email: <b className='text-dark'>{props.abonneInfo.infoAbonne.email_expediteur}</b> </p>  
        </Col>

        <Col xs={6} className ="text-start">
        <p className='text-dark'>Téléphone: <b className='text-dark'>{props.abonneInfo.infoAbonne.numero_expediteur}</b> </p>
        <p className='text-dark'>Adresse: <b className='text-dark'> {props.abonneInfo.infoAbonne.adresse_expediteur}</b></p>
        <p className='text-dark'>Code Abonné: <b className='text-dark'>{props.abonneInfo.infoAbonne.code_abonne}</b> </p>
        </Col>
    </Row>

    <Row>
    <hr style={{color:"darkorange"}}></hr>
    <Col xs={12} className ="text-center pb-3">
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Fermer
        </Button>
        </Link>
        </Col>
    </Row>

    

</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mx-auto my-auto'>
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
        <p className='text-dark'>Nom: <b className='text-dark'>{props.abonneInfo.infoAbonne.nom_expediteur}</b></p>
        <p className='text-dark'>Postnom: <b className='text-dark'>{props.abonneInfo.infoAbonne.postnom_expediteur}</b></p>
        <p className='text-dark'>Prénom: <b className='text-dark'>{props.abonneInfo.infoAbonne.prenom_expediteur}</b> </p>
        <p className='text-dark'>Email: <b className='text-dark'>{props.abonneInfo.infoAbonne.email_expediteur}</b> </p>
        <p className='text-dark'>Téléphone: <b className='text-dark'>{props.abonneInfo.infoAbonne.numero_expediteur}</b> </p>
        <p className='text-dark'>Adresse: <b className='text-dark'> {props.abonneInfo.infoAbonne.adresse_expediteur}</b></p>
        <p className='text-dark'>Code Abonné: <b className='text-dark'>{props.abonneInfo.infoAbonne.code_abonne}</b> </p>
        </Col>
    </Row>

    <Row>
    <hr style={{color:"darkorange"}}></hr>
    <Col xs={12} className ="text-center pb-3">
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Fermer
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
<SessionOut setIsadmin={props.setIsadmin}/>
<Footer />
        </>
       
    )
}

export default AbonneCodeInfo;