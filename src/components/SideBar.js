import React, { useState, useEffect, useContext } from 'react'
import { Context } from './Context'
import SearchInput from './SearchInput'
import Results from './Results'

const Sidebar = () => {
  const [result, setResult] = useContext(Context)

  return (
    <div className="Sidebar">
      <SearchInput
        onSelect={(value) => {
          setResult(() => [...result, value])
        }}
      />
      <Results />
    </div>
  )
}

export default Sidebar
