import React from 'react'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    let week = new Date(payload[0].payload.week * 1000)
    return (
      <div className="CustomTooltip">
        <div className="Week">Week of {week.toDateString()}</div>
        <div className="Total">
          <GitCommit size={17} />
          <span style={{ padding: '0 4px  ' }}>
            {payload[0].payload.total} commits
          </span>
        </div>
      </div>
    )
  }

  return null
}

export default CustomTooltip
