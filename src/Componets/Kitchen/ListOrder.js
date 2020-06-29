import React, {useState} from 'react';
import GeneralEditListOrder from './GeneralEditListOrder';

const ListOrder = ({ lists, list,  changeOrder}) => {
    const {table, status, idordertable} = lists
    
    const deletList = id  => {
        const newList = list.filter(lists => lists.idordertable !== id); 
        changeOrder(newList);
        //console.log(id);  
    }
    const [hidden, setHidden] = useState(false);
    const showOrder = (id) =>{
        if(id === lists.idordertable){
            setHidden(true);
         return 
        }else{
            setHidden(false); 
         }
        
      }
    return (
        <div >
        <div className='headerList' >
            <div className='list'> 
            {status === 'Pendiente'
                ? 
                <a>
                    <i 
                        className="fa fa-pencil" style={{color: 'blue' }}
                        onClick={ () => showOrder(idordertable)}
                    ></i>
                </a>
                : 
                null
            }   
            </div>
            <div className='list'>
                { table}
            </div>
            <div className='list'>
             {status === 'Pendiente'
              ? 
                <p className="list-orange" >
                   { status }
                </p> 
                : 
                  <p className="list-green" >
                    { status }
                  </p> 
                }
            </div>
            <div className='list'>
                {status === 'Pendiente'
                ? 
                 <a>
                    <i 
                        className="fa fa-minus-circle" style={{color: 'red' }}
                        onClick={ () => deletList (idordertable)}
                    ></i>
                    </a>
                : 
                null
                }   
            </div>
        </div>
        { hidden
            ?
            ( <GeneralEditListOrder
                onClose= {() => setHidden(false)}
                idk = {idordertable}
            />)
            :
            null
            }
        </div>

        
    ) 
}  
export default ListOrder; 