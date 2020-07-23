import React, { useState, useEffect } from 'react';
import Kitchen from './Kitchen';
import DeliveredOrder from './DeliveredOrder';
import { viewOrders } from '../../../Firebase/controls'; 

const  GeneralKitchen= () => {
  
  const [order, listOrder] = useState([]);
  const [deliveredOrder, saveDeliveryOrder] = useState([]);

  useEffect(()=> {
     viewOrders(listOrder); 
  }, []); 
  
  return (
     <div className='container'>
     <div className='container-kitchen'>     
    {order.map((orders) =>(
        <Kitchen 
          key = {orders.id}
          orders = {orders}
          order = {order}
          deliveredOrder = {deliveredOrder}
          saveDeliveryOrder = {saveDeliveryOrder}
          listOrder = {listOrder}
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