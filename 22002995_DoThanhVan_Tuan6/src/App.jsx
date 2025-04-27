import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DemoUseState_Counter from './components/DemoUseState_Counter'
import DemoUseState_PrintName from './components/DemoUseState_PrintName'
import DemoUseState_Hidden from './components/DemoUseState_Hidden'
import DemoUseState_Buy from './components/DemoUseState_Buy'
function App() {
  

  return (
    <>
      <div>
          <DemoUseState_Counter/>
          <DemoUseState_PrintName/>
          <DemoUseState_Hidden/>
          <DemoUseState_Buy/>
      </div>
     
    </>
  )
}

export default App
