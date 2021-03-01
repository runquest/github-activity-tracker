import React, { useState, useEffect, useCallback } from 'react'
import { Trash, Star } from 'react-feather'
import Moment from 'react-moment'
import './SelectedItem.css'
import OwnerRepoItem from '../OwnerRepoItem'

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

  const numberOfStars = (number) => {
    if (number < 1000) {
      return number
    }

    let thousands = number / 1000
    return `${thousands.toFixed(1)} k`
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
        <OwnerRepoItem
          className={'SelectedItemTopRow'}
          first={item.owner}
          second={item.name}
        />
        <div className={'SelectedItemBottomRow'}>
          <span className={'StarIcon'}>
            <Star size={16} color={'#bcbcf2'} />
          </span>
          <span className={'Starred'}>{numberOfStars(item.stars)}</span>
          <span className={'Updated'}>
            Updated
            <span style={{ paddingLeft: '4px' }}>
              <Moment fromNow>{item.updated}</Moment>
            </span>
          </span>
        </div>
      </div>
      <div className={item === chosen ? 'TrashIcon Active' : 'TrashIcon'}>
        <Trash size={24} color={'#fff'} />
      </div>
    </div>
  )
}

export default SelectedItem
