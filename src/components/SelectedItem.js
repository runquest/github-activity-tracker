import React, { useState, useEffect } from 'react'
import { Trash, Star } from 'react-feather'
import Moment from 'react-moment'

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
          <span className={'Starred'}>{info.stars}</span>
          <span className={'Updated'}>
            Updated
            <span style={{ paddingLeft: '4px' }}>
              <Moment fromNow>{info.updated}</Moment>
            </span>
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
