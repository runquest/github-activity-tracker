import _ from 'lodash'
import React from 'react'
import { Search, Grid, Header, Segment, Container, Placeholder } from 'semantic-ui-react'
import SearchResultItem from './SearchResultItem'
import FeatherIcon from 'feather-icons-react';


const source = [
  {title: 'Oneai', description: 'One description', image: 'https://78.media.tumblr.com/9470752623379d94186a87ef5b542d24/tumblr_os2qokbEnP1qfvq9bo1_500h.jpg', price: '$17'},
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

const item = {
  width: '399px',
  height: '44px',
  background: "#ECECF7",
  fontFamily: 'Roboto',
  fontstyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '19px',
  display: 'flex',
  alignitems: 'center',
  color: '#8383AF'
}

const icon = {
  position: 'absolute',
  top: '25%',
  right: '20px',
  transform: 'rotate(-23.02deg)'
}

const SearchBox = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
const searchIcon = () => {
  return <FeatherIcon style={text} size="32" stroke="#bcbcf2" strokeWidth="4px" icon="search" />;

}
  const renderSearchResult = (props) => {
    return <SearchResultItem data={props}/>
  }

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

  const handleOnFocus = (event) => {
    event.target.placeholder = ""
  }

  const handleOnBlur = (event) => {
    event.target.placeholder = "Search a GitHub Repository..."
  }

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])



  return (
      <Search
        placeholder={"Search a GitHub Repository..."}
        loading={loading}
        onResultSelect={
          (e, data) => {
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title})
          }
        }
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
        fluid={true}
        icon={<FeatherIcon style={icon} size="32" stroke="#bcbcf2" strokeWidth="4px" icon="search" />}
        resultRenderer={renderSearchResult}
        />
  )
}

export default SearchBox;
