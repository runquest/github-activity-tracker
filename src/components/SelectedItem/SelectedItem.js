import React, { useState, useEffect } from 'react'
import { Trash, Star } from 'react-feather'
import Moment from 'react-moment'
import './SelectedItem.css'

const SelectedItem = ({ active, info, onEnter, onLeave, onClick }) => {
  const [hover, setHover] = useState(0)
  const [wobble, setWobble] = useState(0)

  const customBoxShadow = {
    boxShadow: `inset 8px 0px 0px #${info.color}`,
  }

  const handleMouseEnter = () => {
    setHover(1)
    onEnter()
  }

  const handleMouseLeave = () => {
    setHover(0)
    onLeave()
  }

  const handleOnClick = () => {
    setWobble(1)
    onClick()
  }

  return (
    <div
      className={active ? 'SelectedItem' : 'SelectedItem Inactive'}
      style={{ ...customBoxShadow }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
      onClick={handleOnClick}
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
      <div>
        <Trash size={14} color={'#fff'} />
      </div>
    </div>
  )
}

export default SelectedItem
