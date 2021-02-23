import React, { useState } from 'react'
import Graph from './Graph'
import Sidebar from './Sidebar'

const App = () => {
  const [items, setItems] = useState()

  return (
    <div className="App">
      <Graph data={items} />
      <Sidebar onUpdate={(result) => console.log('REsULT', result)} />
    </div>
  )
}

export default App
