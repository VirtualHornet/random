import React, { useState } from 'react';
import './App.css'

export default () =>{

    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [res, setRes]= useState(""); 

    const generate =() =>{
        let arr = 0;
        if(val1>val2){
            arr = (parseInt(Math.floor(Math.random() * (parseInt(val1) - parseInt(val2) + 1)) + parseInt(val2)));
            setRes(arr);
        }else if(val2>val1){
            arr = (parseInt(Math.floor(Math.random() * (parseInt(val2) - parseInt(val1) + 1)) + parseInt(val1)))
            setRes(arr);
        }
        setVal1(0);
        setVal2(0);
    }




    return(
        <div>
        <h1>Random number generator</h1>
           <input
                className='first-input'
                value={val1}
                onChange={(e)=>{setVal1(e.target.value)} }
                type="number"
           >
           </input>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <input
                className='second-input'
                value={val2}
                onChange={(e)=>{setVal2(e.target.value)}}
                type="number"
           >
           </input>
           <br></br>
            <button onClick={generate}>Generate a random number</button>
            <p>{(res==="")?"Add 2 number":"Your random number is:"+  parseInt(res)}</p>
        </div>
    );



} 