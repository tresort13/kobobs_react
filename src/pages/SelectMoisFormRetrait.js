import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link,useNavigate} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';

const useState = React.useState

function SelectMoisFormRetrait(props)
{
    const[moisEnvoie,setMoisEnvoie] = useState({infomoisEnvoie :{
        moisInfo:""
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

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
      e.preventDefault()
      setModalShow2(true)
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
            navigate('/monthly_rapport_retrait')
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
         const cred = moisEnvoie.infomoisEnvoie ;
         cred[event.target.name] = event.target.value;
         setMoisEnvoie({infomoisEnvoie:cred})
    }

return (
    <>
    <Header username={props.username}/>

{isDesktop && <Container className='bg-light justify-content-center text-center' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={6}>
        <p className="text-dark"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
<Form onSubmit={submitVol}>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="moisInfo"  type="month" onChange={e=>inputChanged(e)}  required/>
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="outline-warning" type="submit">
        Valider 
        </Button>
        </Col>
    </Row>
</Form>
</Container>}

{isMobileOrTablet &&  <Container className='bg-light justify-content-center text-center mx-auto mt-5' >
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={12}>
        <p className="text-dark"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
<Form onSubmit={submitVol}>
   

    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="moisInfo"  type="month" onChange={e=>inputChanged(e)}  required/>
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="outline-warning" type="submit">
        Valider 
        </Button>
        </Col>
    </Row>
</Form>
</Container> }
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
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

          <p className='text-danger'><b>Désolé veuillez selectionner le mois  !!!</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Veuillez Patienter...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ClipLoader color={"#ff8c00"} loading={true} size={150} /> 
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
  


export default SelectMoisFormRetrait;