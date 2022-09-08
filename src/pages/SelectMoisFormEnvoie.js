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

function SelectMoisFormEnvoie(props)
{
    const[moisEnvoie,setMoisEnvoie] = useState({infomoisEnvoie :{
        moisInfo:""
    }})

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const [message,setMessage] = useState("Veuillez selectionner le Mois")
    const [couleur,setCouleur] = useState("text-dark")
    console.log(moisEnvoie.infomoisEnvoie.moisInfo )
    const submitVol = (e)=>
    {
        fetch('https://kobobsapi.herokuapp.com/api/getMonthlyRapportInfo/'+moisEnvoie.infomoisEnvoie.moisInfo+'/', {
            method:'GET',
            headers: {'Content-Type': 'application/json'},
           // body: JSON.stringify(codeRetrait.infoCodeRetrait)
          })
          .then( res => res.json())
          .then(
            res => {   
            console.log(res)
            props.dataMonthlyRapport(res)
            props.setMois(moisEnvoie.infomoisEnvoie.moisInfo)
            }
          )
          .catch( (error) =>
            {
                console.log(error)
            } )
       
                
    }

    const inputChanged = (event)=>
    {
         const cred = moisEnvoie.infomoisEnvoie ;
         cred[event.target.name] = event.target.value;
         setMoisEnvoie({infomoisEnvoie:cred})
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
        <Form.Control name="moisInfo"  type="month" onChange={e=>inputChanged(e)}  />
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/monthly_rapport_envoie" style={{color:'white',textDecorationLine:'none'}}>
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
        <Form.Control name="moisInfo"  type="month" onChange={e=>inputChanged(e)}  />
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


export default SelectMoisFormEnvoie;