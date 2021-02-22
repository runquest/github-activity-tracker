import _ from 'lodash'
import React from 'react';

import { Segment, List } from 'semantic-ui-react';
import FeatherIcon from 'feather-icons-react';
import SelectedItem from './SelectedItem'


const container = {
  width: '473px',
  height: 'auto',
  height: '208px',
  cornerRadius: '16px',
  background: '#242432',
  padding: '16px 32px',
  color: 'lig  htgrey',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const resultContainer = {
  background: 'inherit',
  boxSizing: 'border-box',
  padding: '0'
}

const text = {
  fontFamily: 'Roboto',
  width: '100%',
  fontSize: '18px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '#bcbcf2',
}



const ResultContainer = (data) => {
  // console.log("RC Data", data.display)
  // if (data.visibility) {
  //   return <Segment style={container}>
  //    <FeatherIcon style={text} size="32px" stroke="#bcbcf2" strokeWidth="4px" icon="search" />
  //    <div style={text}>Search for a GitHub repository to populate graph</div>
  //  </Segment>
  // } 


  // if (data.display) {
    return (
    <List className='list' style={resultContainer}>
      {data.display.map((item) => (
        <SelectedItem key={item.node_id} info={item} />
      ))}
     </List>
  );
//   }

//  return null;
}

export default ResultContainer;