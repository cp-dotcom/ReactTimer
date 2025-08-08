import React, { useRef, useState } from 'react'
function App() {

  const [second,setSecond]=useState(0)
  const [running,setRunning]=useState(false)
  const ref=useRef(null)

  function start(){
    if(running){
      ref.current=setInterval(()=>{
        setSecond(prev=>prev +1)
      },1000)
    }
    setRunning(true)
  }

  function pause(){
    clearInterval(ref.current)
    setRunning(false)
  }
  return (
    <div>
      <h1>timer</h1>
      <h1>{second}</h1>
      <button onClick={start}>start</button>
      <button onClick={pause}>pause</button>
      
    </div>
  )
}

export default App
