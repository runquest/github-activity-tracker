import React, { useState, useContext, useEffect } from 'react'
import { LineChart, Line, Tooltip } from 'recharts'
import Moment from 'react-moment'
import { Context } from '../Context'
import CustomTooltip from '../CustomTooltip'
import './Graph.css'

const Graph = () => {
  const [fruit, setFruits] = useContext(Context)
  if (!fruit) return <div className="Graph"></div>
  return (
    <div className="Graph">
      <LineChart className="LineChart" width={700} height={393} data={fruit}>
        <Tooltip content={<CustomTooltip />} />
        {fruit.map((item) => (
          <Line
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
