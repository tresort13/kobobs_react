import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from  'react-router-dom';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';



function UsersInfo(props)
{
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

            const message = ()=>
        {
            alert(" désolé la page d'impression n'est pas encore disponible")
        }
console.log(props.userInfo)

  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='couleur2'>Informations Utilisateur(s)</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
          <th>Nom Utilisateur</th>
          <th>email</th>
          <th>Administrateur</th>
          <th>Dernière Connexion</th>
          <th>Date de Creation</th>
        </tr>
      </thead>
      <tbody>
        {props.userInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}} >
             <td><i><b className="text-dark">{value.username}</b></i></td>
             <td><i><b className="text-dark">{value.email}</b></i></td>
             <td><i><b className="text-dark">{JSON.stringify(value.is_superuser)}</b></i></td>
             <td><i><b className="text-dark">{value.last_login}</b></i></td>
             <td><i><b className="text-dark">{value.date_joined}</b></i></td>
            </tr>     
        }) 
        }
      
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={message} >
        Imprimer 
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>


</Container>}

{isMobileOrTablet && <Container fluid className='bg-light justify-content-center text-center borders mx-auto my-auto' >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='couleur2'>Informations Utilisateur(s)</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
          <th>Nom Utilisateur</th>
          <th>email</th>
          <th>Administrateur</th>
        </tr>
      </thead>
      <tbody>
        {props.userInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}} >
             <td><i><b className="text-dark">{value.username}</b></i></td>
             <td><i><b className="text-dark">{value.email}</b></i></td>
             <td><i><b className="text-dark">{JSON.stringify(value.is_superuser)}</b></i></td>
            </tr>     
        }) 
        }
      
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={message} >
        Imprimer 
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>


</Container>}


<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
</div>
<Footer />
        </>
    )
}

export default UsersInfo;