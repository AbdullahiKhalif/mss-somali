import { useState } from 'react'
import Header from './Components/Header/Header'
import Timer from './Components/Timer/Timer'
import Competitors from './Components/Competitors/Competitors'
import VoteModal from './Components/Competitors/Competitor/Modal/VoteModal'

function App() {

  return (
    <>
     <div>
      <Header/>
      <Timer/>
      <Competitors/>
      <VoteModal/>
     </div>
    </>
  )
}

export default App
