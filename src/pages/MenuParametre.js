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



function MenuParametre(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<Header username={props.username} isAdmin={props.isAdmin}/>
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure' style={{marginTop:100,width:750}} >
    
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='secondary'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'>Envoie Argent Client</b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='secondary'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'>Envoie Argent Client</b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container>}

{isMobileOrTablet && <Container className='bg-dark my-auto justify-content-center text-center bordure mb-5' style={{marginTop:30,backgroundColor:'white'}} >
    <Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
            <Link to="/home">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:200}}></Image>
            </Link>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='secondary'  style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'>Envoie Argent Client</b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='secondary'  style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'>Envoie Argent Client</b>
        </Button>
        </Link>
        </Col>
    </Row>

</Container>}
<Footer />
</>
    )
}

export default MenuParametre;