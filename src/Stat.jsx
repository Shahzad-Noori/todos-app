import React, { useState } from 'react'
import './App.css';

const Stat = () => {
    const [data, setdata] = useState("")

    function change(e) {
        setdata(e.target.value)
    }
   
function uper() {
    setdata(data.toUpperCase())

}
function lower(params) {
    setdata(data.toLowerCase())
}

    return (
        <div>
           <input value={data} onChange={change} type="text" />
                <button onClick={uper}>uper</button>
                <button onClick={lower}>lower</button>
                <h1>preview</h1>
            <h1>{data}</h1>
            <h4>{data.split(" ").length }   words and {data.length}  characteres</h4>
        </div>
    )
}

export default Stat
