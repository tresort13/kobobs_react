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




const useState = React.useState
function AbonneFormNonValideInfo(props)
{

    const[barcode,setBarcode] = useState({infoBarcode :{
        barcodeBagage:"",
        operation:"",
        position:"",
        volInfo:""
    }})

    
        const[position,setPosition] = useState('')

    const [message,setMessage] = useState("Liste des formulaires non validés")
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
        
        fetch('https://kobobsapi.herokuapp.com/api/getRetraitNonValideInfo/code retrait en attente de validation/', {
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

    

   
    return (
        
        <>
        <Header username={props.username} />
{isDesktop && props.envoie4.infoEnvoie.map((value)=>
    {
    return <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
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
      <p className='couleur2'><b><u>Informations générales </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
    <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi (Noms complets Expediteur): <b className='couleur2'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui (Noms complets Beneficiare): <b className='couleur2'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi (Pays Expediteur) : <b className='couleur2'> {value.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui(Pays Beneficiare) : <b className='couleur2'> {value.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo Bazui (Montant Récuperé): <b className='couleur2'>{Number(value.montant_beneficiaire).toFixed(2)}</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo (Type de retrait): <b className='couleur2'>{value.type_service}</b> </p>
        <p className='text-light'>Status Retrait : <b className='couleur2'>{value.status_retrait}</b> </p>
        <p className='text-light'>opération retrait fait par : <b className='couleur2'> {props.username}</b></p>
        <p className='text-light'>date et heure : <b className='couleur2'> {value.date_heure_operation}</b></p> 
    </Col>
    <Col xs={6}>
        <Link to="/envoi_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Valider le code de retrait
        </Button>
        </Link>
        </Col>
        <Col xs={6}>
        <Link to="/envoi_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Click pour voir plus des détails
        </Button>
        </Link>
        </Col>
    </Row>

    

</Container> })} 


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

export default AbonneFormNonValideInfo;