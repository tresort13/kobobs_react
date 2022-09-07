import React from 'react';
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
import Form from 'react-bootstrap/Form';

const useState = React.useState

function SelectDateFormRetrait(props)
{
    const[dateRetrait,setDateRetrait] = useState({infodateRetrait :{
        dateInfo:""
    }})

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const [message,setMessage] = useState("Veuillez selectionner la date ")
    const [couleur,setCouleur] = useState("text-dark")
    const submitVol = (e)=>
    {
        props.setDateEnvoie(dateRetrait.infodateRetrait.dateInfo)
        console.log(dateRetrait.infodateRetrait.dateInfo)    
                
    }

    const inputChanged = (event)=>
    {
         const cred = dateRetrait.infodateRetrait ;
         cred[event.target.name] = event.target.value;
         setDateRetrait({infodateRetrait:cred})
    }

return (
    <>
    <Header username={props.username}/>

{isDesktop && <Container className='bg-dark justify-content-center text-center bordure' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={6}>
        <p className="couleur2"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
<Form>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateInfo"  type="date" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/operation_envoie_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit" onClick={e=>submitVol(e)}>
        Valider 
        </Button>
        </Link>

        </Col>
    </Row>
</Form>
</Container>}

{isMobileOrTablet && <Container className='bg-dark justify-content-center text-center bordure' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={6}>
        <p className="couleur2"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
<Form>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateInfo"  type="date" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/operation_envoie_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit" onClick={e=>submitVol(e)}>
        Valider 
        </Button>
        </Link>

        </Col>
    </Row>
</Form>
</Container>}

<Footer />
</>
    )
}


export default SelectDateFormRetrait;