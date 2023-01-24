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
import SessionOut from './SessionOut';



function MenuUsers(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });   
      
      
      const submit = ()=>
      {
          fetch('https://kobobsapi.herokuapp.com/api/getUsersInfo/', {
              method:'GET',
              headers: {'Content-Type': 'application/json'},
             // body: JSON.stringify(codeRetrait.infoCodeRetrait)
            })
            .then( res => res.json())
            .then(
              res => {   
              console.log(res)
              props.dataUserInfo(res)
        
              }
            )
            .catch( (error) =>
              {
                  console.log(error)
              } )
         
                  
      }

    return (
<>
<Header username={props.username} isAdmin={props.isAdmin}/>
{isDesktop && <Container >
    
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/users_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  onClick={submit} style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Utilisateurs</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <a href='https://kobobsapi.herokuapp.com/admin/' target='_blank'  style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'>Parametres Utilisateurs<pre></pre></b>
        </Button>
        </a>
        </Col>
    </Row>
  

</Container>}

{isMobileOrTablet && <Container>
    
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {12}>
        <Link to="/users_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  onClick={submit} style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Utilisateurs</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {12}>
        <a href='https://kobobsapi.herokuapp.com/admin/' target='_blank'  style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'>Parametres Utilisateurs<pre></pre></b>
        </Button>
        </a>
        </Col>
    </Row>
  

</Container> }
<SessionOut setIsadmin={props.setIsadmin}/>
<Footer />
</>
    )
}

export default MenuUsers;