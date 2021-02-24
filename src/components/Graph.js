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

const CustomTooltip = ({ active, payload, label }) => {
  // console.log('PAYLOAD', payload.week)
  // console.log('label', payload.total)

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">LABEL</p>
        <p className="intro">AISTE</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    )
  }

  return null
}

const Graph = () => {
  const [fruit, setFruits] = useContext(Context)
  if (!fruit) return <div className="Graph"></div>
  return (
    <div className="Graph">
      <LineChart width={700} height={393}>
        <XAxis dataKey=" " interval={12} angle={30} dx={20} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {fruit.map((item) => (
          <Line
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
