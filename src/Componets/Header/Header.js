import React, {useState}  from 'react'; 
import Modal from '../Kitchen/Modal/Modal';
const Header = () =>{
    const [listModal, updateModal]=useState(false); 
    const showModal = (m) =>{
      if(m === 'm'){
       updateModal(true);
       return 
      }
      updateModal(false)
    }
    return (
    <header>
        <div className='div-header1' >
        <h1 className='title-header'> 
            Burger Queen
        </h1>
        </div>
        <div className='div-header2' >
        <a>  
        <i className="fa fa-bell" style={{color: 'white'}}
        onClick={ () => showModal('m') } 
        > </i></a>

        {listModal
        ? 
        (<Modal
        onClose= {() => updateModal(false)}
        />)
        : null
        }
        </div>
    </header>
    )
    }
export default Header; 
