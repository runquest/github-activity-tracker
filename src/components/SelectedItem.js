import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import FeatherIcon from 'feather-icons-react';
import ReactTimeAgo from 'react-time-ago'

const container = {
  width: '474px',
  height: 'auto',
  cornerRadius: '4px',
  padding: '16px, 8px, 16px, 24px',
  background: '#272736',
  boxShadow: 'inset 8px 0px 0px #D65C5C'
}

const description = {
  display: 'flex'
}

const title = {
  height: '24px',
  maxWidth: '399px',
  left: '24px',
  top: '16px',
  borderRadius: 'nullpx',

  // fontFamily: Roboto;
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '21px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: '#BFBDD9',


textOverflow: 'ellipsis',

  /* Required for text-overflow to do anything */
  whiteSpace: 'nowrap',
  overflow: 'hidden'

  // // font-family: Roboto;
  // font-size: 18px;
  // font-style: normal;
  // font-weight: 700;
  // line-height: 21px;
  // letter-spacing: 0em;
  // text-align: left;

  // font-family: Apercu;
  // font-size: 18px;
  // line-height: 21px;
  // letter-spacing: 0em;
  // text-align: left;


}

const starred = {
 
fontSize: '14px',
fontStyle: 'normal',
fontWeight: '700',
lineHeight: '16px',
letterSpacing: '0em',
textAlign: 'left',
padding: '4px',
color: '#fff',

}

const updated = {
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '16px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: '#bfbdd9',
  padding: '4px'
}

const owner = {

  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '21px',
  letterSpacing:' 0em',
  textAlign: 'left'

}

const repo = {
  fontFamily: 'Apercu, Roboto',
  fontSize: '18px',
  lineHeight: '21px',
  letterSpacing: '0em',
  textAlign: 'left'
}

const handleFocus = (event) => {
  // console.log("HANDLE FOCUS")
}


const SelectedItem = (props) => {

  const customBoxShadow = {
    boxShadow: `inset 8px 0px 0px #${props.info.color}`
  }

  console.log("SELECTED ITEM", props.info)
  return <Segment className="listItem" style={{...container, ...customBoxShadow}}
  onMouseEnter={() => {}}
        onMouseLeave={() =>  {}}>
    <div style={{...title}}><span style={owner}>{props.info.owner}</span> / <span style={repo}>{props.info.name}</span></div>
    <div>
      <FeatherIcon 
        size="10px" 
        stroke="#bcbcf2" 
        strokeWidth="1px" 
        icon="star" />
      <span style={starred}>{props.info.stars.toLocaleString()}k</span>
      <span style={updated}><ReactTimeAgo date={Date.parse(props.info.updated)} /></span>
     </div>
  </Segment>
}

export default SelectedItem;