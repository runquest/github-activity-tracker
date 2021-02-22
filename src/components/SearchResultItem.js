import React from 'react'
import { Search, Grid, Header, Segment, Container, Placeholder } from 'semantic-ui-react'


const container = {
  height: '44px',
}
const SearchResultItem = ({data}) => {
  // console.log("SEARCH RESULT ITEM", data)
  return <Container text style={container}>{data.title}</Container>
}

export default SearchResultItem;