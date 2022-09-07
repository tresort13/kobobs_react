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
import InputGroup from 'react-bootstrap/InputGroup';



const useState = React.useState
function DailyRapportInfoEnvoie(props)
{

    const [message,setMessage] = useState("Rapport Journalier des Envoies")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
      const navigate = useNavigate()
    
console.log(props.envoie.infoEnvoie)

    const submitEnvoie = (e)=>
    {      
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
                }
              )
              .catch( (error) =>
                {
                    
                   console.log(error)
                } )

    }

    const modifierFormulaire = (e)=>
    {    
      e.preventDefault()     
      navigate('/form_envoie_client')   
      //setEnvoie({infoEnvoie:{}})
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

    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
            <Link to="">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Type de Rapport: <b className='couleur2'></b> </p>
        <p className='text-light'>Date : <b className='couleur2'></b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Rapport</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-light'>Nombres d'envoies effectué : <b className='couleur2'></b>  </p>
        <p className='text-light'>Nombres d'envoies validés : <b className='couleur2'></b> </p>
        <p className='text-light'>Nombres d'envoies non validés : <b className='couleur2'> </b> </p>
        <p className='text-light'>Nombres d'envoies suprimés : <b className='couleur2'> </b></p>
        </Col>

        <Col xs={6}>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}><Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>Voir Details </Button></Link>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}><Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>Voir Details </Button></Link>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}><Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>Voir Details </Button></Link>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}><Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>Voir Details </Button></Link>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
        Fermer
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
            <Link to="">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Type de Rapport: <b className='couleur2'></b> </p>
        <p className='text-light'>Date : <b className='couleur2'></b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Rapport</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-light'>Nombres d'envoies effectué : <b className='couleur2'></b>  </p>
        <p className='text-light'>Nombres d'envoies validés : <b className='couleur2'></b> </p>
        <p className='text-light'>Nombres d'envoies non validés : <b className='couleur2'> </b> </p>
        <p className='text-light'>Nombres d'envoies suprimés : <b className='couleur2'> </b></p>
        </Col>

        <Col xs={6}>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}><Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>Voir Details </Button></Link>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}><Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>Voir Details </Button></Link>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}><Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>Voir Details </Button></Link>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}><Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>Voir Details </Button></Link>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
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
<Footer />
        </>
       
    )
}

export default DailyRapportInfoEnvoie;