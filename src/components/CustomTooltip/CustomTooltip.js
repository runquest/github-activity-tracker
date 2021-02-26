import React from 'react'
import { GitCommit } from 'react-feather'
import './CustomTooltip.css'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    let pl = payload[0].payload
    let week = new Date(pl.week * 1000)
    let dataKey = payload[0].dataKey
    let commits = payload[0].payload[payload[0].dataKey]
    return (
      <div className="CustomTooltip">
        <div className="Week">Week of {week.toDateString()}</div>
        <div className="Total">
          <GitCommit size={17} />
          <span style={{ padding: '0 4px  ' }}>{commits} commits</span>
        </div>
      </div>
    )
  }

  return null
}

export default CustomTooltip
