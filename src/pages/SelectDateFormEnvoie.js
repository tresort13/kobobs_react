import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const useState = React.useState

function SelectDateFormEnvoie(props)
{
    const[dateEnvoie,setDateEnvoie] = useState({infodateEnvoie :{
        dateInfo:""
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const [message,setMessage] = useState("Veuillez selectionner la date ")
    const [couleur,setCouleur] = useState("text-dark")

    const submitVol =(e)=>
    {
      e.preventDefault()
        fetch('https://kobobsapi.herokuapp.com/api/getDailyRapportInfo/'+dateEnvoie.infodateEnvoie.dateInfo+'/', {
            method:'GET',
            headers: {'Content-Type': 'application/json'},
           // body: JSON.stringify(codeRetrait.infoCodeRetrait)
          })
          .then( res => res.json())
          .then(
            res => {   
               console.log(res)
               props.dataDailyRapport(res)
               props.setDate(dateEnvoie.infodateEnvoie.dateInfo)
               navigate('/daily_rapport_envoie')
            }
          )
          .catch( (error) =>
            {
                setModalShow(true)
                console.log(error)
            } )
       
                
    }

    const inputChanged = (event)=>
    {
         const cred = dateEnvoie.infodateEnvoie ;
         cred[event.target.name] = event.target.value;
         setDateEnvoie({infodateEnvoie:cred})
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
    
    
<Form onSubmit={submitVol}>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateInfo"  type="date" onChange={e=>inputChanged(e)} required />
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>  
        <Button variant="outline-warning" type="submit" >
        Valider 
        </Button>
        </Col>
    </Row>
</Form>
</Container> }

{isMobileOrTablet &&  <Container className='bg-dark justify-content-center text-center bordure mt-5 mx-auto'>
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={12}>
        <p className="couleur2"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
<Form onSubmit={submitVol}>
   

    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateInfo"  type="date" onChange={e=>inputChanged(e)} required />
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>  
        <Button variant="outline-warning" type="submit" >
        Valider 
        </Button>
        </Col>
    </Row>
</Form>
</Container>}
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
            Echec de Validation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Message : </h4>
          <p className='text-danger'><b>Désolé veuillez selectionner une date   !!!</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default SelectDateFormEnvoie;