import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import SearchBox from './SearchBox'
import SideBarEmptyState from './SideBarEmptyState'
import InTheListitem from './InTheListitem'
import FetchData from './FetchData'

const container = {
  width: '538px',
  height: '900px',
  background: '#37374A',
  marginTop: '0px'
}

const SideBar = () => {
    const [visible, setVisibility] = useState(true);

  return <Segment style={container}>
    <SearchBox onSearch={(value) => setVisibility(value)} onSelect={{((value) => setResult(value))}}/>
    {/* <InTheListitem /> */}
    <SideBarEmptyState visibility={visible} />
    {/* <FetchData /> */}
  </Segment>
}

export default SideBar;