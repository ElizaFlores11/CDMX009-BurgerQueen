import React, { Fragment, useState } from 'react';
import './Styles/Styles.scss'; 
import Header from './Componets/Header'; 
import GeneralKitchen from './Componets/Kitchen/GeneralKitchen'; 
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
