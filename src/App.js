import React, { Fragment, useState } from 'react';
import './Styles/Styles.scss'; 
import Header from './Componets/Header/Header'; 
import GeneralKitchen from './Componets/Kitchen/Orders/GeneralKitchen'; 
//import GeneralListDelivery from './Componets/Kitchen/ListDelivery/GeneralLisDelivery'; 
function App() {
 return (
    <Fragment>
      <Header />
     <br/>
     <GeneralKitchen />
     </Fragment>
     ); 
}

export default App;

