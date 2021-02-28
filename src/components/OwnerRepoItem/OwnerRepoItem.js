import React, { useState, useEffect, useContext } from 'react'
import './OwnerRepoItem.css'

const OwnerRepoItem = ({ first, second }) => {
  return (
    <div className="OwnerRepo">
      <span>{first}</span> / <span className="First">{second}</span>
    </div>
  )
}

export default OwnerRepoItem
