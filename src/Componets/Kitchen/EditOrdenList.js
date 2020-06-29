import React, {Fragment, useState} from 'react';


const EditOrderList = ({editOrders, editOrder,  saveEditOrder}) => {
    const {dish, quantity, price,  idorder} = editOrders
    
    const deleteEditOrdenList = id =>{
        const newEdit = editOrder.filter(editOrders => editOrders.idorder !== id); 
         saveEditOrder(newEdit);
         // console.log(id);   
    }
    const [cont, setCont]= useState(quantity); 
    const [datos, setDatos]=useState({
            cantidad: quantity,
            total:  price,
            id: idorder 
    })
    const actualizarState = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
        //console.log(e.target.value); 
       // event.preventDefault()
        //console.log(e.target.cant);
       //const newTotal = quality * price; 
       //console.log(newTotal); 
       //setDatos(newTotal);  
       //saveEditOrder(editOrder); 
       //console.log(id); 
       // 
       /*<a >
                <i className="fa fa-chevron-up" 
                    onClick={ () => setCount(cont + 1) }
                ></i>
                </a> */
        /*<a >
                <i className="fa fa-chevron-down" 
                    onClick={ () => setCount(cont - 1) }
                ></i>
                </a> */
    }
    
    const {cantidad, total, id} = datos; 
    const changeCant = e =>  {
        e.preventDefault(); 
        //alert('enviando'); 
        //return
        console.log(datos);  
    } 
    return(
        <Fragment >
            <form  onSubmit={changeCant}> 
        <div className='headerList' >
            <div className='list-edit'>
                { dish}
            </div>
            <div className='list-edit'>
                <input 
                    type="number" 
                    name="cantidad"  
                    style={{width: '50px', height: '30px'}}
                    onChange={actualizarState}
                    value={cantidad}
                />
                <input 
                    type="hidden" 
                    name="total" 
                    style={{width: '50px'}}
                    onChange={actualizarState}
                    value={total}
                />
                <input 
                    type="hidden" 
                    name="id" 
                    style={{width: '50px'}}
                    onChange={actualizarState}
                    value={id}
                />
            </div>
            <div className='list-edit'> 
                <button 
                   type='submit' 
                >
                <i className="fa fa-pencil" style={{color: 'blue' }}></i>
                </button>
                <a >
                <i className="fa fa-minus-circle" style={{color: 'red' }}
                    onClick={ () => deleteEditOrdenList(idorder) }
                ></i>
                </a>
            </div>
        </div>
        </form>
        </Fragment>
       
    )
}
export default EditOrderList; 

