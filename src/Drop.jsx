import React from 'react'
import './Drop.css'
import { useDispatch } from 'react-redux'

function Drop() {
    const dispatch = useDispatch();
    return (
        <div className='drop'>
            <div id='div2' 
            onDrop={(event)=>dispatch({type:'ONDROP',payload:event})} 
            onDragOver={(event)=>dispatch({type:'ALLOWDROP',payload:event})}></div>

            <div id='div3' 
            onDrop={(event)=>dispatch({type:'ONDROP',payload:event})} 
            onDragOver={(event)=>dispatch({type:'ALLOWDROP',payload:event})}></div>

            <div id='div4' 
            onDrop={(event)=>dispatch({type:'ONDROP',payload:event})} 
            onDragOver={(event)=>dispatch({type:'ALLOWDROP',payload:event})}></div>
        </div>
    )
}

export default Drop;
