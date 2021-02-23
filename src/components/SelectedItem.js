import React, { useState } from 'react'

import ReactTimeAgo from 'react-time-ago'
import { Trash, Star } from 'react-feather'

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
    <div
      className={'SelectedItem'}
      // className={active ? 'SelectedItem' : 'SelectedItem inactive'}
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
          <span className={'Owner'}>{info.owner}</span>/
          <span className={'Repo'}>{info.name}</span>
        </div>
        <div className={'SelectedItemBottomRow'}>
          <span>
            <Star size={14} color={'#bcbcf2'} />
          </span>
          <span className={'Starred'}>{info.stars.toLocaleString()}k</span>
          <span className={'Updated'}>
            <ReactTimeAgo date={Date.parse(info.updated)} />
          </span>
        </div>
      </div>
      <div style={active ? show : hide}>
        <Trash size={14} color={'#fff'} />
      </div>
    </div>
  )
}

export default SelectedItem
