import React, {useState} from 'react'

function PrintName () {
    const [name, setName] = useState('')
    var outputName = ''
    const handleChange = (e) => {
        outputName = e.target.value
    }

    const updateName = () => {
      setName(outputName)
    }

    const deleteName = () => {
        setName('')
        document.getElementsByTagName('input')[0].value = ''

    }

    return(
        <>
            <div style={{backgroundColor : '#56c556', width: "500px", height: "250px"}}>
                <h1>Bài 2</h1>
                <input type="text" placeholder='Nhập tên vào đây...' onChange={handleChange}/>
                <h2>Xin chào {name}</h2>
                <button onClick={updateName}>Nộp</button>
                <button onClick={deleteName}>Xóa trắng</button>
            </div>
        </>
    )
  
}

export default PrintName