import React, { useState } from 'react'
import { Context } from '../Context.js'
import Graph from '../Graph'
import Sidebar from '../Sidebar'
import '../../index.css'
import './App.scss'

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
