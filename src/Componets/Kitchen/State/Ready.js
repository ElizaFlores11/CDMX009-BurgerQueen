import React from 'react';
import { ordersSetDelivered } from '../../../Firebase/controls';


const Ready = ({ readys, ready,  changeOrderReady}) => {
    
    const { date, deliveryDate, table, state, id }= readys
    
    const starTime = date; 
    const endTime = deliveryDate; 
    let timeDifference = (endTime) -(starTime); 
    let min = Math.floor(timeDifference / 60); 
    const Entregado=(i) => {
        ordersSetDelivered(id); 
    }
    return (
        <div >
            <div className='contentList' >
                <div className='list'>
                    {min} min 
                </div>            
                <div className='list'>
                    { table}
                </div>
                <div className='list'>
                    <p className="list-green" >
                        {state == 'ready' ? 'Listo' : null  }
                    </p> 
                </div>
                <div className='list'>
                    <button className='button-red' type="button" onClick={()=> Entregado(id)}>Entregado</button>
                </div>
            </div>
        </div>
    )
}
export default Ready; 