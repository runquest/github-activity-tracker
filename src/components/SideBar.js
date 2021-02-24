import React, { useState, useEffect } from 'react'
import SearchInput from './SearchInput'
import Results from './Results'

const Sidebar = ({ onUpdate }) => {
  const [result, setResult] = useState([])

  useEffect(()=> {onUpdate(result)}, [result])

  return (
    <div className="Sidebar">
      <SearchInput
        onSelect={(value) => {
          setResult(() => [...result, value])
        }}
      />

      <Results items={result} />
    </div>
  )
}

export default Sidebar
