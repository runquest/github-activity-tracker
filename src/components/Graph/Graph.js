import React, { useState, useContext, useEffect } from 'react'
import { LineChart, Line, Tooltip } from 'recharts'
import Moment from 'react-moment'
import { AppContext } from '../AppContext'
import CustomTooltip from '../CustomTooltip'
import './Graph.css'

const Graph = () => {
  const context = useContext(AppContext)

  if (!context.fruit) return <div className="Graph"></div>
  console.log('GRAPH', context.chosen)

  return (
    <div className="Graph">
      <LineChart
        className="LineChart"
        width={700}
        height={393}
        data={context.fruit}
      >
        <Tooltip content={<CustomTooltip />} />
        {context.fruit.map((item) => (
          <Line
            className={
              context.chosen === null || context.chosen === item
                ? ''
                : 'Inactive'
            }
            type="monotone"
            activeDot={{ r: 8 }}
            dataKey="total"
            data={item.commits}
            name={item.color}
            stroke={`#${item.color}`}
            strokeWidth={3}
            key={Math.random()}
          />
        ))}
      </LineChart>
    </div>
  )
}

export default Graph
