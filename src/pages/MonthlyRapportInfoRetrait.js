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



const useState = React.useState
function MonthlyRapportInfoRetrait(props)
{

    const [message,setMessage] = useState("Rapport Mensuel des Retrait")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
      const navigate = useNavigate()
    

     

      const nombre_retrait_paye = props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait === "Code Retrait Payé"
      }).reduce((total,value)=>
      {
        total = total + 1
        return total
      },0)
 
 
      const nombre_retrait_valide = props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait === "Code Retrait Valide"
      }).reduce((total,value)=>
      {
        total = total + 1
        return total
      },0)
 
      const nombre_retrait_nonvalide = props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait === "code retrait en attente de validation"
      }).reduce((total,value)=>
      {
        total = total + 1
        return total
      },0)
  
    
      


      const detailPaye =()=>
      {
       props.dataDetailEnvoieTotal(props.monthlyRapport.filter((value)=>
       {
         return value.status_retrait === "Code Retrait Payé"
       }))
      }
 
      const detailValide =()=>
      {
       props.dataDetailEnvoieTotal(props.monthlyRapport.filter((value)=>
       {
         return value.status_retrait === "Code Retrait Valide"
       }))
      }
 
      const detailNonValide =()=>
      {
       props.dataDetailEnvoieTotal(props.monthlyRapport.filter((value)=>
       {
         return value.status_retrait === "code retrait en attente de validation"
       }))
        
      }

   
    return (
        
        <>
        <Header username={props.username} />
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
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
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Type de Rapport: <b className='couleur2'>Mensuel</b> </p>
        <p className='text-light'>Date : <b className='couleur2'>{props.moisInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Rapport</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-light'>Nombres des retraits payés : <b className='couleur2'> {nombre_retrait_paye}</b> </p>
        <p className='text-light'>Nombres des retraits validés : <b className='couleur2'> {nombre_retrait_valide}</b> </p>
        <p className='text-light'>Nombres des retraits non validés : <b className='couleur2'> {nombre_retrait_nonvalide}</b></p>
        </Col>

        <Col xs={6}>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailPaye}>Voir Details </p></Link>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailValide}>Voir Details </p></Link>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailNonValide}>Voir Details </p></Link>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Fermer
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    

</Container>
}

{isMobileOrTablet && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
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
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Type de Rapport: <b className='couleur2'>Journalier</b> </p>
        <p className='text-light'>Date : <b className='couleur2'>{props.dateInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Rapport</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-light'>Nombres des retraits payés : <b className='couleur2'> {nombre_retrait_paye}</b> </p>
        <p className='text-light'>Nombres des retraits validés : <b className='couleur2'> {nombre_retrait_valide}</b> </p>
        <p className='text-light'>Nombres des retraits non validés : <b className='couleur2'> {nombre_retrait_nonvalide}</b></p>
        </Col>

        <Col xs={6}>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailPaye}>Voir Details </p></Link>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailValide}>Voir Details </p></Link>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailNonValide}>Voir Details </p></Link>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/confirmation_envoie_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Fermer
        </Button>
        </Link>
        </Col>
        
    </Row>   
</Container>}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<Footer />
        </>
       
    )
}

export default MonthlyRapportInfoRetrait;