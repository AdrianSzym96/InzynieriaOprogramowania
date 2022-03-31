import React from 'react';
import '../../App.css';
import {useState} from "react";



 const Calculator = () => {
  const [Apperture, setApperture] = useState(1);
  const [Shutter, setShutter] = useState(0.0005);
  const [ISO, setISO] = useState(100); 
  var EV;
  var Result;

  let calculateEV = (ISO2,Apperture2,Shutter2) => {
      EV =Math.round( (Math.log2((100 * Apperture2*Apperture2) / (ISO2 * Shutter2) )) *100)/100;
  }

  const Case = () => {

  if(EV < -8)
    Result = "It must be really dark where you are if you need to take a photo with such EV. 😎"  
  else if(EV < - 7)
    Result = "EV is suitable for taking photos of deep star fields and the Milky Way galaxy. ⭐🌌"
  else if(EV < - 5)
    Result = "EV is suitable for taking photos lit by the moon or the Aurora Borealis. 🌗"
  else if(EV < - 1)
    Result = "EV is perfect for taking photos under dim ambient artificial lighting. 🏡"
  else if(EV < 4)
    Result = "EV is perfect for taking photos of Christmas lights, fireworks, and even lightning. 🎄🎇⚡"
  else if(EV < 9)
    Result = "EV is perfect for taking photos on a brightly lit night. 🌆"
  else if(EV < 12)
    Result = "EV is suitable for taking photos of the sunset, during sunset, and just before the sun sets. 🌅"
  else if(EV < 15)
    Result = "EV is perfect for taking photos on a fairly bright day. 🌤 "
  else 
    Result = "EV ~20 is suitable for taking photos under a very bright artificial light. 💡💡💡"

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
                <option value="2.8">f/2.8</option>
                <option value="3.5">f/3.5</option>
                <option value="4.0">f/4.0</option>
                <option value="5.6">f/5.6</option>
                <option value="8.0">f/8.0</option>
                <option value="11.0">f/11.0</option>
                <option value="16.0">f/16.0</option>
                <option value="22.0">f/22.0</option>
                <option value="32.0">f/32.0</option>


          </select>


          <label>Shutter speed:</label>
          <select
              required
              value={Shutter}
              onChange={(e)=> setShutter(e.target.value)}
              >
                <option value="0.0005">1/2000</option>
                <option value="0.001">1/1000</option>
                <option value="0.002">1/500</option>
                <option value="0.004">1/250</option>
                <option value="0.008">1/125</option>
                <option value="0.016">1/60</option>
                <option value="0.033">1/30</option>
                <option value="0.066">1/15</option>
                <option value="0.125">1/8</option>
                <option value="0.25">1/4</option>
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
                <option value="1600">1600</option>
                <option value="3200">3200</option>
                <option value="6400">6400</option>
                <option value="12800">12800</option>
                <option value="25600">25600</option>
                <option value="51200">51200</option>
                <option value="102400">102400</option>
          </select>

        {calculateEV(ISO,Apperture,Shutter)}

        <p>Exposure Value = { EV }</p>
        
        {Case(EV)}

        <p>{ Result }</p>

        
        </form>
        </div>
      </>
  );
}


export default Calculator;