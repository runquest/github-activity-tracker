import React, { useState, useContext, useEffect } from 'react'
import {
  XAxis,
  YAxis,
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Moment from 'react-moment'
import { AppContext } from '../AppContext'
import CustomTooltip from '../CustomTooltip'
import './Graph.css'

const Graph = () => {
  const context = useContext(AppContext)

  if (!context.fruit) return <div className="Graph"></div>

  const data = new Array(51)

  context.fruit.forEach((item) => {
    for (let j = 0; j < item.commits.length - 1; j++) {
      const commitWeek = item.commits[j].week
      if (typeof data[j] === 'undefined') {
        const dataPoint = new Object()
        dataPoint.week = commitWeek.toString()
        data[j] = dataPoint
      }
      data[j][item.name] = item.commits[j].total
    }
  })

  return (
    <div className="Graph">
      <ResponsiveContainer>
        <LineChart className="LineChart" data={data}>
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey=" " tickCount={52} />
          <YAxis />
          <Tooltip cursor={<CustomTooltip />} />
          {context.fruit.map((item) => (
            <Line
              type="monotone"
              dataKey={item.name}
              stroke={`#${item.color}`}
              key={item.id}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
