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
function EnvoiInfo(props)
{

    const [message,setMessage] = useState("Veuillez Vérifier les informations avant validation")
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
                body: JSON.stringify(props.envoie.infoEnvoie)
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
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Motindi (Expediteur Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): {props.envoie.infoEnvoie.nom_expediteur} </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): {props.envoie.infoEnvoie.postnom_expediteur} </p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : {props.envoie.infoEnvoie.prenom_expediteur}</p>
        <p className='text-light'>Email Adresse : {props.envoie.infoEnvoie.adresse_expediteur}</p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : {props.envoie.infoEnvoie.numero_expediteur} </p>
        <p className='text-light'>Ekolo (Pays) : {props.envoie.infoEnvoie.email_expediteur}</p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui (Bénéficiare Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota (Nom): {props.envoie.infoEnvoie.nom_beneficiaire} </p>
        <p className='text-light'>Kombo Ya Authenticité (Postnom): {props.envoie.infoEnvoie.postnom_beneficiaire}</p>
        <p className='text-light'>Kombo Ya Mukristu (Prénom) : {props.envoie.infoEnvoie.prenom_beneficiaire} </p>
        <p className='text-light'>Email Adresse : {props.envoie.infoEnvoie.adresse_beneficiaire}</p>
        <p className='text-light'>Numéro Ya Tshombo (Numéro Tél) : {props.envoie.infoEnvoie.numero_beneficiaire} </p>
        <p className='text-light'>Ekolo (Pays) : {props.envoie.infoEnvoie.pays_beneficiaire}</p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo (Motant Informations)</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Mbongo (Montant): {props.envoie.infoEnvoie.montant_envoie}</p>
        <p className='text-light'>Dévice : {props.envoie.infoEnvoie.montant_device}</p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): {props.envoie.infoEnvoie.type_service}</p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
        Valider Informations
        </Button>
        </Link>
        </Col>
        
        <Col xs={6}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit" onClick={e=>RetourEnvoie(e)}>
        Modifier Informations
        </Button>
        </Link>
        </Col>
    </Row>
    
    

</Container>
}

{isMobileOrTablet && <Container className='bg-dark my-auto mx-auto justify-content-center text-center bordure mb-5' style={{marginTop:50,backgroundColor:'white'}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={"auto"}>
            <Link to="/tracer_baggages">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:100}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
<Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={position} aria-label="Default select example" onChange={e=>setPosition(e.target.value)} required>
         <option>Selectionnez votre position</option>
         <option value="ok_bagage_debarquement_arrivee">debarquement (arrivée)</option>
         <option value="ok_bagage_en_tapis_livraison">tapis livraison</option>
         <option value="ok_bagage_livrer">livrer bagage</option>
         <option value="ok_bagage_stocke_arrivee">stocker bagage</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={position} aria-label="Default select example" onChange={e=>setPosition(e.target.value)} required>
         <option>Selectionnez votre position</option>
         <option value="ok_bagage_debarquement_arrivee">debarquement (arrivée)</option>
         <option value="ok_bagage_en_tapis_livraison">tapis livraison</option>
         <option value="ok_bagage_livrer">livrer bagage</option>
         <option value="ok_bagage_stocke_arrivee">stocker bagage</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={position} aria-label="Default select example" onChange={e=>setPosition(e.target.value)} required>
         <option>Selectionnez votre position</option>
         <option value="ok_bagage_debarquement_arrivee">debarquement (arrivée)</option>
         <option value="ok_bagage_en_tapis_livraison">tapis livraison</option>
         <option value="ok_bagage_livrer">livrer bagage</option>
         <option value="ok_bagage_stocke_arrivee">stocker bagage</option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Select name='position' value={position} aria-label="Default select example" onChange={e=>setPosition(e.target.value)} required>
         <option>Selectionnez votre position</option>
         <option value="ok_bagage_debarquement_arrivee">debarquement (arrivée)</option>
         <option value="ok_bagage_en_tapis_livraison">tapis livraison</option>
         <option value="ok_bagage_livrer">livrer bagage</option>
         <option value="ok_bagage_stocke_arrivee">stocker bagage</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit" onClick={e=>submitBarcode(e)}>
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

export default EnvoiInfo;