import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'; 
import Pending from '../State/Pending';
import Ready from '../State/Ready';
import { db } from '../../../Firebase/firebase'; 


const Modal = ({onClose}) => {
           //Ejemplo de ordern 
  const [pending, changePending] = useState([]);
  useEffect(()=> {
    const getPending = async () =>{
      try{
        const data = await db
        .collection("orders").where('state', '==', 'pending') 
        .get(); 
        const arrayPending = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          //doc.id; 
        }));
        //console.log(getD); 
        changePending(arrayPending); 
        //console.log(arrayData)
      }catch (error){
        console.log(error); 
      }
    };
     getPending();
  }, []); 
  const [ready, changeReady] = useState([]);
  useEffect(()=> {
    const getReady = async () =>{
      try{
        const data = await db
        .collection("orders").where('state', '==', 'ready') 
        .get(); 
        const arrayReady = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log(getDR); 
        changeReady(arrayReady); 
        //console.log(arrayData)
      }catch (error){
        console.log(error); 
      }
    };
     getReady();
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