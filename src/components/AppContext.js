import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [fruit, setFruit] = useState([])
  const [chosen, setChosen] = useState(null)

  return (
    <AppContext.Provider
      value={{
        fruit,
        chosen,
        setFruit,
        setChosen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
