import React, { useState } from 'react'
import SearchInput from './SearchInput'
import Results from './Results'

const Sidebar = ({ onUpdate }) => {
  const [result, setResult] = useState([])

  // const handleSelect = (event, value) => {
  //   setResult((result) => [...result, value])
  //   console.log('RESULT', result)
  // }

  // const handleSelect = (value) => setResult((result) => [...result, value])

  // const addMessage = (newMessage) => setMessages(state => [...state, newMessage])

  return (
    <div className="Sidebar">
      <SearchInput
        onSelect={(value) => {
          setResult(() => [...result, value])
          onUpdate('HELLO WORlD')
        }}
        // onSelect={handleSelect}
      />

      <Results items={result} />
    </div>
  )
}

export default Sidebar
