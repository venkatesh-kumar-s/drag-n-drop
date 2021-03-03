import React, { useReducer } from 'react'
import './Drag.css'
import dragDropReducer from './redux/dragDropReducer'

const initialState = 0;

function Drag() {

        const [state,dispatch] = useReducer(dragDropReducer, initialState);


    return (
        <div id='div1' className='drag' onDrop={(event)=>dispatch({type:'ONDROP',payload:event})} onDragOver={(event)=>dispatch({type:'ALLOWDROP',payload:event})}>
            <div id='one' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} className='container'><img draggable={false} src="http://assets.stickpng.com/images/58c5804d09e8bc1b42c77940.png" alt="one"/></div>
            <div id='two' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} className='container'><img draggable={false} src="https://moonorganizer.com/wp-content/uploads/2018/02/number-2.png.webp" alt="two"/></div>
            <div id='three' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} className='container'><img draggable={false} src="https://cdn.pixabay.com/photo/2012/04/23/17/07/three-39116_1280.png" alt="three"/></div>
            <div id='four' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} className='container'><img draggable={false} src="https://i1.wp.com/mysoulurgenumber.com/wp-content/uploads/2018/10/soul-urge-number-4.png?resize=1442%2C1442" alt="four"/></div>
            <div id='five' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} className='container'><img draggable={false} src="https://i2.wp.com/mysoulurgenumber.com/wp-content/uploads/2018/10/Soul-Urge-Number-5.png?fit=1442%2C1441&ssl=1" alt="five"/></div>
        </div>
    )
}

export default Drag;
