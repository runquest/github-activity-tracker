import React from 'react'
import { GitCommit } from 'react-feather'
import './CustomTooltip.css'
import Moment from 'react-moment'

const theWeekOf = ({ week }) => {
  let dateInMs = new Date(week * 1000)
  let mondayDate = dateInMs.getDate() - dateInMs.getDay() + 1
  let monday = new Date(dateInMs.setDate(mondayDate))
  return <Moment format="MMM DD, YYYY">{monday}</Moment>
}

const numberOfCommits = ({ payload, name }) => {
  const numberOfCommits = payload[name]
  return `${numberOfCommits} commits`
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const content = payload[0]
    if (!content || !content.payload) return null
    return (
      <div className="CustomTooltip">
        <div className="Week">Week of {theWeekOf(content.payload)}</div>
        <div className="Total">
          <GitCommit size={17} />
          <span style={{ padding: '0 4px  ' }}>{numberOfCommits(content)}</span>
        </div>
      </div>
    )
  }

  return null
}

export default CustomTooltip
