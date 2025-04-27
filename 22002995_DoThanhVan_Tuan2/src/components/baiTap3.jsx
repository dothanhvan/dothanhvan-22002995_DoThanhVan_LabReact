import { use, useState } from "react"

export default function BaiTap3() {

  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [s, setS] = useState('')

  const [result, setResult] = useState(0)

  function handleClick() {
    switch (s) {
      case '+':
        setResult(parseInt(a) + parseInt(b));
        break;
      case '-':
        setResult(parseInt(a) - parseInt(b));
        break;
      case '*':
        setResult(parseInt(a) * parseInt(b));
        break;
      case '/':
        setResult(parseInt(a) / parseInt(b));
        break;
      default:

    }
  }

  return (
    <div>
      <div style={{}}>
        <input onChange={(e) => { setA(e.target.value) }} />
        <hr />
        <input onChange={(e) => { setB(e.target.value) }} />
      </div>
      <hr />
      <input type="radio" name='s' onChange={(e) => { setS(e.target.value) }} value='+' /><span>+</span>
      <input type="radio" name='s' onChange={(e) => { setS(e.target.value) }} value='-' /><span>-</span>
      <input type="radio" name='s' onChange={(e) => { setS(e.target.value) }} value='*' /><span>*</span>
      <input type="radio" name='s' onChange={(e) => { setS(e.target.value) }} value='/' /><span>/</span>
      <hr />
      <button onClick={handleClick}>Calculator</button>
      <hr />
      <h2>{result}</h2>
    </div>
  )
}