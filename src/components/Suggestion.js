import React from 'react'
import { Container } from 'semantic-ui-react'

const Suggestion = ({ data }) => {
  return (
    <Container text style={{ height: '44px' }}>
      {data.title}
    </Container>
  )
}

export default Suggestion
