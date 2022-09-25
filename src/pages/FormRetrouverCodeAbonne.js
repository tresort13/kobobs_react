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
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';
import SessionOut from './SessionOut';




const useState = React.useState
function FormRetrouverCodeAbonne(props)
{

    const[numeroAbonne,setNumeroAbonne] = useState({infoNumeroAbonne :{
        numero :"",
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    const [message,setMessage] = useState("Veuillez entrer le code abonné ou téléphone de l'abonné")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitNumero = (e)=>
    {
          e.preventDefault()
          setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/getAbonneInfo/'+numeroAbonne.infoNumeroAbonne.numero+'/', {
                method:'GET',
                headers: {'Content-Type': 'application/json'},
               // body: JSON.stringify(codeRetrait.infoCodeRetrait)
              })
              .then( res => res.json())
              .then(
                res => {   
                    console.log(res)
                   props.dataAbonneInfo(res)
                   navigate('/abonne_code_info')
                   
                }
              )
              .catch( (error) =>
                {
                    setModalShow(true)
                    console.log(error)
                } )

                

                setNumeroAbonne({infoNumeroAbonne:{numero:""}})
    }

    const inputChanged = (event)=>
    {
        const cred = numeroAbonne.infoNumeroAbonne;
        cred[event.target.name] = event.target.value;
        setNumeroAbonne({infoNumeroAbonne:cred})
    }



   
    return (
        
        <>
        <Header username={props.username} />
{isDesktop && <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitNumero}>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="numero" value={numeroAbonne.infoNumeroAbonne.numero} onChange={e=>inputChanged(e)} type="text" placeholder="entrer le code abonné ou téléphone de l'abonné" autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="outline-warning" type="submit">
        Valider 
        </Button>
        </Col>
    </Row>
  


</Form>
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto mt-5'  >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitNumero}>
    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Code Abonné ou Téléphone Abonné</Form.Label>
        <Form.Control name="numero" value={numeroAbonne.infoNumeroAbonne.numero} onChange={e=>inputChanged(e)} type="text" placeholder="entrer le code abonné ou téléphone de l'abonné" autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="outline-warning" type="submit">
        Valider 
        </Button>
        </Col>
    </Row>
  


</Form>
</Container> }
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<SessionOut setIsadmin={props.setIsadmin}/>
<Footer />
        </>
       
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Echec de Validation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p className='text-danger'><b>Désolé ce numéro de phone ou code abonné n'existe pas !!!</b>   
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
  

export default FormRetrouverCodeAbonne;