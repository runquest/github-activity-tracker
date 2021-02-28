import React from 'react'
import { Search } from 'react-feather'
import './EmptyResultContainer.css'

const EmptyResultContainer = () => {
  return (
    <div className="EmptyStateContainer">
      <div className="EmptyStateMessage">
        <Search className="SearchIcon" stroke-width={2} size={32} />
        <div>Search for a GitHub repository to populate graph</div>
      </div>
    </div>
  )
}

export default EmptyResultContainer
