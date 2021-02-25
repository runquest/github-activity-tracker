import React, { useState } from 'react'
import { AppProvider } from '../AppContext.js'
import Graph from '../Graph'
import Sidebar from '../Sidebar'
import './App.css'

const App = () => {
  // const [fruit, setFruit] = useState([])
  // const [chosen, setChosen] = useState(null)

  return (
    <AppProvider>
      <div className="App">
        <Graph />
        <Sidebar />
      </div>
    </AppProvider>
  )
}

export default App
