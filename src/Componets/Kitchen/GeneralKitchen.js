import React, { useState } from 'react';
import Kitchen from './Kitchen';
import DeliveredOrder from './DeliveredOrder';
//import Modal from './Modal'; 
const  GeneralKitchen= () => {
    //Ejemplo de ordern 
  
    const [order, saveOrder] = useState(
    [
      {idorder: 1, saucer1: 'Sandwich de jamón con queso', cant1: '2',  saucer2: 'Jugo de frutas', cant2: '1', saucer3: 'Café americano', cant3: '2', status: 'Pendiente' },
      {idorder: 2, saucer1: 'Café con leche', cant1: '1',  saucer2: 'Sandwich de jamón con queso', cant2: '1', saucer3: '', cant3: '', status: 'Listo' },
      {idorder: 3, saucer1: 'Sandwich de jamón con queso', cant1: '1',  saucer2: 'Jugo de frutas', cant2: '1', saucer3: 'Café americano', cant3: '1', status: 'Pendiente' }
    ]
  );

  const [deliveredOrder, saveDeliveryOrder] = useState([]); 
  
/*  const [listModal, updateModal]=useState(false); 
  const showModal = (m) =>{
    if(m === 'm'){
     updateModal(true);
     return 
    }
    updateModal(false)
    <button 
     type='button'
     onClick={ () => showModal('m') } 
     >Listado de ordenes</button>
     
     {listModal
      ? 
      (<Modal
      onClose= {() => updateModal(false)}
      />)
      : null
    }
    
  }*/

  const [sta, setStatus] = useState('Pendiente'); 
    
  return (
     <div className='container'>
     <p className='title-kitchen'>Orden de Clientes</p>
     <div className='container-kitchen'>
     { order.map(orders =>(
        <Kitchen 
          key = {orders.idorder}
          orders = {orders}
          order = {order}
          deliveredOrder = {deliveredOrder}
          saveDeliveryOrder = {saveDeliveryOrder}
          saveOrder = {saveOrder}
          setStatus = {setStatus}
         />
          )
        )
     }
     </div>
     <DeliveredOrder
        deliveredOrder = {deliveredOrder}
        saveDeliveryOrder = {saveDeliveryOrder}
    />
     </div>
     
    );
}
 
export default GeneralKitchen;