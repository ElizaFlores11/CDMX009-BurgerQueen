import React, { Fragment, useState } from 'react';
import './Styles/Styles.scss'; 
import Header from './Componets/Header'; 
import GeneralKitchen from './Componets/Kitchen/Orders/GeneralKitchen'; 
//import GeneralOrderList from './Componets/Kitchen/GeneralOrderList'; 
//import GeneralEditListOrder from './Componets/Kitchen/GeneralEditListOrder'
function App() {
 /*
  <GeneralOrderList />
        <br/><br/>
    <GeneralEditListOrder />
 */
 return (
    <Fragment>
      <Header />
     <br/>
     <GeneralKitchen />
     </Fragment>
     ); 
}

export default App;

/*import React, {useEffect, useState} from 'react';
//import firebase from  './firebase'; 
import { db } from './Firebase/firebase'; 
//import 'firebase/firestore'

function App() {
  
  const [cli, setCliente] = useState([])
  const prueba = () =>{
    //console.log('prueba'); 
    //console.log(firebase);  
    let d = db.collection("cliente"); 
    console.log("Hola"); 
    console.log(d); 
    d.add({
      "name": 'Eliza', 
      "edad": '30', 
      "apellido": 'Flo' 
    })
  }
  useEffect(()=> {
    const getD = async () =>{
      try{
        const data = await db
        .collection("cliente")
        .get(); 
        const arrayData = data.docs.map((doc) => ({
          ...doc.data(),
        }));
        setCliente(arrayData); 
        console.log(arrayData)
      }catch (error){
        console.log(error); 
      }
    };
     getD();
  }, []); 
  return (
    <div className="App">
        <button type='button' onClick={() => prueba()} >Prueba</button>
     <ul >
      {cli.map((item) =>(
        <li>{item.name} {item.apellido} {item.edad}</li>
      ))
      }
      <li>Hola</li>
      </ul>
    </div>
  );
}

export default App;
*/