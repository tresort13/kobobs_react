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
import Footer from './Footer';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from './Header';
import SessionOut from './SessionOut';



const useState = React.useState
function FormEnvoiClient(props)
{

    const[envoie,setEnvoie] = useState({infoEnvoie :{
    nom_expediteur : props.envoie.infoEnvoie.nom_expediteur,
    prenom_expediteur : props.envoie.infoEnvoie.prenom_expediteur,
    adresse_expediteur : props.envoie.infoEnvoie.adresse_expediteur,
    email_expediteur : props.envoie.infoEnvoie.email_expediteur,
    numero_expediteur: props.envoie.infoEnvoie.numero_expediteur,
    pays_expediteur : props.envoie.infoEnvoie.pays_expediteur,
    nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
    prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
    pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
    montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
    type_service : props.envoie.infoEnvoie.type_service,
    numero_transfer : props.envoie.infoEnvoie.numero_transfer
    }})

    const [validated, setValidated] = useState(false);
    const [message,setMessage] = useState("Formulaire Envoi Client")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
     

      const navigate = useNavigate()
    
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
        props.dataEnvoie(envoie.infoEnvoie)
         navigate('/envoi_info')
      
    }

    

    const inputChanged = (event)=>
    {
      
        const cred = envoie.infoEnvoie;
        cred[event.target.name] = event.target.value;
        setEnvoie({infoEnvoie:cred})
    }

   
    return (
        
        <>
        <Header username={props.username} isAdmin={props.isAdmin}/>
{isDesktop && <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
<Form  onSubmit={submitFormulaire}>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Expediteur Informations</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Prénom</Form.Label>
        <Form.Control name="prenom_expediteur" value={envoie.infoEnvoie.prenom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Prenom'  required/>

         </Form.Group>
        </Col>

        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Nom</Form.Label>
        <Form.Control name="nom_expediteur" value={envoie.infoEnvoie.nom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Nom'    required/>
         </Form.Group>
        </Col>

        

       
    </Row>

    <Row className='justify-content-center'>
    
       <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Adresse</Form.Label>
        <Form.Control name="adresse_expediteur" value={envoie.infoEnvoie.adresse_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Adresse'  required/>
        
         </Form.Group>
        </Col>


        <Col xs = {4}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Email</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur" value={envoie.infoEnvoie.email_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Email' required/>
        
      </InputGroup>
        </Col>


        <Col xs = {4}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Numéro Téléphone</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">+44</InputGroup.Text>
        
        <Form.Control name="numero_expediteur" value={envoie.infoEnvoie.numero_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro Téléphone' required/>
        </InputGroup>
        </Col>
        
    </Row>
    <Row className='justify-content-center'>
        
        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Pays</Form.Label>
        <Form.Select name='pays_expediteur' value={envoie.infoEnvoie.pays_expediteur} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value="UK">UK</option>
         </Form.Select>
         
         </Form.Group>
        </Col>
       
    </Row>

    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Beneficiare Informations</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Prénom</Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoie.infoEnvoie.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Prénom'  required/>
       
         </Form.Group>
        </Col>

    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Nom</Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoie.infoEnvoie.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Nom'    required/>
        
         </Form.Group>
        </Col>



        
    </Row>

    <Row className='justify-content-center'>
  

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Pays</Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoie.infoEnvoie.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value="RD Congo">RD Congo</option>
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
        <Form.Label className='text-dark'><span className="text-danger">*</span> Montant à récuperer</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoie.infoEnvoie.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Montant à récuperer"  required/>

         </Form.Group>
        </Col>

        

        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Type de retrait</Form.Label>
        <Form.Select name="type_service" value={envoie.infoEnvoie.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value="Kozua na maboko (kozua na nzela ya agence)">Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         </Form.Select>
         </Form.Group>
        </Col>

        {envoie.infoEnvoie.type_service == "Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
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

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
<Form  onSubmit={submitFormulaire}>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Expediteur Informations</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Prénom</Form.Label>
        <Form.Control name="prenom_expediteur" value={envoie.infoEnvoie.prenom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Prenom'  required/>

         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Nom</Form.Label>
        <Form.Control name="nom_expediteur" value={envoie.infoEnvoie.nom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Nom'    required/>
         </Form.Group>
        </Col>

        
    </Row>

    <Row className='justify-content-center'>
    
       <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Adresse</Form.Label>
        <Form.Control name="adresse_expediteur" value={envoie.infoEnvoie.adresse_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Adresse'  required/>
        
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Email</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur" value={envoie.infoEnvoie.email_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Email' required/>
        
      </InputGroup>
        </Col>

        <Col xs = {12}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Numéro Téléphone</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">+44</InputGroup.Text>
        
        <Form.Control name="numero_expediteur" value={envoie.infoEnvoie.numero_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro Téléphone' required/>
        </InputGroup>
        </Col>
        
    </Row>
    <Row className='justify-content-center'>
        
        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Pays</Form.Label>
        <Form.Select name='pays_expediteur' value={envoie.infoEnvoie.pays_expediteur} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value="UK">UK</option>
         </Form.Select>
         
         </Form.Group>
        </Col>
       
    </Row>

    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Beneficiare Informations</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Prénom</Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoie.infoEnvoie.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Prénom'  required/>
       
         </Form.Group>
        </Col>


    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Nom</Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoie.infoEnvoie.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Nom'    required/>
        
         </Form.Group>
        </Col>


    </Row>

    <Row className='justify-content-center'>
    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Adresse</Form.Label>
        <Form.Control name="adresse_beneficiaire" value={envoie.infoEnvoie.adresse_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Adresse'  required/>
       
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Numéro Téléphone</Form.Label>
        <Form.Control name="numero_beneficiaire" value={envoie.infoEnvoie.numero_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro Téléphone' required/>
       
         </Form.Group>
        </Col>

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Pays</Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoie.infoEnvoie.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value="RD Congo">RD Congo</option>
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
        <Form.Label className='text-dark'><span className="text-danger">*</span> Montant à récuperer</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoie.infoEnvoie.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Montant à récuperer"  required/>

         </Form.Group>
        </Col>

        

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Type de retrait</Form.Label>
        <Form.Select name="type_service" value={envoie.infoEnvoie.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value="Kozua na maboko (kozua na nzela ya agence)">Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         </Form.Select>
         </Form.Group>
        </Col>

        {envoie.infoEnvoie.type_service == "Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
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
</Container> }
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

export default FormEnvoiClient;