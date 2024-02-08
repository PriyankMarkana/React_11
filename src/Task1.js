import { useState } from 'react';

function Task1() {
    let [arr1, setarr1] = useState([])
    let [tmp, settmp] = useState([])
    let [ser, setser] = useState('')
    let [val, setval] = useState("")
    let [up, setup] = useState(null)
    let [id, setid] = useState(0)


    const add = () => {
        if (up != null) {
            const temparr = arr1;
            temparr[up].task = val;
            setarr1(temparr);
            settmp(temparr)
            setup(null);
            setval("")
        }
        else {
            let task = val;
            setarr1([...arr1, { task: task, check: false, id: id }]);
            settmp([...tmp, { task: task, check: false, id: id }]);
            setval("")
            setid((id + 1));
        }
    }

    const del = (ind) => {
        let temp = arr1.filter((ind1) => {
            return ind != ind1;
        })
        settmp(temp)
        setarr1(temp)
    }

    const edit = (ind) => {
        setval(arr1[ind].task);
        setup(ind);
    }

    const check = (ele,ind) => {
        let temp = [...arr1];
        for (let i = 0; i < temp.length; i++) {
            if (i === ind) {
                if (temp[i].check === false) {
                    temp[i].check = true;
                }
                else {
                    temp[i].check = false;
                }
            }
        }
        setarr1(temp)
        settmp(temp)
    }

    const uncom = () => {
        let temp1 = tmp.filter((ele) => {
            return (
                ele.check === false
            )
        })
        setarr1(temp1);
    }
    const com = () => {
        let temp1 = tmp.filter((ele) => {
            return (
                ele.check === true
            )
        })
        setarr1(temp1);
    }
    const all = () => {
        setarr1([...tmp]);
    }
    const ser1 = (ser) => {
        let ser1 = tmp.filter((ele) => {
            return ele.task === ser;
        })
        setarr1(ser1);
    }
    return (
        <div className='task1'>
            <h5>Todo List</h5>
            <div className='textbox'>
                <input type='text'  className="val" value={val} onChange={(e) => setval(e.target.value)}></input>
                <input type='button' className='add' value="Add" onClick={() => add()}></input>
            </div>
            <div className='fun'>
                <div className='search'>
                    <input type='text' placeholder='Search' onChange={(e) => setser(e.target.value)}></input>
                    <input type='button' onClick={(e) => ser1(ser)} value="search"></input>
                </div>
               <div className='list'>
                    <input type='button' onClick={uncom} value="Incomplate"></input>
                    <input type='button' value="Complate" onClick={com}></input>
                    <input type='button' value="All" onClick={all}></input>
               </div>
            </div>
            <table className='table'>
                {
                    arr1.map((ele, ind) => {
                        return (
                            <tr key={ind} className='tr'>
                                <td className='td'><input type='checkbox' checked={ele.check} onClick={(e) => check(ele,ind)}></input>
                                    <input type='text' style={{ textDecoration: ele.check ? "line-through" : "" }} readOnly value={ele.task}></input>
                                   <div>
                                   <input type='button' className="btn" value="Edit" onClick={(e) => edit(ind)}></input>
                                    <input type='button'  className="btn"value="Delete" onClick={(e) => del(ele, ind)}></input>
                                   </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <br></br>
        </div>
    )
}
export default Task1;