import React from 'react'
import { Search } from 'react-feather'

const EmptyResultContainer = () => {
  return (
    <div className="EmptyStateContainer">
      <div className="EmptyStateMessage">
        <Search color={'#BCBCF2'} size={32} style={{ marginBottom: '16px' }} />
        <div>Search for a GitHub repository to populate graph</div>
      </div>
    </div>
  )
}

export default EmptyResultContainer
