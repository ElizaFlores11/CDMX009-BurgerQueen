import { db } from './firebase-config';

const viewOrders = (listOrder) => {
  const d = db.collection('orders').where('state', '==','pending'); 
    return d.onSnapshot(snapshot => {
      const spellsData = []
      snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id})); 
      listOrder(spellsData); 
    });
}

const viewModalPending = (changePending) =>{
  const goPending = db.collection('orders').where('state', '==','pending').orderBy('date', 'desc'); 
    return goPending.onSnapshot(snapshotPending => {
      const pendingData = []
      snapshotPending.forEach(doc => pendingData.push({ ...doc.data(), id: doc.id})); 
      changePending(pendingData); 
    });
}
const viewModalReady = (changeReady) =>{
  const goReady = db.collection('orders').where('state', '==','ready').orderBy('date', 'desc'); 
    return goReady.onSnapshot(snapshotReady => {
      const readyData = []
      snapshotReady.forEach(doc => readyData.push({ ...doc.data(), id: doc.id})); 
      changeReady(readyData); 
    });
}

const  ordersSetDelivered = (id) =>{
    let onchangeStateD = db.collection("orders").doc(id);
          return onchangeStateD.update({
            "state": "delivered"
            })
        }

const onChangeStateReady = (id) => {
  let newDate = new Date; 
        let onchangeStateR = db.collection("orders").doc(id);
            onchangeStateR.update({
                "state": "ready",
                "deliveryDate": newDate    
            });
}

const onChangeStateCancel = (id)=>{
  let onChangeStateC = db.collection("orders").doc(id);
          onChangeStateC.update({
            "state": "cancel"
            })
}
export {
  viewOrders,
  viewModalPending, 
  viewModalReady,
  ordersSetDelivered, 
  onChangeStateReady, 
  onChangeStateCancel
};    
