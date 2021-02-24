import React, { useState } from 'react'
import { Context } from './Context.js'
import Graph from './Graph'
import Sidebar from './Sidebar'

const App = () => {
  const [items, setItems] = useState()
  const [result, serResult] = useState([])

  return (
    <Context.Provider value={[result, serResult]}>
      <Graph />
      <Sidebar />
    </Context.Provider>
  )
}

export default App
