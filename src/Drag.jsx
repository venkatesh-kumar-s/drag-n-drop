import React from 'react'
import { useDispatch } from 'react-redux'
import './Drag.css'

function Drag() {
    const dispatch = useDispatch();


    return (
        <div id='div1' className='drag' onDrop={(event)=>dispatch({type:'ONDROP',payload:event})} onDragOver={(event)=>dispatch({type:'ALLOWDROP',payload:event})}>
            <img id='one' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} src="http://assets.stickpng.com/images/58c5804d09e8bc1b42c77940.png" alt="one"/>
            <img id='two' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNq2YNhm5dmPTxQWbF5x8rUjSFMVqwMIwsHw&usqp=CAU" alt="two"/>
            <img id='three' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} src="https://cdn.pixabay.com/photo/2012/04/23/17/07/three-39116_1280.png" alt="three"/>
            <img id='four' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} src="https://i1.wp.com/mysoulurgenumber.com/wp-content/uploads/2018/10/soul-urge-number-4.png?resize=1442%2C1442" alt="four"/>
            <img id='five' draggable onDragStart={(event)=>dispatch({type:'ONDRAG',payload:event})} src="https://i2.wp.com/mysoulurgenumber.com/wp-content/uploads/2018/10/Soul-Urge-Number-5.png?fit=1442%2C1441&ssl=1" alt="five"/>
        </div>
    )
}

export default Drag;
