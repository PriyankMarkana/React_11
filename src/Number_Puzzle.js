import React, { useState } from 'react'
function Number_Puzzle() {
    let [arr, setarr] = useState(["1", "6", "3", " ", "5", "2", "7", "8", "4"]);
    let temp = arr;
    const change = (ind) => {
        if (ind == 0) {
            if (temp[1] == " ") {
                temp[1] = temp[0];
                temp[0] = " "
            }
            else if (temp[3] == " ") {
                temp[3] = temp[0];
                temp[0] = " "
            }
        }

        if (ind == 1) {
            if (temp[0] == " ") {
                temp[0] = temp[1];
                temp[1] = " "
            }
            else if (temp[2] == " ") {
                temp[2] = temp[1];
                temp[1] = " "
            }
            else if (temp[4] == " ") {
                temp[4] = temp[1];
                temp[1] = " "
            }
        }

        if (ind == 2) {
            if (temp[1] == " ") {
                temp[1] = temp[2];
                temp[2] = " ";
            }
            else if (temp[5] == " ") {
                temp[5] = temp[2];
                temp[2] = " ";
            }
        }

        if (ind == 3) {
            if (temp[0] == " ") {
                temp[0] = temp[3];
                temp[3] = " ";
            }
            else if (temp[6] == " ") {
                temp[6] = temp[3];
                temp[3] = " ";
            }
            else if (temp[4] == " ") {
                temp[4] = temp[3];
                temp[3] = " ";
            }
        }

        if (ind == 4) {
            if (temp[1] == " ") {
                temp[1] = temp[4];
                temp[4] = " ";
            }
            else if (temp[3] == " ") {
                temp[3] = temp[4];
                temp[4] = " ";
            }
            else if (temp[5] == " ") {
                temp[5] = temp[4];
                temp[4] = " ";
            }
            else if (temp[7] == " ") {
                temp[7] = temp[4];
                temp[4] = " ";
            }
        }

        if (ind == 5) {
            if (temp[2] == " ") {
                temp[2] = temp[5];
                temp[5] = " ";
            }
            else if (temp[8] == " ") {
                temp[8] = temp[5];
                temp[5] = " ";
            }
            else if (temp[4] == " ") {
                temp[4] = temp[5];
                temp[5] = " ";
            }
        } 
        
        if (ind == 6) {
            if (temp[3] == " ") {
                temp[3] = temp[6];
                temp[6] = " "
            }
            else if (temp[7] == " ") {
                temp[7] = temp[6];
                temp[6] = " "
            }
        }

        if (ind == 7) {
            if (temp[6] == " ") {
                temp[6] = temp[7];
                temp[7] = " "
            }
            else if (temp[8] == " ") {
                temp[8] = temp[7];
                temp[7] = " "
            }
            else if (temp[4] == " ") {
                temp[4] = temp[7];
                temp[7] = " "
            }
        }
        if (ind == 8) {
            if (temp[5] == " ") {
                temp[5] = temp[8];
                temp[8] = " ";
            }
            else if (temp[7] == " ") {
                temp[7] = temp[8];
                temp[8] = " ";
            }
        }

        setarr([...temp])
        if(temp[0]=="1" && temp[1]=="2" && temp[2]=="3" && temp[3]=="4" && temp[4]=="5" && temp[5]=="6" && temp[6]=="7" && temp[7]=="8" && temp[8]=="9")
        {
            alert("You Are Won.......");
        }
    }
    const reset=()=>{
        setarr(["1", "6", "3", " ", "5", " 2", "7", "8", "4"]);
    }
    return (
        <>
        <div className='number_box mt-5'>
            {
                arr.map((ele, ind) => {
                    return (
                        <>
                            <p className='m-0' onClick={(e) => change(ind)}>{ele}</p>
                        </>
                    )
                })
            }
         <input type='button' value="Reset" className='reset' onClick={reset}></input>
        </div>
         </>
    )
}

export default Number_Puzzle;
