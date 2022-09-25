import React , {useRef} from 'react';
import { useNavigate} from "react-router-dom";
import {useIdleTimer} from 'react-idle-timer';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/esm/Row';



function SessionOut(props)
{
 const navigate = useNavigate()
 const [modalShow, setModalShow] = React.useState(false);

 const open = ()=>
 {
  setModalShow(true)
 }

 const close = ()=>
 {
  setModalShow(false)
 }

 const logout = ()=>
 {
   console.log("you out boy")
   window.localStorage.setItem("username", JSON.stringify("")) 
   props.setIsadmin(false)
   navigate('/')
 }

const idleTimer = useIdleTimer({
promptTimeout : 10 * 1000,
onPrompt : open,
timeout : 10 * 1000,
onIdle : logout,
onActive : close
 })

 return (
  <MyVerticallyCenteredModal close={close} logout = {logout} show={modalShow} onHide={() => setModalShow(false)} />
 )
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Vous aviez été inactif pendent un moment...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p className='text-danger'><b> Vous serez deconnecter automatiquement, pour continuer appuyez sur rester</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col xs={6} className="text-start">
          <Button variant='danger' onClick={props.logout}>Deconnecter moi</Button>
          </Col>
          <Col xs={6} className="text-end">
          <Button variant='success' onClick={close}>Rester</Button>
          </Col>
        </Row>
      
      
      </Modal.Footer>
    </Modal>
  );
}

export default SessionOut