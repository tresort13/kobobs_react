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


function Homepage(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
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
              <Link to="/menu_retrait">
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
              <Image src={require('./kobo_audit.jpg')}  className='rounded-pill' style={{width:200}}></Image>
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
              <Link to="/menu_gestion_abonne">
              <Image src={require('./kobo_client.jpg')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestions Abonnes</i></p>
              </div>
             </div>
              
            </Col>


            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom pt-1 bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_parametre">
              <Image src={require('./kobo_autres.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Parametres </i></p>
              </div>
             </div>
              
            </Col>

            <Col md={4} className="my-auto text-center">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_users">
              <Image src={require('./user_kobo.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
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

       {isMobileOrTablet && <Container className="my-auto mt-3 justify-content-center mb-5">
        
            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="my-auto  mb-5">
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
            </Row>
           
            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="my-auto text-center justify-content-center mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_retrait">
              <Image src={require('./retrait.png')}  className='rounded-pill' style={{width:180}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Retrait Argent</i></p>
              </div>
             </div>          
            </Col>
            </Row>
        
            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_gestion_operation">
              <Image src={require('./kobo_audit.jpg')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestions Operations</i></p>
              </div>
             </div>   
            </Col>
            </Row>
        

            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className=" mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_gestion_abonne">
              <Image src={require('./kobo_client.jpg')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestions Abonnes</i></p>
              </div>
             </div>
              
            </Col> 
            </Row>


            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom pt-1 bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_parametre">
              <Image src={require('./kobo_autres.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Parametres </i></p>
              </div>
             </div>
              
            </Col>
            </Row>

            <Row className="my-auto text-center justify-content-center ">
            <Col xs={"auto"} className="mb-5">
             <div className="d-grid bg-white text-center justify-content-center rounded-pill zoom bordure2" style={{width:300}}>
              <div>
              <Link to="/menu_users">
              <Image src={require('./user_kobo.png')}  className='rounded-pill' style={{width:200}}></Image>
              </Link>
              </div>

              <div>
              <p className="display-6 text-dark text-center"  style={{fontSize:20}}><i>Gestions Utilisateurs</i></p>
              </div>
             </div>
              
            </Col>
            </Row>

       </Container>}
       <Footer />
       </>


        
    )
}

export default Homepage;