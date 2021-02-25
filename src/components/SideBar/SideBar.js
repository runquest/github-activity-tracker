import React, { useState, useEffect, useContext } from 'react'
import SearchInput from '../SearchInput'
import Results from '../Results'
import '../../index.css'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <SearchInput />
      <Results />
    </div>
  )
}

export default Sidebar