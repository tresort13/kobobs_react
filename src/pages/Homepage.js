import React from 'react';
import Container from "react-bootstrap/esm/Container";
import { Link,useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useEffect,useState} from 'react';
import SessionOut from './SessionOut';

function Homepage(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      console.log(props.isAdmin)
      const [modalShow, setModalShow] = React.useState(false);

      const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
  
    const access = ()=>
    {
      setModalShow(true)
    }

 
    return (
    <>
    <Header username={props.username}/>
       {isDesktop && <Container className="mt-4 mb-5">
        <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_envoie">
              <Image src={require('./envoi.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Envoi Argent</i></p>
              </div>
             </div>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              <Link to="/form_retrait">
              <Image src={require('./retrait.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Retrait Argent</i></p>
              </div>
             </div>          
            </Col>

            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_gestion_operation">
              <Image src={require('./kobo_operation.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestions Operations</i></p>
              </div>
             </div>   
            </Col>


           
        </Row>

        <Row className="text-center justify-content-center mt-3 ">
       

            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              {props.isAdmin ? <Link to="/menu_gestion_abonne">
              <Image src={require('./kobo_client.jpg')}  className='rounded-pill' style={{width:200}}></Image>
              </Link> : <Link to="">
              <Image src={require('./kobo_client.jpg')}  className='rounded-pill' style={{width:200}} onClick={access}></Image>
              </Link>}
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Service Clients</i></p>
              </div>
             </div>
              
            </Col>



            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom pt-1 bordure2" style={{width:300}}>
              <div>
              {props.isAdmin ? <Link to="/menu_gestion_recettes">
              <Image src={require('./kobo_autres.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link> : <Link to="">
              <Image src={require('./kobo_autres.png')}  className='rounded-pill' style={{width:200}} onClick={access}></Image>
              </Link>}
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestions Recettes </i></p>
              </div>
             </div>
              
            </Col>

            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              {props.isAdmin  ? <Link to="/menu_users">
              <Image src={require('./user_kobo.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link> : <Link to="">
              <Image src={require('./user_kobo.png')}  className='rounded-pill' style={{width:200}} onClick={access}></Image>
              </Link>}
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestions Utilisateurs</i></p>
              </div>
             </div>
              
            </Col>

        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>

       </Container>}

       {isMobileOrTablet && <Container className=" mb-5 mt-5 pt-5">
       <Row className="text-center justify-content-center">
            <Col md={12} className="my-auto text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:350,height:300}} className='btn-lg rounded-pill zoom' onClick={handleShow}>
            <i className="couleur2"><b>MENU</b></i>
            </Button>
            </Link>    
            </Col>

           </Row>

           <Offcanvas show={show} onHide={handleClose}  style={{height:550}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-end"><b><u>Menu</u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/menu_envoie"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Envoi Argent</i></Button></Nav.Link>
        <Nav.Link href="/form_retrait"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Retrait Argent</i></Button></Nav.Link>
        {props.isAdmin  ? <Nav.Link href="/menu_gestion_abonne"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Service Clients</i></Button></Nav.Link> :<Nav.Link href=""><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning' onClick={access}><i>Service Clients</i></Button></Nav.Link> }
        <Nav.Link href="/menu_gestion_operation"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Gestion Operations</i></Button></Nav.Link>
        {props.isAdmin == true  ?  <Nav.Link href="/menu_gestion_recettes"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Gestion Recettes</i></Button></Nav.Link> : <Nav.Link href=""><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning' onClick={access}><i>Gestion Recettes</i></Button></Nav.Link>}
        {props.isAdmin == true  ? <Nav.Link href="/menu_users"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Gestion Utilisateurs</i></Button></Nav.Link> : <Nav.Link href=""><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning' onClick={access}><i>Gestion Utilisateurs</i></Button></Nav.Link>}
      </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    
       </Container>}
   <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
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
          
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p className='text-danger'><b>Accès Refusé !!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Homepage;