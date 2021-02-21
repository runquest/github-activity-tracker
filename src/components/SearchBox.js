// import React from 'react';
// import {  Search, Grid, Header, Segment } from 'semantic-ui-react';

// const container = {
//   width: '474px',
//   height: '60px',
//   borderRadius: '4px',
//   marginTop: '80px',
//   background: 'white'
// }



// const SearchBox = () => {
//   return <Input placeholder='Search a Github Repository' style={container} focus />
// }

// export default SearchBox;
import _ from 'lodash'
import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))

const source = [
  {title: 'One', description: 'One description', image: 'https://78.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg', price: '$17'},
  {title: 'Two', description: 'One description', image: 'https://78.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg', price: '$17'},
  {title: 'Three', description: 'One description', image: 'https://78.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg', price: '$17'},
  {title: 'Four', description: 'One description', image: 'https://78.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg', price: '$17'},
  {title: 'Five', description: 'One description', image: 'https://78.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg', price: '$17'},
]

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}


const container = {
  width: '474px',
  height: '60px',
  borderRadius: '4px',
  marginTop: '80px',
  background: 'white'
}

// function SearchBoxe() {
const SearchBox = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (

    <Segment>
      <Search style={container}
        loading={loading}
        onResultSelect={
          (e, data) => {
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title})
          }
        }
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
        />

      <Segment>
        <Header>State</Header>
        <pre style={{ overflowX: 'auto' }}>
          {JSON.stringify({ loading, results, value }, null, 2)}
        </pre>
        <Header>Options</Header>
        <pre style={{ overflowX: 'auto' }}>
          {JSON.stringify(source, null, 2)}
        </pre>
      </Segment>

    </Segment>
  )
}

export default SearchBox;
