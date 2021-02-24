import React, { useState, useEffect, useContext } from 'react'
import SearchInput from './SearchInput'
import Results from './Results'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <SearchInput />
      <Results />
    </div>
  )
}

export default Sidebar
