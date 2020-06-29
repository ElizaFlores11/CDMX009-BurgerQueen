import React from 'react';
import Kitchen from './Kitchen'; 

const DeliveredOrder = ({deliveredOrder, saveDeliveryOrder}) => {
    
    return(
    <div className='item2-widtn-kitchem' >
        { deliveredOrder.length == 0 
        ? 
            <p>No se han entregado ordenes</p>
        :
            deliveredOrder.map(orders =>(
                <Kitchen 
                    key= {orders.idorders}
                    orders = {orders}
                 />
                )
            )
        }
    </div>
    )
}
 

export default DeliveredOrder;