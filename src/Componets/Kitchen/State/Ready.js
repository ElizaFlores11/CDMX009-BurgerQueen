import React from 'react';

const Ready = ({ readys, ready,  changeOrderReady}) => {
    const {date, deliveryDate, table, state, id} = readys
    const starTime = date; 
    const endTime = deliveryDate; 
    let timeDifference = (endTime) -(starTime); 
    let min = Math.floor(timeDifference / 60); 
    //let seg = (min * 60);  
    //let segfinish = (seg / 60); 
    return (
        <div >
            <div className='contentList' >
                <div className='list'>
                    {min} min
                </div>            
                <div className='list'>
                    { table}
                </div>
                <div className='list'>
                    <p className="list-green" >
                        {state == 'ready' ? 'Listo' : null  }
                    </p> 
                </div>
                <div className='list'>
                </div>
            </div>
        </div>
    )
}
export default Ready; 