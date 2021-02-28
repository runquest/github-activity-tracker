import React, { useState, useEffect, useCallback } from 'react'
import { Trash, Star } from 'react-feather'
import Moment from 'react-moment'
import './SelectedItem.css'

const SelectedItem = ({ chosen, item, onEnter, onLeave, onClick }) => {
  const customBoxShadow = {
    boxShadow: `inset 8px 0px 0px #${item.color}`,
  }

  const handleMouseEnter = () => {
    onEnter()
  }

  const handleMouseLeave = () => {
    onLeave()
  }

  const handleOnClick = () => {
    onClick()
  }

  return (
    <div
      className={
        item === chosen || !chosen ? 'SelectedItem' : 'SelectedItem Inactive'
      }
      style={{ ...customBoxShadow }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <div className={'SelectedItemMetadata'}>
        <div className={'SelectedItemTopRow'}>
          <span className={'Owner'}>{item.owner}</span>/
          <span className={'Repo'}>{item.name}</span>
        </div>
        <div className={'SelectedItemBottomRow'}>
          <span>
            <Star size={14} color={'#bcbcf2'} />
          </span>
          <span className={'Starred'}>{item.stars}</span>
          <span className={'Updated'}>
            Updated
            <span style={{ paddingLeft: '4px' }}>
              <Moment fromNow>{item.updated}</Moment>
            </span>
          </span>
        </div>
      </div>
      <div className={item === chosen ? 'TrashIcon Active' : 'TrashIcon'}>
        <Trash size={14} color={'#fff'} />
      </div>
    </div>
  )
}

export default SelectedItem
