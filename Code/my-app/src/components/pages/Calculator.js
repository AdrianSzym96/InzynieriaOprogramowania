import React from 'react';
import '../../App.css';
import {useState} from "react";
import App from '../../App';




 const Calculator = () => {
  const [Apperture, setApperture] = useState('1');
  const [Shutter, setShutter] = useState('1');
  const [ISO, setISO] = useState('1'); 
  const [EV, setEV] = useState(0);


  let calculateEV = (ISO2,Apperture2,Shutter2) => {
    //EV = log2(100 * aperture2 / (ISO * shutter speed))
      let EVtemp= Math.log2((100 * Math.pow(Apperture2, 2) / (ISO2 * Shutter2) ))
      console.log(EVtemp);
      
      return (
        <div className='calculator'>
        <p>{ EVtemp }</p>
        </div>
      );
  }
  const handleClick = ()=>{
    // total price update logic
 }

  return (
    <>
      <div className='calculator'>
        <form>


          <label>Apperture opening:</label>
          <select
              required
              value={Apperture}
              onChange={(e)=> setApperture(e.target.value)}
              >
                <option value="1">f/1.0</option>
                <option value="1.4">f/1.4</option>
                <option value="2.0">f/2.0</option>
                <option value="4.0">f/4.0</option>
          </select>


          <label>Shutter speed:</label>
          <select
              required
              value={Shutter}
              onChange={(e)=> setShutter(e.target.value)}
              >
                <option value="0.002">1/500</option>
                <option value="0.016">1/60</option>
                <option value="0.033">1/30</option>
                <option value="0.5">1/2</option>
          </select>


          <label>ISO:</label>
          <select
              required 
              value={ISO}
              onChange={(e)=> setISO(e.target.value)}              
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="400">400</option>
                <option value="800">800</option>
          </select>

        <button onClick = {(calculateEV(ISO,Apperture,Shutter))}>Calculate</button>
        <p>{ EV }</p>
       
          

        </form>
        </div>
      </>
  );
}


export default Calculator;