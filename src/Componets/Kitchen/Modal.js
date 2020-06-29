import React, {useState} from 'react';
import ReactDOM from 'react-dom'; 
import ListOrder from './ListOrder';

const Modal = ({onClose}) => {
           //Ejemplo de ordern 
  const [list, changeOrder] = useState(
    [
      {idordertable: 1, table:'1', status: 'Pendiente' },
      {idordertable: 2, table:'2', status: 'Listo' },
      {idordertable: 3, table:'4', status: 'Pendiente' },
      {idordertable: 4, table:'3', status: 'Pendiente' },
      {idordertable: 5, table:'6', status: 'Listo' },
    /*  {idordertable: 6, table:'5', status: 'Pendiente' },
      {idordertable: 7, table:'9', status: 'Pendiente' },
      {idordertable: 8, table:'7', status: 'Listo' },
      {idordertable: 9, table:'8', status: 'Pendiente' },
      {idordertable: 6, table:'5', status: 'Pendiente' },
      {idordertable: 7, table:'9', status: 'Pendiente' },
      {idordertable: 8, table:'7', status: 'Listo' },
      {idordertable: 9, table:'8', status: 'Pendiente' },*/
    ]
  );
  const [cont, setCount]=useState(0);

    const done = (
        <div className='modal' >
            <div className='modal-contenido'>
                <a><i className='fa fa-times icon-close modal-close' onClick={onClose}></i></a>
                <p className='title-list'>Lista de Ordenes</p>
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
    )
    return ReactDOM.createPortal(done, document.querySelector("#modal-root"))
}

export default Modal; 