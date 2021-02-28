import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext'
import { List } from 'semantic-ui-react'
import SelectedItem from '../SelectedItem'
import EmptyResultContainer from '../EmptyResultContainer'
import './Results.css'

const Results = () => {
  const context = useContext(AppContext)

  if (!context.fruit || context.fruit.length < 1) {
    return <EmptyResultContainer />
  }

  return (
    <List className="ResultsList">
      {context.fruit.map((item, index) => (
        <SelectedItem
          chosen={context.chosen}
          onEnter={() => context.setChosen(item)}
          onLeave={() => context.setChosen(null)}
          key={item.id}
          item={item}
          onClick={() => {
            const modFruit = [...context.fruit]
            modFruit.splice(index, 1)
            context.setFruit(modFruit)
          }}
        />
      ))}
    </List>
  )
}

export default Results
