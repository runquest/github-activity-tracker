import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react'
import { searchForRepo, getRepoCommitActivity } from '../Api'
import { Search } from 'semantic-ui-react'
import { AppContext } from '../AppContext'
import { SearchIcon } from 'react-feather'
import './SearchInput.css'
import 'semantic-ui-css/semantic.min.css'
import OwnerRepoItem from '../OwnerRepoItem'

const SearchInput = () => {
  const context = useContext(AppContext)
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState({})
  const [value, setValue] = useState('')
  const [placeholder, setPlaceholder] = useState(
    'Search a GitHub Repository...',
  )

  const timeoutRef = React.useRef()

  const renderSearchResult = ({ name, owner }) => {
    return (
      <OwnerRepoItem className="SearchSuggestion" first={owner} second={name} />
    )
  }

  useEffect(() => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (value.length < 3) return
      const re = new RegExp(_.escapeRegExp(value), 'i') //why do I need this regex here?
      searchForRepo(re)
        .then((items) => {
          setLoading(false)
          setResults(items)
        })
        .catch((message) => {
          setLoading(false)
          setValue('')
          setPlaceholder(message)
        })
    }, 300)
  }, [value])

  const handleSearchChange = React.useCallback((e, input) => {
    clearTimeout(timeoutRef.current)
    setLoading(true)
    setValue(input.value)
  }, [])

  const handleOnBlur = () => {
    setPlaceholder('Search a GitHub Repository...')
    setValue('')
  }

  const handleResultSelection = (event, { result }) => {
    getRepoCommitActivity(result)
      .then((commits) => {
        result.commits = commits
        context.setFruit(() => [...context.fruit, result])
      })
      .catch((error) => {
        setPlaceholder(error)
      })
    setPlaceholder('Search a GitHub Repository...')
    setValue('')
  }

  return (
    <Search
      className="SearchInput"
      placeholder={placeholder}
      loading={loading}
      onResultSelect={handleResultSelection}
      onBlur={handleOnBlur}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
      fluid={true}
      minCharacters={3}
      resultRenderer={renderSearchResult}
    />
  )
}

export default SearchInput
