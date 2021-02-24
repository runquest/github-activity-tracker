import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react'
import { searchForRepo, getRepoCommitActivity } from '../data/api'
import { Search } from 'semantic-ui-react'
import { Context } from './Context'

const SearchInput = () => {
  const [fruit, setFruit] = useContext(Context)
  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState({})
  const [value, setValue] = useState('')
  const [placeholder, setPlaceholder] = useState(
    'Search a GitHub Repository...',
  )

  const timeoutRef = React.useRef()

  const renderSearchResult = ({ title }) => {
    return <div className={'SuggestedItem'}>{title}</div>
  }

  useEffect(() => {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (value.length < 3) return
      const re = new RegExp(_.escapeRegExp(value), 'i') //why do I need this regex here?
      searchForRepo(re).then((items) => {
        setLoading(false)
        setResults(items)
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
    getRepoCommitActivity(result).then((commits) => {
      result.commits = commits
      setFruit(() => [...fruit, result])
    })
    setPlaceholder('Search a GitHub Repository...')
    setValue('')
  }

  return (
    <Search
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
