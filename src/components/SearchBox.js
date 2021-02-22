import _ from 'lodash'
import React from 'react'
import { Search, Grid, Header, Segment, Container } from 'semantic-ui-react'
import SearchResultItem from './SearchResultItem'
import FeatherIcon from 'feather-icons-react';
import axios from 'axios'
import {searchRepos} from './FetchData'
import CustomSearchIcon from './CustomSearchIcon'

const initialState = {
  loading: false,
  results: {},
  value: '',
  placeholder: "Search a GitHub Repository...",
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
      return { ...state, value: '' }

    default:
      throw new Error()
  }
}

const SearchBox = (props) => {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value, placeholder } = state

  const timeoutRef = React.useRef()

  const renderSearchResult = (props) => {
    return <SearchResultItem data={props}/>
  }

  const handleSearchChange = React.useCallback((e, data) => {
      clearTimeout(timeoutRef.current)
      dispatch({ type: 'START_SEARCH', query: data.value })

      timeoutRef.current = setTimeout(() => {
        if (data.value.length < 3) {
          props.onSearch(true)
          return
        }

        props.onSearch(false)
        const re = new RegExp(_.escapeRegExp(data.value), 'i')
        console.log("FETCH DATA - UNCOMMENT")
        // console.log("RE", data.value.length)
        // searchRepos().then((response) => {

        //   const data1 = response.items.map((item) => ({
        //       childKey: item.id,
        //       id: item.id,
        //       title: item.full_name,
        //       full_name: item.full_name,
        //     }));

        //   dispatch({
        //     type: 'FINISH_SEARCH',
        //     results: data1.slice(0, 3)
        //   })
        // })
      }, 300)
    }, []
  )

  const handleOnFocus = (event) => {
    event.target.placeholder = ""
  }

  const handleOnBlur = (event) => {
     dispatch({ type: 'CLEAN_QUERY' })
    event.target.placeholder = placeholder
  }

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleResultSelection = ({data}) => {
    props.onSelect(data.result)
    dispatch({ type: 'CLEAN_QUERY' })
  }

  return (
      <Search
        placeholder={placeholder}
        loading={loading}
        onResultSelect={handleResultSelection}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onSearchChange={handleSearchChange}
        results={results}
        value={value}
        fluid={true}
        minCharacters={3}
        icon={{ children: <CustomSearchIcon /> }}
        resultRenderer={renderSearchResult}
        />
  )
}

export default SearchBox;