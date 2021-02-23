import React, { useState } from 'react'
import { Segment, Container } from 'semantic-ui-react'

import FeatherIcon from 'feather-icons-react'
import ReactTimeAgo from 'react-time-ago'

const container = {
  width: '474px',
  height: 'auto',
  cornerRadius: '4px',
  padding: '16px, 8px, 16px, 24px',
  background: '#272736',
  boxShadow: 'inset 8px 0px 0px #D65C5C',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const description = {
  display: 'flex',
}

const title = {
  height: '24px',
  maxWidth: '399px',
  left: '24px',
  top: '16px',
  borderRadius: 'nullpx',

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
  overflow: 'hidden',
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
  padding: '4px',
}

const owner = {
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '21px',
  letterSpacing: ' 0em',
  textAlign: 'left',
}

const repo = {
  fontFamily: 'Apercu, Roboto',
  fontSize: '18px',
  lineHeight: '21px',
  letterSpacing: '0em',
  textAlign: 'left',
}

const SelectedItem = ({ info, onHover, onClick }) => {
  const [active, setActive] = useState(info.active)

  const customBoxShadow = {
    boxShadow: `inset 8px 0px 0px #${info.color}`,
  }

  const show = {
    display: 'block',
  }

  const hide = {
    display: 'none',
  }

  return (
    <Segment
      className={active ? 'listItem' : 'inactive'}
      style={{ ...container, ...customBoxShadow }}
      onMouseEnter={() => {
        setActive(true)
        onHover
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
      onClick={onClick}
    >
      <div>
        <div style={{ ...title }}>
          <span style={owner}>{info.owner}</span> /
          <span style={repo}>{info.name}</span>
        </div>
        <div>
          <FeatherIcon
            size="10px"
            stroke="#bcbcf2"
            strokeWidth="1px"
            icon="star"
          />
          <span style={starred}>{info.stars.toLocaleString()}k</span>
          <span style={updated}>
            <ReactTimeAgo date={Date.parse(info.updated)} />
          </span>
        </div>
      </div>
      <FeatherIcon
        style={active ? show : hide}
        size="14px"
        stroke="#fff"
        strokeWidth="2px"
        icon="trash"
      />
    </Segment>
  )
}

export default SelectedItem
