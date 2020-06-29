import React, {useState} from "react";
import ListOrder from './ListOrder'; 
const GeneralOrderList = ()=>{
         //Ejemplo de ordern 
  const [list, changeOrder] = useState(
    [
      {idordertable: 1, table:'1', status: 'Pendiente' },
      {idordertable: 2, table:'2', status: 'Listo' },
      {idordertable: 3, table:'4', status: 'Pendiente' }
    ]
  );

  return (
      <div className='container-list'>
     <p className='title-kitchen'>Lista de Ordenes</p>
      <div id='listp'></div>
     <div className='container-kitchen' id='list'>
     <div className='headerList'>
        <div className='titulo-list'></div>
        <div className='titulo-list'>No. Mesa</div>
        <div  className='titulo-list'>Status</div>
        <div  className='titulo-list'></div>
     </div>
     
       { list.map(lists =>(
        <ListOrder 
          key = {list.idordertable}
          lists = {lists}
          list = {list}
          changeOrder = {changeOrder}
        />
          )
        )
     }
     </div>
     </div>
     
    );

}

export default GeneralOrderList; 