import { useState } from "react"

export default function BaiTap4() {

    const [test, setTest] = useState('')
    const [list, setList] = useState([])



    function handleClick() {
      setList([...list, test])
    }

    return (
        <div>
            <div style={{  }}>
                <h1>ToDo list</h1>
                <input onChange={(e) => {setTest(e.target.value)}} />
            </div>
            <hr />
            <button onClick={handleClick}>Add todo</button>
            <hr />
            {list.map((item, index) => {
              return (<div key={index} style={{ display: 'flex', alignItems: 'center', gap:10, margin: 10 }}>
                <li >{item}</li>
                <button onClick={(e) => {console.log(e)}}>delete</button>
              </div>
              )
            })}
        </div>
    )
}