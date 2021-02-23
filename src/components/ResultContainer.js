import _ from 'lodash'
import React, { useState } from 'react'

import { Segment, List } from 'semantic-ui-react'
import { Search } from 'react-feather'
import SelectedItem from './SelectedItem'

const container = {
  width: '473px',
  height: 'auto',
  height: '208px',
  cornerRadius: '16px',
  background: '#242432',
  padding: '16px 32px',
  color: 'lig  htgrey',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const resultContainer = {
  background: 'inherit',
  boxSizing: 'border-box',
  padding: '0',
}

const text = {
  fontFamily: 'Roboto',
  width: '100%',
  fontSize: '18px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '#bcbcf2',
}

const ResultContainer = (data) => {
  const [chosen, setChosen] = useState(null)
  const [items, setItems] = useState(data.items)

  if (!items || items.length < 1 || data.is) {
    return (
      <div className="EmptyStateContainer">
        <div className="EmptyStateMessage">
          <Search
            color={'#BCBCF2'}
            size={32}
            style={{ marginBottom: '16px' }}
          />
          <div>Search for a GitHub repository to populate graph</div>
        </div>
      </div>
    )
  }

  return (
    <List className="list" style={resultContainer}>
      {data.items.map((item) => (
        <SelectedItem
          active={item === chosen}
          onHover={() => setChosen(item)}
          onClick={data.onClick(item)}
          onLeaveHover={() => setChosen(null)}
          key={Math.random() * 1000}
          info={item}
        />
      ))}
    </List>
  )
}

export default ResultContainer
