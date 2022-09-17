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


    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])

    const logout = ()=>
    {
      window.localStorage.setItem("username", JSON.stringify(""))
      navigate('/')
    }
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark mx-auto">
    <Row>
        <Col xs={4} className="my-auto mx-auto text-start">
        {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container>
            <Navbar.Toggle   aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" variant="warning"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>
        <Col xs={4} className="my-auto mx-auto text-start justify-content-start">
          <Link to="/home" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:180}}></Image>
          </Link>
        </Col>
        <Col xs={4} className="my-auto mx-auto text-end ">
         <div>
           <pre className="text-dark display-6" style={{fontSize: 20}}><Image className="navbar-brand rounded-circle" src={require('./login.jpeg')} type="button" alt="profil" style={{width:40}} ></Image><span ><i className="text-white"> Bonjour <b className="couleur2">{props.username}</b></i> </span><span className="separateur text-secondary"></span><a href="" style={{textDecoration:"none"}}><span className="text-danger"><i onClick={logout}> Logout </i> </span></a></pre>
           <i><pre className="couleur2 display-6 timing text-center" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
    
   </Container>}


   {isMobileOrTablet && <Container className="pt-2 bg-dark" fluid >
    <Row>
        
        <Col xs={"auto"} className="mx-auto my-auto text-center">
        <a href="#" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:150}}></Image>
          </a>
        </Col>
     </Row>

    <Row className="mt-2">
        <Col xs={"auto"} className=" mx-auto my-auto text-start ">
         <div>
         <Button variant="warning" className="btn-lg rounded zoom " onClick={handleShow}><b className="text-dark navbar-toggler"> Menu</b></Button>
        </div>  
        </Col>

        <Col xs={"auto"} className=" mx-auto my-auto text-end">
         <div>
           <pre className="text-dark display-6 text-end" style={{fontSize: 20}}><span ><i className="couleur2">{props.username}</i> </span><span className="separateur couleur2"></span><a href="" style={{textDecoration:"none"}}><span className="text-danger"><i onClick={logout}> Logout </i> </span></a></pre>
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
   </div>

    )
}

export default Header;