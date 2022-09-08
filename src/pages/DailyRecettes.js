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



function DailyRecettes(props)
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

const total_montant_beneficiaire = props.dailyRapport.reduce((total,value)=>
{
  console.log(value.taille_province)
  total = total + parseInt(value.montant_beneficiaire)
  return total
},0)

const total_frais_envoie = props.dailyRapport.reduce((total,value)=>
{
  total=total + parseInt(value.frais_envoie)
  return total
},0)

const total_frais_tva = props.dailyRapport.reduce((total,value)=>
{
  total=total + parseInt(value.frais_tva)
  return total
},0)

const total_montant = props.dailyRapport.reduce((total,value)=>
{
  total=total + parseInt(value.montant_total)
  return total
},0)
  
  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table des Recettes Journalière</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Date</th>
          <th>Montant Beneficiaire</th>
          <th>Frais Envoie</th>
          <th>Frais TVA</th>
          <th>Montant Total Payé</th>
        </tr>
      </thead>
      <tbody>
        {props.dailyRapport.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><i ><b>{props.dateInfo}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed()) }</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.frais_envoie).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.frais_tva).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.montant_total).toFixed())}</b></i></td>
            </tr>     
        }) 
        }
       <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_frais_envoie).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_frais_tva).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_montant).toFixed())}</b></i></td>
       </tr>
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={message} >
        Imprimer les informations
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

export default DailyRecettes;