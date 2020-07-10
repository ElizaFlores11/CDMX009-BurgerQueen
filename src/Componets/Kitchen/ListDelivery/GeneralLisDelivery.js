import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'; 
import ListDelivery from './ListDelivery';
import { db } from '../../../Firebase/firebase-config'; 


const GeneralListDelivery = () => {
           //Ejemplo de ordern 
  const [delivery, changeDelivery] = useState([]);
  useEffect(()=> {
    const goDelivery = db.collection('orders').where('state', '==','delivered').orderBy('date', 'desc'); 
    return goDelivery.onSnapshot(snapshotDelivery => {
      const deliveryData = []
      snapshotDelivery.forEach(doc => deliveryData.push({ ...doc.data(), id: doc.id})); 
      changeDelivery(deliveryData); 
    });   
  }, []); 

     return (
        <div className='container' >
            <div className='modal-contenido'>
                <br/><br/>
                <div className='headerList'>
                    <div className='titulo-list'></div>
                    <div className='titulo-list'>No. Mesa</div>
                    <div  className='titulo-list'>Status</div>
                    <div  className='titulo-list'></div>
                </div>
                <br/>
                  {delivery.map((deliverys)=>(
                      <ListDelivery 
                        key = {deliverys.id}
                        deliverys = {deliverys}
                        delivery = {delivery}
                        changeDelivery = {changeDelivery}
                      />
                    )
                    )
                  }
                 
            </div>
        </div>
    )
    
                }
export default GeneralListDelivery; 