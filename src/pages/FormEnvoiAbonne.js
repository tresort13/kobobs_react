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
function FormEnvoiAbonne(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodeBagage:"",
        operation:"",
        position:"",
        volInfo:""
    }})

    
        const[position,setPosition] = useState('')

    const [message,setMessage] = useState("Formulaire d'Envoie Abonné")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitBarcode = (e)=>
    {
        
        e.preventDefault()
        
        fetch('https://congoairwaysapi.herokuapp.com/api/updateBagage/', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(barcode.infoBarcode)
              })
              .then( res => res.json())
              .then(
                res => {   
                    if(res =="ok")
                {
                    
                    setMessage("le barcode" +barcode.infoBarcode.barcodeBagage+" est scanné avec succès !!!")
                    setCouleur("text-success")
                } 
                else{
                    setMessage("echec operation")
                    setCouleur("text-danger")
                }
       
                }
              )
              .catch( (error) =>
                {
                    
                    setMessage("echec operation")
                    setCouleur("text-danger")
                } )

                console.log(barcode.infoBarcode.operation +" "+barcode.infoBarcode.position)
                

                setBarcode({infoBarcode:{barcodeBagage:""}})
    }

    const inputChanged = (event)=>
    {
        const cred = barcode.infoBarcode;
        cred[event.target.name] = event.target.value;
        cred['operation'] = props.operationBG
        cred['position'] = props.positionBG
        cred['volInfo'] = props.volInfo
        setBarcode({infoBarcode:cred})
    }

    
console.log(props.abonne.infoAbonne)
   
    return (
        
        <>
        <Header username={props.username} />
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
<Col xs={6}>
        <p ><i><b className='text-light'>Code Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.code_abonne}</b></i></p>
        </Col>
        <Col xs={6}>
        <p ><i><b className='text-light'>Noms Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} {props.abonne.infoAbonne.postnom_expediteur}</b></i></p>
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
      <p className='couleur2'><b><u>Mozui (Beneficiare Informations)</u></b></p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo (Nom)</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo' required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya authenticité (Postnom)</Form.Label> 
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya authenticité' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Kombo ya Mukristu (Prénom)</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Adresse</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Adresse'  required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Numéro ya Tshombo (Numéro Tél)</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo ' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Ekolo (Pays)</Form.Label>
        <Form.Select name='position' value={position} aria-label="Default select example" onChange={e=>setPosition(e.target.value)} required>
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
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Mbongo (Montant)</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Mbongo"  required/>
         </Form.Group>
        </Col>

       

        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Nzela yako zwa Mbongo (Type de retrait)</Form.Label>
        <Form.Select name="type_service" value={barcode.infoBarcode.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value= "Kozua na maboko (kozua na nzela ya agence)">Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         
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
</Container>
}

{isMobileOrTablet &&  <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p ><i><b className='text-light'>Code Abonné :</b><b className='couleur2'>{props.abonne.infoAbonne.code_abonne}</b></i></p>
        </Col>
        <Col xs={6}>
        <p ><i><b className='text-light'>Noms Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} {props.abonne.infoAbonne.postnom_expediteur}</b></i></p>
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
      <p className='couleur2'><b><u>Mozui (Beneficiare Informations)</u></b></p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo (Nom)</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo' required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Kombo ya authenticité (Postnom)</Form.Label> 
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya authenticité' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Kombo ya Mukristu (Prénom)</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Adresse</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Adresse'  required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Numéro ya Tshombo (Numéro Tél)</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo ' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Ekolo (Pays)</Form.Label>
        <Form.Select name='position' value={position} aria-label="Default select example" onChange={e=>setPosition(e.target.value)} required>
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
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>Mbongo (Montant)</Form.Label>
        <Form.Control name="barcodeBagage" value={barcode.infoBarcode.barcodeBagage} onChange={e=>inputChanged(e)} type="text" placeholder="Mbongo"  required/>
         </Form.Group>
        </Col>

       

        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Nzela yako zwa Mbongo (Type de retrait)</Form.Label>
        <Form.Select name="type_service" value={barcode.infoBarcode.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value= "Kozua na maboko (kozua na nzela ya agence)">Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         
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

export default FormEnvoiAbonne;