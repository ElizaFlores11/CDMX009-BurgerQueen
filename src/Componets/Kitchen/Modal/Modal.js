import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'; 
import Pending from '../State/Pending';
import Ready from '../State/Ready';
import { viewModalReady, viewModalPending } from '../../../Firebase/controls'; 


const Modal = ({onClose}) => {
           //Ejemplo de ordern 
  const [pending, changePending] = useState([]);
  useEffect(()=> {
      viewModalPending(changePending)
  }, []); 
  const [ready, changeReady] = useState([]);
  useEffect(()=> {
    viewModalReady(changeReady);
  }, []);

    const done = (
  
        <div className='modal' >
            <div className='modal-contenido'>
                <a><i className='fa fa-times icon-close modal-close' onClick={onClose}></i></a>
                <br/><br/>
                <div className='headerList'>
                    <div className='titulo-list'></div>
                    <div className='titulo-list'>No. Mesa</div>
                    <div  className='titulo-list'>Status</div>
                    <div  className='titulo-list'></div>
                </div>
                <br/>
                  {pending.map((pendings )=>(
                      <Pending 
                        key = {pendings.id}
                        pendings = {pendings}
                        pending = {pending}
                        changePending = {changePending}
                      />
                    )
                    )
                  }
                  {ready.map((readys )=>(
                    <Ready
                      key = { readys.id}
                      readys = { readys }
                      ready = { ready}
                      changeReady = { changeReady }
                    />
                    )
                    )
                  }
            </div>
        </div>
    )
    return ReactDOM.createPortal(done, document.querySelector("#modal-root"))
}

export default Modal; 