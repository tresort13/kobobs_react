import Container from "react-bootstrap/esm/Container";
import { Link,useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {useEffect,useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { useMediaQuery } from 'react-responsive';
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';







function Header(props)
{
    const [theTime, setTheTime] = useState(new Date().toLocaleString())
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });

    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);

    const access = ()=>
    {
      setModalShow(true)
    }


    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])

    const logout = ()=>
    {
      window.localStorage.setItem("username", JSON.stringify(""))
      window.localStorage.setItem("isAdmin", false)
      navigate('/')
    }
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark mx-auto" >
    <Row>
    <Col xs={2} className="my-auto mx-auto text-center justify-content-center">
          <Link to="/home" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
          </Link>
        </Col>

        <Col xs={2} className="my-auto mx-auto text-start">
        {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-1">
          <Container>
            <Navbar.Toggle className="couleur"   aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" style={{height:550}} >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <pre className="display-6"><b>Menu</b></pre>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown.Divider />
                  <Nav.Link href="/home"><b><pre>Home</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_envoie"><b><pre>Envoi Argent</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_retrait"><b><pre>Retrait Argent</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  {props.isAdmin ? <Nav.Link href="/menu_gestion_abonne"><b><pre>Gestion Clients</pre></b></Nav.Link> : <Nav.Link href=""><b><pre onClick={access}>Gestion Clients</pre></b></Nav.Link> }
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_operation"><b><pre>Gestion Operations</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_recettes"><b><pre>Gestion Recettes</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_users"><b><pre>Gestion Utilisateurs</pre></b></Nav.Link>
                  <NavDropdown.Divider />


                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>

        <Col xs={4} className="my-auto mx-auto my-auto text-center">
          <Link to="/home" style={{textDecoration:"none"}}>
          <p className="display-6 text-secondary">KOBOBS</p>
          </Link>
        </Col>
        
        <Col xs={4} className="my-auto mx-auto text-end ">
         <div>
           <pre className="text-dark display-6" style={{fontSize: 20}}><span ><i className="text-white"><b className="couleur2">{props.username}</b></i> </span><span className="separateur text-secondary"></span><a href="" style={{textDecoration:"none"}}><span className="text-danger"><i onClick={logout}> Logout </i> </span></a></pre>
           <i><pre className="couleur2 display-6 timing text-end" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
    
   </Container>}


   {isMobileOrTablet && <Container className="pt-2 bg-dark" fluid >
    <Row>
        
        <Col xs={"auto"} className="mx-auto my-auto text-center">
        <a href="#" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:80}}></Image>
          </a>
        </Col>
     </Row>

    <Row className="mt-2">
        <Col xs={"auto"} className=" mx-auto my-auto text-start ">
        {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-1">
          <Container>
            <Navbar.Toggle className="couleur"   aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" style={{height:550}} >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <pre className="display-6"><b>Menu</b></pre>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown.Divider />
                <Nav.Link href="/home"><b><pre>Home</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_envoie"><b><pre>Envoi Argent</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_retrait"><b><pre>Retrait Argent</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  {props.isAdmin ? <Nav.Link href="/menu_gestion_abonne"><b><pre>Gestion Clients</pre></b></Nav.Link> : <Nav.Link href=""><b><pre onClick={access}>Gestion Clients</pre></b></Nav.Link> }
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_operation"><b><pre>Gestion Operations</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_recettes"><b><pre>Gestion Recettes</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_users"><b><pre>Gestion Utilisateurs</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <br></br>
                  <Nav.Link href="#" className="text-danger mt-2" onClick={logout}><b>Deconnexion</b></Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>

        <Col xs={"auto"} className=" mx-auto my-auto text-end">
         <div>
           <pre className="text-dark display-6 text-end" style={{fontSize: 20}}><span ><i className="couleur2">{props.username}</i> </span></pre>
           <i><pre className="couleur2 display-6  text-end" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>  
    </Row>
   
    <Offcanvas show={show} onHide={handleClose} className="bordure " style={{height:550}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-end"><b><u>Menu</u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/menu_envoie"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Envoi Argent</i></Button></Nav.Link>
        <Nav.Link href="/form_retrait"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Retrait Argent</i></Button></Nav.Link>
        <Nav.Link href="/menu_gestion_abonne"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Service Clients</i></Button></Nav.Link>
        <Nav.Link href="/menu_gestion_operation"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Gestion Operations</i></Button></Nav.Link>
        <Nav.Link href="/menu_gestion_recettes"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Gestion Recettes</i></Button></Nav.Link>
        <Nav.Link href="/menu_users"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Gestion Utilisateurs</i></Button></Nav.Link> 
      </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    
   </Container>}
   <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
   </div>

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

export default Header;