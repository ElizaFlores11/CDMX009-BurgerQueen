import React from 'react';

const ListDelivery = ({ deliverys, delivery,  changeDelivery}) => {
    
    const {table, state, id} = deliverys
 console.log(state); 
    return (
        <div >
        <div className='contentList' >
            <div className='list'>
            </div>
            <div className='list'>
                { table}
            </div>
            <div className='list'>
                <p className="list-red" >
                   { state  == 'delivered' ? 'Entregado' : null }
                </p> 
             </div>
            <div className='list'>
             </div>
        </div>
        </div>
    )
}
export default ListDelivery; 