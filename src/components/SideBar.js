import React, { useState } from 'react'
import SearchInput from './SearchInput'
import Results from './Results'

const Sidebar = ({ onUpdate }) => {
  const [result, setResult] = useState([])

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
