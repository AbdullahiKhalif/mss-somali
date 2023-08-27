import { useState } from 'react'
import Header from './Components/Header/Header'
import Timer from './Components/Timer/Timer'
import Competitors from './Components/Competitors/Competitors'

function App() {

  return (
    <>
     <div>
      <Header/>
      <Timer/>
      <Competitors/>
     </div>
    </>
  )
}

export default App
