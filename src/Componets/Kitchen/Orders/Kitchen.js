import React, { useState } from "react";
import { db } from '../../../Firebase/firebase-config'; 

const Kitchen = ({orders, order, deliveredOrder, saveDeliveryOrder, listOrder}) =>{
    const {client, table, id, items, state} = orders

    const deliveredOrders =  (id) =>{
        const ordersf = order.filter(orders => orders.id === id)[0]; 
        saveDeliveryOrder ([
            ...deliveredOrder, 
            orders
            ]
        ); 
        deleteOrderslist(id);
        let newDate = new Date; 
        let onchangeState = db.collection("orders").doc(id);
            onchangeState.update({
                "state": "ready",
                "deliveryDate": newDate    
            }).then(function() {
                //alert("Registro actualizado exitosamente");
            }).catch(function(error) {
                console.error("Error updating document: ", error);
            });
        }
        
        const deleteOrderslist = (id) =>{
            const newOrder = order.filter(orders=> orders.id !== id); 
             listOrder(
                 newOrder
             ); 
        }
    const deleteOrders = (id) =>{
       const newOrder = order.filter(orders=> orders.id !== id); 
        listOrder(
            newOrder
        ); 
        let onchangeState = db.collection("orders").doc(id);
          onchangeState.update({
            "state": "cancel"
            }).then(function() {
               // alert("Registro cancelado exitosamente");
        
            }).catch(function(error) {
                console.error("Error updating document: ", error);
            }); 
    }
    return (
        <div className='card-padding'>
            <div className={order? 'card-active': 'card-inactive' }  > 
                <h4>Cliente: {client}</h4>
                <h4>Mesa: {table}</h4>
                {items.map((item, index) => {
                    
                    return (
                        <div className='list-source'  key={index}> 
                            <div className='item1-card' > 
                                <h5 key={index}>
                                     {item.dish} 
                                    <br/> 
                                   <span className='spa'> {item.addittions} </span>  </h5>
                            </div>
                            <div className='item2-card' >
                                <h5 key={index}>  {item.quantity} </h5>
                            </div>
                        </div>
                        
                 )
            })}
            { order
            ?
            <div className='list-source2'> 
               <div className='item3-card' > 
                    <button 
                    type='button'
                    className='button-red' 
                    onClick={ () => deleteOrders(id) }
                    >Cancelar</button>
                 </div>
                <div className='item3-card' >
                 <button 
                 className='button-green'
                 onClick={ () => deliveredOrders(id) }
                 >Entregado</button>
                </div>
                <br/>
            </div>
            :
            null
            }
        </div>
        <br/><br/>
        </div>
    ); 
}

export default Kitchen; 