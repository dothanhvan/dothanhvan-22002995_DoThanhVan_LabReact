import { useState } from "react"

export default function BaiTap1() {

    const [name, setName] = useState('')

    function handleClick() {

    }

    return (
        <div>
            <div style={{  }}>
                <p>Name:</p>
                <input value={name} onChange={(e) => {setName(e.target.value)}} />
            </div>
            <button onClick={handleClick}>Submit</button>
            <hr/>
            <h2>{name}</h2>
        </div>
    )
}