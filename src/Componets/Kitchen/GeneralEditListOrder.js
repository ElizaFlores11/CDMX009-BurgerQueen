import React, {useState } from 'react'; 
import EditOrderList from './EditOrdenList'; 
const GeneralEditListOrder = ({onClose, idk}) =>{
    const [editOrder, saveEditOrder] = useState(
        [
          {idorder: 1, dish: 'Sandwich de jamón con queso', quantity: 2, price: 10,  idordertable: 1},
          {idorder: 2, dish: 'jugo de frutas', quantity: 2, price: 7, idordertable: 1},
          {idorder: 3, dish: 'café americano', quantity: 1, price: 5,  idordertable: 1},
        ]

      );
    
       
    return (
        <div className='container-list-edit'>
            
        <div className='container-kitchen'>
            <div className='headerList'>
                <div className='titulo-list'>Platillo</div>
                <div  className='titulo-list'>Cantidad</div>
                <div  className='titulo-list'>
                <a className='right'>
                    <i className='fa fa-times icon-close' onClick={onClose}></i>
                </a>
                
                    
                </div>
            </div>
            
            { editOrder.map(editOrders => ( 
                <EditOrderList
                    key = {editOrders.idorder}
                    editOrders = {editOrders}
                    editOrder = {editOrder}
                    saveEditOrder = { saveEditOrder}
                 />
                )
            )
            }
        </div>
        </div>
    )
}
export default GeneralEditListOrder; 