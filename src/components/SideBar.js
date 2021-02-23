import React, { useState } from 'react'
import SearchInput from './SearchInput'
import Results from './Results'

const Sidebar = ({ onUpdate }) => {
  const [result, setResult] = useState([])
  console.log('on', onUpdate)
  return (
    <div className="Sidebar">
      <SearchInput
        onSelect={(value) => {
          setResult(() => [...result, value])
          onUpdate('HELLO WORlD')
        }}
      />

      <Results items={result} />
    </div>
  )
}

export default Sidebar
