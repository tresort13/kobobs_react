import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import InputGroup from 'react-bootstrap/InputGroup';
import SessionOut from './SessionOut';




const useState = React.useState
function FormEnvoiAbonne(props)
{

    const[envoieAbonne,setEnvoieAbonne] = useState({infoEnvoieAbonne :{
      nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
      prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
      pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
      montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
      type_service : props.envoie.infoEnvoie.type_service,
      numero_transfer : props.envoie.infoEnvoie.numero_transfer
        }})
    

    const [message,setMessage] = useState("Formulaire d'Envoi Abonné")
    const [couleur,setCouleur] = useState("text-dark")
    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
      
    
      const tauxEchanger = ()=>
      {
        fetch('https://openexchangerates.org/api/latest.json?app_id=41351d88e53f4f0c89785fba9fc60ca0&symbols=GBP', {
                  method:'GET',
                  headers: {'Content-Type': 'application/json'},
                 
                })
                .then( res => res.json())
                .then(
                  res => {  
                    props.setTaux(res.rates.GBP) 
                     console.log(res.rates.GBP)
                  }
                )
                .catch( (error) =>
                  {
                      console.log(error)
                  } )
      }
    


      const submitFormulaire = (e)=>
      {   
        e.preventDefault()  
        tauxEchanger()     
        props.dataEnvoieAbonne(props.abonne,envoieAbonne.infoEnvoieAbonne)   
        console.log(props.abonne) 
        setEnvoieAbonne({infoEnvoieAbonne:{}})
        navigate('/envoi_abonne_info')
      }
  
      const inputChanged = (event)=>
      {
          const cred = envoieAbonne.infoEnvoieAbonne;
          cred[event.target.name] = event.target.value;
          setEnvoieAbonne({infoEnvoieAbonne:cred})
      }
     
    return (
        
        <>
        <Header username={props.username} isAdmin={props.isAdmin}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
<Col xs={6}>
        <p ><i><b className='text-dark'>Code Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.code_abonne}</b></i></p>
        </Col>
        <Col xs={6}>
        <p ><i><b className='text-dark'>Noms Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} {props.abonne.infoAbonne.postnom_expediteur}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitFormulaire}>
      <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u> Beneficiare Informations</u></b></p>
    </Row>
    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'><span className='text-danger'>*</span> Prénom</Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Prénom'  required/>
         </Form.Group>
        </Col>

    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> Nom</Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Nom'  required/>
         </Form.Group>
        </Col>



        
    </Row>

    <Row className='justify-content-center'>


        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Pays</Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoieAbonne.infoEnvoieAbonne.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value='RD Congo'>RD Congo</option>
        
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Montant Informations</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> Montant à récuperer</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Montant à récuperer"  required/>
         </Form.Group>
        </Col>

        

        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Type de retrait</Form.Label>
        <Form.Select name="type_service" value={envoieAbonne.infoEnvoieAbonne.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value='Kozua na maboko (kozua na nzela ya agence)'>Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        {envoieAbonne.infoEnvoieAbonne.type_service == "Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Numéro de transfert  </Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">+243</InputGroup.Text>
        <Form.Control name="numero_transfer"  onChange={e=>inputChanged(e)} type="text" placeholder='Numéro de transfert'  required/>
        </InputGroup>
        </Col> : <span></span>}
    </Row>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="warning" type="submit">
        Valider Informations
        </Button>
        </Col>
    </Row>
  
  


</Form>
</Container>
}

{isMobileOrTablet &&  <Container className='bg-dark justify-content-center text-center  mb-5' >
<Row className='justify-content-center mb-3 pt-3' >
<Col xs={6}>
        <p ><i><b className='text-light'>Code Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.code_abonne}</b></i></p>
        </Col>
        <Col xs={6}>
        <p ><i><b className='text-light'>Noms Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitFormulaire}>
      <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u> Beneficiare Informations</u></b></p>
    </Row>
    <Row className='justify-content-center'>
    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> Prénom</Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Prénom'  required/>
         </Form.Group>
        </Col>

    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> Nom</Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Nom'  required/>
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'> Postnom (optional)</Form.Label>  
        <Form.Control name="postnom_beneficiaire"  onChange={e=>inputChanged(e)} type="text" placeholder='Postnom' />
         </Form.Group>
        </Col>

       
    </Row>

    <Row className='justify-content-center'>
   

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Pays</Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoieAbonne.infoEnvoieAbonne.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value='RD Congo'>RD Congo</option>
        
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Montant Informations</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> Montant à récuperer</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Montant à récuperer"  required/>
         </Form.Group>
        </Col>

        

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Type de retrait</Form.Label>
        <Form.Select name="type_service" value={envoieAbonne.infoEnvoieAbonne.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value='Kozua na maboko (kozua na nzela ya agence)'>Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        {envoieAbonne.infoEnvoieAbonne.type_service == "Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Numéro de transfert  </Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">+243</InputGroup.Text>
        <Form.Control name="numero_transfer"  onChange={e=>inputChanged(e)} type="text" placeholder='Numéro de transfert'  required/>
        </InputGroup>
        </Col> : <span></span>}
    </Row>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="warning" type="submit">
        Valider Informations
        </Button>
        </Col>
    </Row>
  
  


</Form>
</Container>}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
        <SessionOut setIsadmin={props.setIsadmin}/>
<Footer />
        </>
       
    )
}

export default FormEnvoiAbonne;