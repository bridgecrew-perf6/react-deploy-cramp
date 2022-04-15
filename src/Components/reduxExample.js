import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    selectCount
  } from '../Redux/counterReducer';
function Counter(){
    const stateData = useSelector(selectCount);
    const dispatch = useDispatch();
    function Add(){
        dispatch(increment())
    }
    function Minus(){
        dispatch(decrement())
    }
    return(
        <div style={{width:'20%',margin:'auto'}}>
            <p>{stateData}</p>
            <button onClick={()=>Add()}>Increment</button>{ '|' } 
             <button 
             onClick={()=>Minus()}
             disabled={stateData === 0?true:false} 
             >
                 Decrement
            </button>
        </div>
    )
}
export default Counter 