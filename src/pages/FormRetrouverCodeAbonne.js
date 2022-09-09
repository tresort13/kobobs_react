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



const useState = React.useState
function FormRetrouverCodeAbonne(props)
{

    const[numeroAbonne,setNumeroAbonne] = useState({infoNumeroAbonne :{
        numero :"",
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);

    const [message,setMessage] = useState("Veuillez entrer le code abonné ou téléphone de l'abonné")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitNumero = ()=>
    {
              
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
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:100,width:750}} >
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
    
<Form>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Code Abonné ou Téléphone Abonné</Form.Label>
        <Form.Control name="numero" value={numeroAbonne.infoNumeroAbonne.numero} onChange={e=>inputChanged(e)} type="text" placeholder="entrer le code abonné ou téléphone de l'abonné" autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit"  onClick={submitNumero}>
        Valider 
        </Button>
        </Link>
        </Col>
    </Row>
  


</Form>
</Container>
}

{isMobileOrTablet && <Container className='bg-dark my-auto mx-auto justify-content-center text-center bordure mb-5' style={{marginTop:50,backgroundColor:'white'}} >
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
    
<Form>
   

<Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Code Abonné ou Téléphone Abonné</Form.Label>
        <Form.Control name="numero" value={numeroAbonne.infoNumeroAbonne.numero} onChange={e=>inputChanged(e)} type="text" placeholder="entrer le code abonné ou téléphone de l'abonné" autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Link to="/abonne_code_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit"  onClick={submitNumero}>
        Valider 
        </Button>
        </Link>
        </Col>
    </Row>
  





</Form>
</Container>}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
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
          <p className='text-danger'><b>Désolé l'information n'est correcte !!!</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default FormRetrouverCodeAbonne;