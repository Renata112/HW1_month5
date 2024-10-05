import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const CounterComponent=()=> {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const plusOne=()=>{
        dispatch({type:'PLUSONE'})
    }
    const minusOne = ()=>{
        dispatch({type:'MINUSONE'})
    }
    const plusTen =()=>{
        dispatch({type:'PLUSTEN'})
    }
    const minusTen=()=>{
        dispatch({type:'MINUSTEN'})
    }
    const resetBtn=()=>{
        dispatch({type:'RESET'})
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={plusOne}>+ 1</button>
            <button onClick={minusOne}>- 1</button>
            <button onClick={plusTen}>+ 10</button>
            <button onClick={minusTen}>- 10</button>
            <button onClick={resetBtn}>Reset</button>
        </div>
    );
}

export default CounterComponent;