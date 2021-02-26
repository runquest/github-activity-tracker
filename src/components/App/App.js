import React from 'react'
import { AppProvider } from '../AppContext.js'
import Graph from '../Graph'
import Sidebar from '../Sidebar'
import './App.css'

const App = () => {
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
