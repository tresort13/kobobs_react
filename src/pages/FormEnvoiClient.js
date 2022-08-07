import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import InputGroup from 'react-bootstrap/InputGroup';



const useState = React.useState
function FormEnvoiClient(props)
{

    const[envoie,setEnvoie] = useState({infoEnvoie :{
    nom_expediteur : '',
    postnom_expediteur : '',
    prenom_expediteur : '',
    email_expediteur : '',
    numero_expediteur: '',
    pays_expediteur : '',
    nom_beneficiaire : '',
    postnom_beneficiaire : '',
    prenom_beneficiaire : '',
    adresse_beneficiare : '',
    numero_beneficiaire : '',
    pays_beneficiaire : '',
    montant_envoie : '',
    montant_device : '',
    type_service : ''
    }})

    
        const[position,setPosition] = useState('')

    const [message,setMessage] = useState("Formulaire d'Envoie Client")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitBarcode = (e)=>
    {
        
        
        fetch('https://kobobsapi.herokuapp.com/api/envoieFormulaire/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => {   
                    console.log(res)
                }
              )
              .catch( (error) =>
                {
                    console.log(error)
                } )                

                setEnvoie({infoEnvoie:{}})
    }

    const inputChanged = (event)=>
    {
        const cred = envoie.infoEnvoie;
        cred[event.target.name] = event.target.value;
        setEnvoie({infoEnvoie:cred})
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
            <Link to="/tracer_baggages">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Motindi (Expediditaire Informations)</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo Ya Libota(Nom)</Form.Label>
        <Form.Control name="nom_expediteur" value={envoie.infoEnvoie.nom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Libota'    required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya authenticité (Postnom)</Form.Label>  
        <Form.Control name="postnom_expediteur" value={envoie.infoEnvoie.postnom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya authenticité' required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya Mukristu (Prénom)</Form.Label>
        <Form.Control name="prenom_expediteur" value={envoie.infoEnvoie.prenom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Label className='couleur2'>Email</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur" value={envoie.infoEnvoie.email_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Email' required/>
      </InputGroup>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Numéro ya Tshombo (Numéro Tél)</Form.Label>
        <Form.Control name="numero_expediteur" value={envoie.infoEnvoie.numero_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Ekolo (Pays)</Form.Label>
        <Form.Select name='pays_expediteur' value={envoie.infoEnvoie.pays_expediteur} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option>Ekolo (Pays)</option>
         <option value="ok_bagage_livrer">Angleterre</option>
         <option value="ok_bagage_stocke_arrivee">RD Congo</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Motindi (Expediditaire Informations)</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo Ya Libota(Nom)</Form.Label>
        <Form.Control name="nom_expediteur" value={envoie.infoEnvoie.nom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Libota' required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya authenticité (Postnom)</Form.Label>  
        <Form.Control name="postnom_expediteur" value={envoie.infoEnvoie.postnom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya authenticité' required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya Mukristu (Prénom)</Form.Label>
        <Form.Control name="prenom_expediteur" value={envoie.infoEnvoie.prenom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Label className='couleur2'>Email</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur" value={envoie.infoEnvoie.email_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Email' required/>
      </InputGroup>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Numéro ya Tshombo (Numéro Tél)</Form.Label>
        <Form.Control name="numero_expediteur" value={envoie.infoEnvoie.numero_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Ekolo (Pays)</Form.Label>
        <Form.Select name='pays_expediteur' value={envoie.infoEnvoie.pays_expediteur} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option>Ekolo (Pays)</option>
         <option value="ok_bagage_livrer">Angleterre</option>
         <option value="ok_bagage_stocke_arrivee">RD Congo</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Montant Informations</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Mbongo (Montant)</Form.Label>
        <Form.Control name="montant_envoie" value={envoie.infoEnvoie.montant_envoie} onChange={e=>inputChanged(e)} type="text" placeholder="Mbongo"  required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Device</Form.Label>
        <Form.Select name="montant_device" value={envoie.infoEnvoie.montant_device} aria-label="Default select example" onChange={e=>inputChanged(e)} placeholder="Device" required>
         <option>GBP (£)</option>
         <option value="ok_bagage_livrer">GBP (£)</option>
         <option value="ok_bagage_stocke_arrivee">USD ($)</option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Nzela yako zwa Mbongo (Type de retrait)</Form.Label>
        <Form.Select name="type_service" value={envoie.infoEnvoie.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option>Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="ok_bagage_debarquement_arrivee">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/envoi_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit" onClick={e=>submitBarcode(e)}>
        Valider Informations
        </Button>
        </Link>

        </Col>
    </Row>
  


</Form>
</Container>
}

{isMobileOrTablet && <Container className='bg-dark my-auto mx-auto justify-content-center text-center bordure mb-5' style={{marginTop:50,backgroundColor:'white'}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
            <Link to="/tracer_baggages">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Motindi (Expediditaire Informations)</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo Ya Libota(Nom)</Form.Label>
        <Form.Control name="nom_expediteur" value={envoie.infoEnvoie.nom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Libota' autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya authenticité (Postnom)</Form.Label>  
        <Form.Control name="postnom_expediteur" value={envoie.infoEnvoie.postnom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya authenticité' required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya Mukristu (Prénom)</Form.Label>
        <Form.Control name="prenom_expediteur" value={envoie.infoEnvoie.prenom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Label className='couleur2'>Email</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur" value={envoie.infoEnvoie.email_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Email' required/>
      </InputGroup>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Numéro ya Tshombo (Numéro Tél)</Form.Label>
        <Form.Control name="numero_expediteur" value={envoie.infoEnvoie.numero_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Ekolo (Pays)</Form.Label>
        <Form.Select name='pays_expediteur' value={envoie.infoEnvoie.pays_expediteur} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option>Ekolo (Pays)</option>
         <option value="ok_bagage_livrer">Angleterre</option>
         <option value="ok_bagage_stocke_arrivee">RD Congo</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui (Beneficiare Informations)</u></b></p>
    </Row>
    <Row className='justify-content-center'>
    <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo Ya Libota(Nom)</Form.Label>
        <Form.Control name="nom_expediteur" value={envoie.infoEnvoie.nom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Libota' autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya authenticité (Postnom)</Form.Label> 
        <Form.Control name="postnom_beneficiare" value={envoie.infoEnvoie.postnom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya authenticité' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='couleur2'>Kombo ya Mukristu (Prénom)</Form.Label>
        <Form.Control name="prenom_beneficiare" value={envoie.infoEnvoie.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Adresse</Form.Label>
        <Form.Control name="adresse_beneficaire" value={envoie.infoEnvoie.adresse_beneficiare} onChange={e=>inputChanged(e)} type="text" placeholder='Adresse'  required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Numéro ya Tshombo (Numéro Tél)</Form.Label>
        <Form.Control name="numero_beneficiare" value={envoie.infoEnvoie.numero_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo ' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Ekolo (Pays)</Form.Label>
        <Form.Select name='pays_beneficiare' value={envoie.infoEnvoie.numero_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option>Ekolo (Pays)</option>
         <option value="ok_bagage_livrer">RD Congo</option>
         <option value="ok_bagage_stocke_arrivee">Angleterre</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

  
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Montant Informations</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Mbongo (Montant)</Form.Label>
        <Form.Control name="montant_envoie" value={envoie.infoEnvoie.montant_envoie} onChange={e=>inputChanged(e)} type="text" placeholder="Mbongo"  required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Device</Form.Label>
        <Form.Select name="montant_device" value={envoie.infoEnvoie.montant_device} aria-label="Default select example" onChange={e=>inputChanged(e)} placeholder="Device" required>
         <option>GBP (£)</option>
         <option value="ok_bagage_livrer">GBP (£)</option>
         <option value="ok_bagage_stocke_arrivee">USD ($)</option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Nzela yako zwa Mbongo (Type de retrait)</Form.Label>
        <Form.Select name="type_service" value={envoie.infoEnvoie.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option>Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="ok_bagage_debarquement_arrivee">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/envoi_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit" >
        Valider Informations
        </Button>
        </Link>

        </Col>
    </Row>
  


</Form>
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

export default FormEnvoiClient;