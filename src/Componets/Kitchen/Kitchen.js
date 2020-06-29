import React, { useState } from "react";

const Kitchen = ({orders, order, deliveredOrder, saveDeliveryOrder, saveOrder, setStatus}) =>{
    
    /*constructor(props) {
        super(props);
        this.state = {color: null};
      }*/
    const {saucer1, cant1, saucer2, cant2, saucer3, cant3, idorder, status} = orders
    const deliveredOrders =  id =>{
      const ordersf = order.filter(orders => orders.idorder === id)[0]; 
      saveDeliveryOrder ([
         ...deliveredOrder,
        orders
      ])

      setStatus('Listo'); 
      deleteOrders(id);
      
      /* saveOrder ({status: stat})
      if(ordersf.status === 'Pendiente'){
          const st = 'Listo';
          console.log(st); 
      }*/
    }
    const deleteOrders = id =>{
        const newOrder = order.filter(orders=> orders.idorder !== id); 
        saveOrder(
            newOrder
        ); 
        console.log(newOrder); 
    }
    
    return (
        
        <div className='card-padding'>
        <div className='card-active'  > 
            <h4>Cliente:</h4>
            <h4>Mesa:</h4>

            <div className='list-source'> 
                <div className='item1-card' > 
                { saucer1 }
                </div>
                <div className='item2-card' >
                { cant1 }
                </div>
            </div>
            <div className='list-source'> 
                <div className='item1-card' > 
                {saucer2 }
                </div>
                <div className='item2-card' >
                { cant2 }
                </div>
            </div>
            <div className='list-source'> 
                <div className='item1-card' > 
                { saucer3 }
                </div>
                <div className='item2-card' >
                { cant3 }
                </div>
            </div>
            <br/><br/>
            { order
            ?
            <div className='list-source'> 
                <div className='item3-card' > 
                    <button 
                    type='button'
                    className='button-red' 
                    onClick={ () => deleteOrders(idorder) }
                    >Cancelar</button>
                 </div>
                <div className='item3-card' >
                 <button 
                 className='button-green'
                 onClick={ () => deliveredOrders(idorder) }
                 >Entregado</button>
                </div>
            </div>
            :
            <div className='list-source' > 
                <div className='item3-card' > 
                    <button 
                    type='button'
                    className='button-gray' 
                    disabled
                    ></button> 
                </div>
            </div>
            }
        </div>
        </div>
        
    ); 
}

export default Kitchen; 