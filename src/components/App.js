import React, { useState } from 'react'
import { Context } from './Context.js'
import Graph from './Graph'
import Sidebar from './Sidebar'

const App = () => {
  const [items, setItems] = useState()
  const [result, setResult] = useState([])

  return (
    <Context.Provider value={[result, setResult]}>
      <div className="App">
        <Graph />
        <Sidebar />
      </div>
    </Context.Provider>
  )
}

export default App
