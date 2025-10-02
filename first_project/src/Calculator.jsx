import { useState } from "react"
import './App.css'

export default function Calculator(){
    const [count,setCount]=useState(0);
    const handleAdd=()=>{
        const newCount = count+1;
        setCount(newCount);
    }
    const handleRemove=()=>{
        const newCount=count-1;
        setCount(newCount);
    }
    const handleClear=()=>{
        // const newCount=count-1;
        setCount(0);
    }
    return(
        <div className="card">
            <p>score : {count}</p>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>remove</button>
            <button onClick={handleClear}>clear</button>
        </div>
    )
}