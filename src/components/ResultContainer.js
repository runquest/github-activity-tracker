import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import FeatherIcon from 'feather-icons-react';
import SelectedItem from './SelectedItem'


const container = {
  width: '473px',
  height: '208px',
  cornerRadius: '16px',
  background: '#242432',
  padding: '16px 32px',
  color: 'lightgrey',
  // display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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
  //    <FeatherIcon style={text} size="32" stroke="#bcbcf2" strokeWidth="4px" icon="search" />
  //    <Container text style={text}><p>Search for a GitHub repository to populate graph</p></Container>
  //  </Segment>
  // } 

  // if (data.display) {
    return <SelectedItem info={data.display} />
  // }

  // return null;
}

export default ResultContainer;