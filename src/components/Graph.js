import React, { useState, useContext, useEffect } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  Tooltip,
  CartesianGrid,
  Legend,
  Brush,
  ErrorBar,
  AreaChart,
  Area,
  Label,
  LabelList,
} from 'recharts'
import Moment from 'react-moment'
import { Context } from './Context'
import { GitCommit } from 'react-feather'
import CustomTooltip from './CustomTooltip'

const Graph = () => {
  const [fruit, setFruits] = useContext(Context)
  if (!fruit) return <div className="Graph"></div>
  return (
    <div className="Graph">
      <LineChart className="LineChart" width={700} height={393} data={fruit}>
        {/* <XAxis tickLine={true} dataKey="" interval={'preserveStart'} /> */}
        {/* <YAxis tickLine={false} /> */}
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
