import React, { useState, useContext } from 'react'
import { Context } from './Context'
import { List } from 'semantic-ui-react'
import SelectedItem from './SelectedItem'
import EmptyResultContainer from './EmptyResultContainer'

const Results = () => {
  const [fruit, setFruits] = useContext(Context)
  const [chosen, setChosen] = useState(null)

  if (!fruit || fruit.length < 1) {
    return <EmptyResultContainer />
  }

  return (
    <List className="ResultsList">
      {fruit.map((item) => (
        <SelectedItem
          active={item === chosen || !chosen}
          onHover={() => setChosen(item)}
          // onClick={data.onClick(item)}
          onLeaveHover={() => setChosen(null)}
          key={Math.random() * 1000}
          info={item}
        />
      ))}
    </List>
  )
}

export default Results
