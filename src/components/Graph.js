import React from 'react'
import { Segment } from 'semantic-ui-react'
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

const container = {
  width: '902px',
  height: '900px',
  background: 'white',
  marginTop: '0px',
}

const data = [
  { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
  { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
]

const Graph = () => {
  return (
    <LineChart
      style={container}
      width={720}
      height={720}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis dataKey="uv" />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
      {/* <CartesianGrid stroke="#f5f5f5" /> */}

      {/* 
      <Tooltip />
       */}
      {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} /> */}
      {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
    </LineChart>
  )
}

export default Graph
