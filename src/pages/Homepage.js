import React from 'react';
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
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


function Homepage(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      const [modalShow, setModalShow] = React.useState(false);

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
              {props.username == "makabagisele@" ? <Link to="/menu_gestion_abonne">
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


           
        </Row>

        <Row className="text-center justify-content-center mt-3 ">
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



            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom pt-1 bordure2" style={{width:300}}>
              <div>
              {props.username == "makabagisele@" ? <Link to="/menu_gestion_recettes">
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
              {props.username == "makabagisele@" ? <Link to="/menu_users">
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
            <Button variant="warning" style={{width:400,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>MENU</b></i>
            </Button>
            </Link>    
            </Col>

           </Row>
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