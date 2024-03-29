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
import Badge from 'react-bootstrap/Badge';
import React,{ useEffect } from 'react';
import SessionOut from './SessionOut';

const useState = React.useState
function MenuAbonne(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });  
      
    const [count,setCount] = useState(0)

    const submit = ()=>
    {
              
        fetch('https://kobobsapi.herokuapp.com/api/getRetraitNonValideInfo/code retrait en attente de validation/', {
                method:'GET',
                headers: {'Content-Type': 'application/json'},
               // body: JSON.stringify(codeRetrait.infoCodeRetrait)
              })
              .then( res => res.json())
              .then(
                res => {  
                   setCount(res.length)
                   console.log(res)
                }
              )
              .catch( (error) =>
                {
                    console.log(error)
                } )

    }

    useEffect(()=>
    {
       const interval =  setInterval(()=>submit(),1000);
        return () => clearInterval(interval)
    },[])


    return (
<>
<Header username={props.username} isAdmin={props.isAdmin}/>
{isDesktop && <Container >
    
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_abonne_non_valide" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom' onClick={submit}>
        {count > 0 ? <b className='text-dark'><pre>Formulaires Clients non validé <Badge bg="danger">{count}</Badge></pre> </b> : <b className='couleur2'><pre>Formulaires Clients non validé </pre></b>}
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_retrouver_abonne" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Retrouver un Abonné</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container> }

{isMobileOrTablet && <Container >
    
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {12}>
        <Link to="/form_abonne_non_valide" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:50}} className='btn-lg rounded-pill zoom' onClick={submit}>
        {count > 0 ? <b className='text-dark'><pre>Formulaires Clients non validé <Badge bg="danger">{count}</Badge></pre> </b> : <b className='couleur2'><pre>Formulaires Clients non validé </pre></b>}
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {12}>
        <Link to="/form_retrouver_abonne" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:50}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Retrouver un Abonné</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container>}
<SessionOut setIsadmin={props.setIsadmin}/>
<Footer />
</>
    )
}

export default MenuAbonne;