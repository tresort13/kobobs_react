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
function AbonneCodeInfo(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodeBagage:"",
        operation:"",
        position:"",
        volInfo:""
    }})

    
        const[position,setPosition] = useState('')

    const [message,setMessage] = useState("Informations Générales sur l'abonné")
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
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
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
      <p className='couleur2'><b><u>Abonné Informations  </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo ya Libota (Nom): <b className='couleur2'>{props.abonneInfo.infoAbonne.nom_expediteur}</b></p>
        <p className='text-light'>Kombo ya Authenticité  (Postnom) : <b className='couleur2'>{props.abonneInfo.infoAbonne.postnom_expediteur}</b></p>
        <p className='text-light'>Kombo ya Mukristu (Prénom) : <b className='couleur2'>{props.abonneInfo.infoAbonne.prenom_expediteur}</b> </p>
        <p className='text-light'>Email : <b className='couleur2'>{props.abonneInfo.infoAbonne.email_expediteur}</b> </p>
        <p className='text-light'>Numéro Ya Tshombo : <b className='couleur2'>{props.abonneInfo.infoAbonne.numero_expediteur}</b> </p>
        <p className='text-light'>Ekolo (Pays) : <b className='couleur2'> {props.abonneInfo.infoAbonne.pays_expediteur}</b></p>
        <p className='text-light'>Code Abonné : <b className='couleur2'>{props.abonneInfo.infoAbonne.code_abonne}</b> </p>
        </Col>
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

{isMobileOrTablet && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
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
      <p className='couleur2'><b><u>Abonné Informations  </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo ya Libota (Nom): <b className='couleur2'>{props.abonneInfo.infoAbonne.nom_expediteur}</b></p>
        <p className='text-light'>Kombo ya Authenticité  (Postnom) : <b className='couleur2'>{props.abonneInfo.infoAbonne.postnom_expediteur}</b></p>
        <p className='text-light'>Kombo ya Mukristu (Prénom) : <b className='couleur2'>{props.abonneInfo.infoAbonne.prenom_expediteur}</b> </p>
        <p className='text-light'>Email : <b className='couleur2'>{props.abonneInfo.infoAbonne.email_expediteur}</b> </p>
        <p className='text-light'>Numéro Ya Tshombo : <b className='couleur2'>{props.abonneInfo.infoAbonne.numero_expediteur}</b> </p>
        <p className='text-light'>Ekolo (Pays) : <b className='couleur2'> {props.abonneInfo.infoAbonne.pays_expediteur}</b></p>
        <p className='text-light'>Code Abonné : <b className='couleur2'>{props.abonneInfo.infoAbonne.code_abonne}</b> </p>
        </Col>
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

export default AbonneCodeInfo;