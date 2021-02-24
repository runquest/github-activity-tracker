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
import { Context } from './Context'

const CustomTooltip = ({ payload }) => {
  // console.log('label', payload.payload)

  // if (payload && payload.payload) {
  //   console.log('PAYLOAD', payload)
  //   return (
  //     <div className="CustomTooltip">
  //       <p className="Week">`${payload.payload.week}`</p>
  //       <p className="Commits">{payload.payload.total}</p>
  //     </div>
  //   )
  // }

  return null
}

const Graph = () => {
  const [fruit, setFruits] = useContext(Context)
  if (!fruit) return <div className="Graph"></div>
  return (
    <div className="Graph">
      <LineChart width={700} height={393} data={fruit}>
        <XAxis dataKey="" interval={52} />
        {/* <YAxis label="" /> */}
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
