import React, { useState } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import SearchBox from './SearchBox'
import ResultContainer from './ResultContainer'
import FetchData from './FetchData'

const source = {}
const container = {
  width: '538px',
  height: '900px',
  background: '#37374A',
  marginTop: '0px'
}

const SideBar = () => {
  const [visible, setVisibility] = useState(true);
  const [result, setResult] = useState([]);

  return <Segment style={container}>
    <SearchBox 
      onSearch={(value) => setVisibility(value)} 
      onSelect={(value) => {
        setResult(result => [...result, value]);
        }}/>

    <ResultContainer 
      visibility={true} 
      display={result} />
  </Segment>
}

export default SideBar;