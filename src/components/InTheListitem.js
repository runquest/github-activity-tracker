import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import FeatherIcon from 'feather-icons-react';

const container = {
  width: '474px',
  height: 'auto',
  cornerRadius: '4px',
  padding: '16px, 24px, 16px, 24px',
  background: '#272736',
  boxShadow: 'inset 8px 0px 0px #D65C5C'
}


const InTheListitem = (props) => {
  return <Segment style={container}>
    <Container text>flutter / flutter</Container>
    <FeatherIcon size="32" stroke="#bcbcf2" strokeWidth="4px" icon="star" />
    <Container text>92.8k</Container>
    <Container text>Updated 2 hours ago</Container>
     <FeatherIcon size="32" stroke="#bcbcf2" strokeWidth="4px" icon="trash" />
  </Segment>
}

export default InTheListitem;