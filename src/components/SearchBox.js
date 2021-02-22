import _ from 'lodash'
import React from 'react'
import { Search, Grid, Header, Segment, Container, Placeholder } from 'semantic-ui-react'
import SearchResultItem from './SearchResultItem'
import FeatherIcon from 'feather-icons-react';

const source = [

  // {
  //   "title": "D'Amore, Cummerata and Dicki",
  //   "description": "Expanded 24/7 service-desk",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/cloudstudio/128.jpg",
  //   "price": "$59.19"
  // },
  // {
  //   "title": "Hudson, Rippin and Schiller",
  //   "description": "Exclusive didactic productivity",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/josecarlospsh/128.jpg",
  //   "price": "$28.72"
  // },
  // {
  //   "title": "Torp, Wolf and Collins",
  //   "description": "User-friendly asymmetric matrices",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/tjisousa/128.jpg",
  //   "price": "$17.26"
  // },
  // {
  //   "title": "Mraz, Stracke and Keeling",
  //   "description": "Multi-tiered hybrid groupware",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/overcloacked/128.jpg",
  //   "price": "$22.65"
  // },
  // {
  //   "title": "Mayer, Keeling and Bechtelar",
  //   "description": "Extended client-driven productivity",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/yassiryahya/128.jpg",
  //   "price": "$67.07"
  // } 

  {
    // "id": "10270250",
            "node_id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==1",
            "title": "react12",
            "full_name": "facebook/react",
            "private": "false",
  },
     {
      //  "id": "135786093",
            "node_id": "MDEwOlJlcG9zaXRvcnkxMzU3ODYwOTM=2",
            "title": "react2",
            "full_name": "typescript-cheatsheets/react",
            "private": "false",
  },
    {
            // "id": "75396575",
            "node_id": "MDEwOlJlcG9zaXRvcnk3NTM5NjU3NQ==3",
            "title": "react3",
            "full_name": "duxianwei520/react",
            "private": "false",
  },
    {
            // "id": "90759930",
            "node_id": "MDEwOlJlcG9zaXRvcnk5MDc1OTkzMA==4",
            "title": "react4",
            "full_name": "discountry/react",
            "private": "false",
  },
    {
            // "id": "72628285",
            "node_id": "MDEwOlJlcG9zaXRvcnk3MjYyODI4NQ==5",
            "title": "react5",
            "full_name": "Cathy0807/react",
            "private": "false",
  },
]

const initialState = {
  loading: false,
  results: [],
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

const iconStyle = {
  position: 'absolute',
  top: '50%',
  right: '24px',
  transform: 'translateY(-50%) rotate(-23.02deg)'
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
        if (data.value.length === 0) {
          props.onSearch(true)
          return
        }

        props.onSearch(false)
        const re = new RegExp(_.escapeRegExp(data.value), 'i')
        const isMatch = (result) => {
          return  re.test(result.title)
        }

        const list = _.filter(source, isMatch);

        dispatch({
          type: 'FINISH_SEARCH',
          // results: list,
          results: list.slice(0, 3)
          //  dispatch({ type: 'CLEAN_QUERY' })
        })
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

  const customSearchIcon = () => {
    return (<FeatherIcon 
      style={iconStyle} 
      size="16px" 
      stroke="#34374a" 
      strokeWidth="2px" 
      icon="search" />);
  }

  const handleResultSelection = (event, data) => {
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
        icon={{ children: customSearchIcon }}
        resultRenderer={renderSearchResult}
        />
  )
}

export default SearchBox;