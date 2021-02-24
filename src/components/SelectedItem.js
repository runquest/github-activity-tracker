import React, { useState, useEffect } from 'react'

import ReactTimeAgo from 'react-time-ago'
import { Trash, Star } from 'react-feather'

const SelectedItem = ({ active, info, onHover, onLeaveHover, onClick }) => {
  const [hover, setHover] = useState(false)
  const customBoxShadow = {
    boxShadow: `inset 8px 0px 0px #${info.color}`,
  }

  const handleMouseEnter = () => {
    setHover(true)
    onHover()
  }

  const handleMouseLeave = () => {
    setHover(false)
    onLeaveHover()
  }

  return (
    <div
      className={active ? 'SelectedItem' : 'SelectedItem Inactive'}
      style={{ ...customBoxShadow }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
      <div style={{ display: hover ? 'block' : 'none' }}>
        <Trash size={14} color={'#fff'} />
      </div>
    </div>
  )
}

export default SelectedItem
