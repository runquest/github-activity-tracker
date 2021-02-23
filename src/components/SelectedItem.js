import React, { useState } from 'react'
import { Segment, Container } from 'semantic-ui-react'

import FeatherIcon from 'feather-icons-react'
import ReactTimeAgo from 'react-time-ago'
import { Trash, Star } from 'react-feather'

const description = {
  display: 'flex',
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
      className={active ? 'SelectedItem' : 'SelectedItem inactive'}
      style={{ ...customBoxShadow }}
      onMouseEnter={() => {
        setActive(true)
        onHover
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
      onClick={onClick}
    >
      <div className={'SelectedItemMetadata'}>
        <div className={'SelectedItemTopRow'}>
          <span className={'Owner'}>{info.owner}</span> /
          <span className={'Repo'}>{info.name}</span>
        </div>
        <div className={'SelectedItemBottomRow'}>
          <Star size={10} color={'#bcbcf2'} />
          <span className={'Starred'}>{info.stars.toLocaleString()}k</span>
          <span className={'Updated'}>
            <ReactTimeAgo date={Date.parse(info.updated)} />
          </span>
        </div>
      </div>
      <Trash style={active ? show : hide} size={14} color={'#fff'} />
    </Segment>
  )
}

export default SelectedItem
