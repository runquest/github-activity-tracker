import React, { useState } from 'react'
import Graph from './Graph'
import Sidebar from './Sidebar'

const App = () => {
  const [items, setItems] = useState()

  return (
    <div className="App">
      <Graph data={items} />
      <Sidebar onUpdate={(value) => console.log('APP onUpdate', value)} />
    </div>
  )
}

export default App
