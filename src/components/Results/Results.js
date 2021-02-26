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
          active={item === context.chosen || !context.chosen}
          // onEnter={() => context.setChosen(item)}
          // onLeave={() => context.setChosen(null)}
          onEnter={() => {}}
          onLeave={() => {}}
          key={Math.random() * 1000}
          info={item}
          onClick={() => {
            const modFruit = [...context.fruit]
            modFruit.splice(index, 1)
            context.setFruits(modFruit)
          }}
        />
      ))}
    </List>
  )
}

export default Results
