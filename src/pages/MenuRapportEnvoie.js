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
import SessionOut from './SessionOut';


function MenuRapportEnvoie(props)
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
{isDesktop && <Container >
    
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/select_date_form_envoie" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Rapport Jounalier</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/select_mois_form_envoie" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Rapport Mensuel</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container> }

{isMobileOrTablet && <Container >
    
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {12}>
        <Link to="/select_date_form_envoie" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:50}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Rapport Jounalier</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {12}>
        <Link to="/select_mois_form_envoie" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:50}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Rapport Mensuel</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container> }
<SessionOut setIsadmin={props.setIsadmin}/>
<Footer />
</>
    )
}

export default MenuRapportEnvoie;