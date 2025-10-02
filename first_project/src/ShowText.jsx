import { useState } from 'react'
import './App.css'
export default function ShowText({ name }) {
    // console.log(name);
    
        const [isOn,setIsOn]=useState(true);
        const toggle=()=>{

            setIsOn((prev)=>!prev)
        }
    return (
        <div>
            {/* <p className="card">hello {name}</p> */}
            <button onClick={toggle}>{isOn?"hide":"show"}</button>
            {isOn && <p>hello react</p>}
        </div>
    )
}