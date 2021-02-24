import React, { useState } from 'react'
import { Context } from '../Context.js'
import Graph from '../Graph'
import Sidebar from '../Sidebar'
import '../../index.css'
import './App.css'

const App = () => {
  const [fruit, setFruits] = useState([])

  return (
    <Context.Provider value={[fruit, setFruits]}>
      <div className="App">
        <Graph />
        <Sidebar />
      </div>
    </Context.Provider>
  )
}

export default App
