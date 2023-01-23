import React , {useRef} from 'react';
import { useNavigate} from "react-router-dom";
import {useIdleTimer} from 'react-idle-timer';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";


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
   idleTimer.reset()
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
timeout : 600 * 1000,
onIdle : logout,
onActive : close,

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
        
        <p className='text-dark'><b> Vous serez deconnecter automatiquement, pour continuer appuyez sur <span className='text-success'>"Rester"</span></b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
          <Button variant='danger' onClick={props.logout}>Deconnecter moi</Button>
          <Button variant='success' onClick={props.close}>Rester</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SessionOut