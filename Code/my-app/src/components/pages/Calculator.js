import React from 'react';
import '../../App.css';
import {useState} from "react";
import App from '../../App';




 const Calculator = () => {
  const [Apperture, setApperture] = useState('');
  const [Shutter, setShutter] = useState('');
  const [ISO, setISO] = useState(''); 

  let calculateEV = (ISO2,Apperture2) => {
    //EV = log2(100 * aperture2 / (ISO * shutter speed))

      let x= ISO2 * Apperture2;
      let EV= Math.log2((100 * Math.pow(Apperture2, 2) / (ISO2 * Shutter) ))
      console.log(x);
      console.log(EV);
      
  }

  return (
    <>
      <div className='calculator'>
        <form>


          <label>Apperture opening:</label>
          <select
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
              value={ISO}
              onChange={(e)=> setISO(e.target.value)}
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="400">400</option>
                <option value="800">800</option>
          </select>

        <button onClick = {calculateEV(ISO,Apperture)}>Calculate</button>

          

        </form>
        </div>
      </>
  );
}


export default Calculator;