import React, { useState } from 'react'
import SearchInput from './SearchInput'
import ResultContainer from './ResultContainer'

const Sidebar = () => {
  const [result, setResult] = useState([])

  return (
    <div className="Sidebar">
      <SearchInput
        onSearch={(value) => setVisibility(value)}
        onSelect={(value) => {
          setResult((result) => [...result, value])
        }}
      />

      <ResultContainer items={result} />
    </div>
  )
}

export default Sidebar
