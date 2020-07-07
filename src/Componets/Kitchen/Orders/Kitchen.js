import React, { useState } from "react";
import { db } from '../../../Firebase/firebase'; 

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
    //{ad == '0'? 'pollo' : '1' ? 'queso' : '2'?  'Sin Mayonesa' : 'Sin Mostaza'}
    return (
        <div className='card-padding'>
            <div className={order? 'card-active': 'card-inactive' }  > 
                <h4>Cliente: {client}</h4>
                <h4>Mesa: {table}</h4>
                {items.map((item, index) => {
                    let addi = []
                    for (let k in item.addittions) {
                        if (item.addittions[k]) {
                            addi.push(k)
                        }
                    }
                    return (
                        <div className='list-source'  key={index}> 
                            <div className='item1-card' > 
                                <h5 key={index}> {item.dish}  </h5>
                        {addi.map((ad, idx) => 
                            <p key={idx} >
                               {ad == '0'? 'pollo': 'queso'} 
                            </p>
                            )
                        }
                    </div>
                    <div className='item2-card' >
                    <h5 key={index}>  {item.quantity} </h5>
                    </div>
                    <br/>
                    
                </div>
                 )
            })}
            { order
            ?
            <div className='list-source'> 
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
                <br/><br/>
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