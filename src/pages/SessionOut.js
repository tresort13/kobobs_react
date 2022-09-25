import React , {useRef} from 'react';
import { useNavigate} from "react-router-dom";
import {useIdleTimer} from 'react-idle-timer';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";



function SessionOut(props)
{
 const navigate = useNavigate()
 const [modalShow, setModalShow] = React.useState(false);

 const logout = ()=>
 {
   console.log("you out boy")
   window.localStorage.setItem("username", JSON.stringify("")) 
   props.setIsadmin(false)
   navigate('/')
 }

 const idleTimer = useIdleTimer({
promptTimeout : 10 * 1000,
onPrompt : setModalShow(true),
timeout : 10 * 1000,
onIdle : logout,
onActive : setModalShow(false)
 })

 return (
  <MyVerticallyCenteredModal logout = {logout} show={modalShow} onHide={() => setModalShow(false)} />
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
        
        <p className='text-danger'><b> Vous serez deconnecter automatiquent, pour continuer appuyez sur rester</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant='danger' onClick={props.logout}>Deconnecter moi</Button>
        <Button variant='success' onClick={props.onHide}>Rester</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SessionOut