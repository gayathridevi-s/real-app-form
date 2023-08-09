import './Field.css';
import { useEffect, useState } from 'react';

function Field(props) {
    useEffect(()=>{
       console.log("label has changed");
    },[props.label])
    
   const handSelected=(e)=>{

        if(props.onChooseCountry) {
            props.onChooseCountry(e.target.value);
        } 
    
    }
    useEffect(()=>{
        
    return(()=>{
        alert("unmounting state");
    })
      
      },[]);
      
    return (
        <div className="field">
            <label>
                {props.label}
            </label>
        <select onChange={handSelected}>
            {props.options.map((item)=> <option value={item.label} key={item.label}>{item.label}</option>)}
        </select>
        </div>

    );

}
export default Field