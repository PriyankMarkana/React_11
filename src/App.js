import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Task1 from './Task1';
import Number_Puzzle from './Number_Puzzle';
import Currancy from './Currancy';
let tmp = ["", "", "", "", "", "", "", "",""];
let temp = [];
function App() {



  // ----------task2-------

  let [s, sets] = useState('');
  let [c1, setc1] = useState('');
  let [c2, setc2] = useState('');
  let [ans, setans] = useState();
  const convert = () => {
    let ans1;
    if (c2 == 'usd2') {
      ans1 = s * 1;
      setans(ans1);
    }
    else if (c2 == 'eur2') {
      ans1 = s * 0.85;
      setans(ans1);
    }
    else if (c2 == 'inr2') {
      ans1 = s * 74.71;
      setans(ans1);
    }
    else if (c2 == 'pkr2') {
      ans1 = s * 292.75;
      setans(ans1);
    }
    else if (c2 == 'npr2') {
      ans1 = s * 119.53;
      setans(ans1);
    }
    else if (c2 == 'cad2') {
      ans1 = s * 1.26;
      setans(ans1);
    }
  }



  // -----------------tic tac toe------------------
  let [toe, settoe] = useState(["", "", "", "", "", "", "", "", ""]);
  let [i, seti] = useState(0);
  let [res, setres] = useState("Result");
  let [ref, setref] = useState("");

  const tic = (ind) => {
    if (i >= 0) {
      if (tmp[ind] == "") {
        if (i % 2 == 0) {
          tmp[ind] = "x";
          temp[ind] = "x";
          seti(i + 1);
        }
        else {
          tmp[ind] = "o";
          temp[ind] = "o";
          seti(i + 1);
        }
      }
    }
    settoe(tmp);
    win()
  }
  const win = () => {
    let cnt=0;
    for(let j=0;j<tmp.length;j++){
      if(tmp[j]!=''){
        cnt++;
      }
    }
    if(cnt==9){
      setres("Draw..")
    }

    if (temp[0] == "x" && temp[1] == "x" && temp[2] == "x") {
      setres("X Is Won");
      seti(-1);
    }
    else if (temp[3] == "x" && temp[4] == "x" && temp[5] == "x") {
      setres("X Is Won");
      seti(-1);
    }
    else if (temp[6] == "x" && temp[7] == "x" && temp[8] == "x") {
      setres("X Is Won");
      seti(-1);
    }
    else if (temp[0] == "x" && temp[3] == "x" && temp[6] == "x") {
      setres("X Is Won");
      seti(-1);
    }
    else if (temp[1] == "x" && temp[4] == "x" && temp[7] == "x") {
      setres("X Is Won");
      seti(-1);
    }
    else if (temp[2] == "x" && temp[5] == "x" && temp[8] == "x") {
      setres("X Is Won");
      seti(-1);
    }
    else if (temp[0] == "x" && temp[4] == "x" && temp[8] == "x") {
      setres("X Is Won");
      seti(-1);
    }
    else if (temp[2] == "x" && temp[4] == "x" && temp[6] == "x") {
      setres("X Is Won");
      seti(-1);
    }

    if (temp[0] == "o" && temp[1] == "o" && temp[2] == "o") {
      setres("O Is Won");
      seti(-1);
    }
    else if (temp[3] == "o" && temp[4] == "o" && temp[5] == "o") {
      setres("O Is Won");
      seti(-1);
    }
    else if (temp[6] == "o" && temp[7] == "o" && temp[8] == "o") {
      setres("O Is Won");
      seti(-1);
    }
    else if (temp[0] == "o" && temp[3] == "o" && temp[6] == "o") {
      setres("O Is Won");
      seti(-1);
    }
    else if (temp[1] == "o" && temp[4] == "o" && temp[7] == "o") {
      setres("O Is Won");
      seti(-1);
    }
    else if (temp[2] == "o" && temp[5] == "o" && temp[8] == "o") {
      setres("O Is Won");
      seti(-1);
    }
    else if (temp[0] == "o" && temp[4] == "o" && temp[8] == "o") {
      setres("O Is Won");
      seti(-1);
    }
    else if (temp[2] == "o" && temp[4] == "o" && temp[6] == "o") {
      setres("O Is Won");
      seti(-1);
    }
  }
  const refresh=()=>{
    seti(0);
    setres("Result");
    temp=[];
    settoe(["","","","","","","","",""]);
    tmp=["","","","","","","","",""];
  }
  return (
    <>

      {/* <Task1/> */}

      <Currancy></Currancy>

      {/* <div className='task2'>

   <h3>task 2</h3>
   <input type='text' onChange={(e)=>sets(e.target.value)}></input><br></br>


   <select  onChange={(e)=>setc2(e.target.value)}>
    <option>select</option>
    <option value="usd2">USD</option>
    <option value="eur2">EUR</option>
    <option value="inr2">INR</option>
    <option value="pkr2">PKR</option>
    <option value="npr2">NPR</option>
    <option value="cad2">CAD</option>
   </select>
   <br></br>

   <input type='button' value="convert" onClick={convert}></input>
   <input type='text' value={ans}></input>
   </div> */}
      {/* <br></br> */}

      {/* Tic Tac Toe*/}
      {/* <div className='tic'>
        <h4>Tic Tac Toe</h4>
        <div className='box'>
          {
            toe.map((ele, ind) => {
              return (
                <input type='button'  onClick={(e) => tic(ind)} value={ele}></input>
              )
            })
          }
        </div>
        <p className='result'>{res}</p><p className="result" onClick={refresh}>Restart</p>
      </div> */}

      {/* -----------Number Puzzle -------------*/}
      {/* <Number_Puzzle></Number_Puzzle> */}

    </>
  );
}


export default App;
