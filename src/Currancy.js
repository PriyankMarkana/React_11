

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Currancy() {
  let [i1, seti1] = useState()
  let [i2, seti2] = useState()
  let [val, setval] = useState()
  let [final, setfinal] = useState('')
  const gata = () => {
    setfinal();

    if (i1 === 'USD' && i2 === 'EUR') {
      let temp = Number(val) * 0.85;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'USD' && i2 === 'INR') {
      let temp = Number(val) * 74.71;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'USD' && i2 === 'PKR') {
      let temp = Number(val) * 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'USD' && i2 === 'NPR') {
      let temp = Number(val) * 119.53;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'USD' && i2 === 'CAD') {
      let temp = Number(val) * 1.26;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    //
    else if (i1 === 'EUR' && i2 === 'USD') {
      let temp = Number(val) / 0.85;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'EUR' && i2 === 'INR') {
      let te = Number(val) / 0.85;
      let temp = te * 74.71;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'EUR' && i2 === 'PKR') {
      let te = Number(val) / 0.85;
      let temp = te * 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'EUR' && i2 === 'NPR') {
      let te = Number(val) / 0.85;
      let temp = te * 119.53;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'EUR' && i2 === 'CAD') {
      let te = Number(val) / 0.85;
      let temp = te * 1.26;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    //
    else if (i1 === 'INR' && i2 === 'USD') {
      let temp = Number(val) / 74.71;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'INR' && i2 === 'EUR') {
      let te = Number(val) / 74.71;
      let temp = te * 0.85;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'INR' && i2 === 'PKR') {
      let te = Number(val) / 74.71;
      let temp = te * 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'INR' && i2 === 'NPR') {
      let te = Number(val) / 74.71;
      let temp = te * 119.53;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'INR' && i2 === 'CAD') {
      let te = Number(val) / 74.71;
      let temp = te * 1.26;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    //
    else if (i1 === 'PKR' && i2 === 'USD') {
      let temp = Number(val) / 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'PKR' && i2 === 'EUR') {
      let te = Number(val) / 292.75;
      let temp = te * 74.71;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'PKR' && i2 === 'INR') {
      let te = Number(val) / 74.71;
      let temp = te * 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'PKR' && i2 === 'NPR') {
      let te = Number(val) / 292.75;
      let temp = te * 119.53;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'PKR' && i2 === 'CAD') {
      let te = Number(val) / 292.75;
      let temp = te * 1.26;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    //
    else if (i1 === 'NPR' && i2 === 'USD') {
      let temp = Number(val) / 119.53;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'NPR' && i2 === 'EUR') {
      let te = Number(val) / 119.53;
      let temp = te * 74.71;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'NPR' && i2 === 'INR') {
      let te = Number(val) / 119.53;
      let temp = te * 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'NPR' && i2 === 'PKR') {
      let te = Number(val) / 119.53;
      let temp = te * 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'NPR' && i2 === 'CAD') {
      let te = Number(val) / 119.53;
      let temp = te * 1.26;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    //
    else if (i1 === 'CAD' && i2 === 'USD') {
      let temp = Number(val) / 1.26;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'CAD' && i2 === 'EUR') {
      let te = Number(val) / 1.26;
      let temp = te * 74.71;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'CAD' && i2 === 'INR') {
      let te = Number(val) / 1.26;
      let temp = te * 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'CAD' && i2 === 'PKR') {
      let te = Number(val) / 1.26;
      let temp = te * 292.75;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
    else if (i1 === 'CAD' && i2 === 'NPR') {
      let te = Number(val) / 1.26;
      let temp = te * 119.53;
      temp = temp.toFixed(2);
      setfinal(temp);
    }
  }
  return (
    <>
      <div className="box">
        Enter value : <input type="text" value={val} onChange={(e) => { setval(e.target.value) }} />
        <br />
        <select name="" id="" onChange={(e) => {
          seti1(e.target.value)
          console.log(e.target.value)
        }}>
          <option value="" disabled selected>select</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="PKR">PKR</option>
          <option value="NPR">NPR</option>
          <option value="CAD">CAD</option>
        </select>
        <br />
        <select name="" id="" onChange={(e) => {
          seti2(e.target.value)
          console.log(e.target.value)
        }}>
          <option value="" disabled selected>select</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="PKR">PKR</option>
          <option value="NPR">NPR</option>
          <option value="CAD">CAD</option>
        </select>
        <br />
        <button onClick={gata}>Display</button>
        <br />
        <input type="text" value={final} />
      </div>
    </>
  );
}

export default Currancy;

