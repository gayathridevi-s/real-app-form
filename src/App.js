import { Component,useState} from "react";
import "./App.css";
import { useEffect } from "react";

import Field from "./Components/Dropdown/Field";
const btnStyle = {
  backgroundColor: "black",
  color: "white",
  width: "100px",
  alignSelf: "center",
  height: "30px",
};




function App() {
const [country,setCountry]=useState(null);
const [data,setData]=useState([]);
console.log(country);

useEffect(()=>{
  setData([
    {
      label: "None",
      states: [],
    },
    {
      label: "India",
      states: [{ label: "Kerala" }, { label: "Tamil nadu" }],
    },
    {
      label: "Japan",
      states: [{ label: "Tokyo" }, { label: "Osaka" }],
    },
  ]);
alert("Getting data");
//fetching data from server


},[]);


  return (
    <div className="outerbox">
      <div className="innerbox">
        <h1>Location Details</h1>
        <Field label="Choose Country" options={data} onChooseCountry={setCountry}></Field>
        {country && country!=="None" && ( <Field label="Choose State" options={data.find((item)=>item.label===country).states}/> )}
        
        <button style={btnStyle}>submit</button>
      </div>
    </div>
  );
}

export default App;
