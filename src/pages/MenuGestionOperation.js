import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';



function MenuGestionOperation(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<Header username={props.username} />
{isDesktop && <Container className='justify-content-center text-center bordure' style={{marginTop:30,backgroundColor:'white',width:750}} >
    <Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
            <Link to="/home">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col xs = {6}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button  style={{width:400,height:80}} className='btn-lg rounded-pill zoom couleur'>
        <i>Envoie Argent Client</i>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3 '>
        <Col xs ={6}>
        <Link to="/form_envoie_abonne" style={{color:'white',textDecorationLine:'none'}}>
        <Button style={{width:400,height:80}} className='btn-lg rounded-pill zoom couleur'>
        <i>Envoie Argent Client</i>
        </Button>
        </Link>
        </Col>
    </Row>

</Container>}

{isMobileOrTablet && <Container className='my-auto justify-content-center text-center bordure mb-5' style={{marginTop:30,backgroundColor:'white'}} >
    <Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
            <Link to="/home">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:300}}></Image>
            </Link>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col xs={"auto"}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button  style={{width:300,height:80}} className='btn-lg rounded-pill zoom couleur'>
        <i>Envoie Argent Client</i>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3 '>
        <Col xs={"auto"}>
        <Link to="/form_envoie_abonne" style={{color:'white',textDecorationLine:'none'}}>
        <Button  style={{width:300,height:80}} className='btn-lg rounded-pill zoom couleur'>
        <i>Envoie Argent Abonné</i>
        </Button>
        </Link>
        </Col>
    </Row>

</Container>}
<Footer />
</>
    )
}

export default MenuGestionOperation;