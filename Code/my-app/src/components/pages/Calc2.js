import React from 'react';
import '../../App.css';
import {useState} from "react";
import data from "../data.json";

const Calc2 = () => {
  const [EV, setEV] = useState(1);
  const [texts, setText] = useState(data);
  var Result;
  
  return (
    <>
      <div className='calc2'>
        <form>
          <p>Choose EV:</p>
          <select
              required 
              value={EV}
              onChange={(e)=> setEV(e.target.value)}              
              >
                <option value="-9">-9</option>
                <option value="-8">-8</option>
                <option value="-7">-7</option>
                <option value="-6">-6</option>
                <option value="-5">-5</option>
                <option value="-4">-4</option>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
      
          </select>
        <p>or input your own:</p>
        <input 
          type="number" 
          name="age" 
          value={EV} 
          onChange={(e)=> setEV(e.target.value)}
        />
        <p>Exposure Value = { EV }</p>
        <tbody>
          {texts.map((text) => (
            <tr>
                <td>{text.AppertureOpening}</td>
                <td>{text.Shutterspeed}</td>
                <td>{text.ISO}</td>

            </tr>
          
          ))}


        </tbody>

        
        </form>
        </div>
      </>
  );
}


export default Calc2;