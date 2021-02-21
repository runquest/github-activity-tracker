import React from 'react';
import { Segment } from 'semantic-ui-react';
import SearchBox from './SearchBox'
import SideBarEmptyState from './SideBarEmptyState'

const container = {
  width: '538px',
  height: '900px',
  background: '#37374A',
  marginTop: '0px'
}



const SideBar = () => {
  return <Segment style={container}>
    <SearchBox />
    <SideBarEmptyState />
  </Segment>
}

export default SideBar;