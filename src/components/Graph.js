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

const Graph = ({ items }) => {
  console.log('graph - data', items)
  return (
    <div className="Graph">
      {/* <LineChart width={854} height={786} data={data}>
        <Line type="monotone" dataKey="total" stroke="#ff7300" yAxisId={0} />
      </LineChart> */}
    </div>
  )
}

const data = [
  {
    total: 29,
    week: 1583020800,
    days: [0, 4, 4, 5, 8, 7, 1],
  },
  {
    total: 27,
    week: 1583625600,
    days: [0, 0, 7, 9, 7, 4, 0],
  },
  {
    total: 34,
    week: 1584230400,
    days: [0, 4, 7, 8, 9, 2, 4],
  },
  {
    total: 22,
    week: 1584835200,
    days: [2, 2, 4, 6, 6, 1, 1],
  },
  {
    total: 54,
    week: 1585440000,
    days: [3, 5, 8, 15, 11, 9, 3],
  },
  {
    total: 46,
    week: 1586044800,
    days: [1, 7, 10, 12, 13, 3, 0],
  },
  {
    total: 36,
    week: 1586649600,
    days: [0, 7, 5, 5, 11, 5, 3],
  },
  {
    total: 29,
    week: 1587254400,
    days: [0, 7, 8, 2, 9, 1, 2],
  },
  {
    total: 25,
    week: 1587859200,
    days: [0, 1, 3, 3, 5, 11, 2],
  },
  {
    total: 30,
    week: 1588464000,
    days: [1, 6, 7, 8, 4, 4, 0],
  },
  {
    total: 31,
    week: 1589068800,
    days: [1, 4, 8, 10, 2, 4, 2],
  },
  {
    total: 21,
    week: 1589673600,
    days: [0, 3, 3, 4, 9, 0, 2],
  },
  {
    total: 31,
    week: 1590278400,
    days: [0, 1, 5, 12, 8, 5, 0],
  },
  {
    total: 1,
    week: 1590883200,
    days: [0, 1, 0, 0, 0, 0, 0],
  },
  {
    total: 5,
    week: 1591488000,
    days: [0, 0, 0, 0, 3, 2, 0],
  },
  {
    total: 5,
    week: 1592092800,
    days: [0, 1, 1, 0, 2, 1, 0],
  },
  {
    total: 9,
    week: 1592697600,
    days: [0, 0, 4, 1, 3, 1, 0],
  },
  {
    total: 24,
    week: 1593302400,
    days: [0, 1, 7, 12, 4, 0, 0],
  },
  {
    total: 40,
    week: 1593907200,
    days: [0, 7, 8, 10, 5, 10, 0],
  },
  {
    total: 27,
    week: 1594512000,
    days: [0, 8, 1, 8, 5, 5, 0],
  },
  {
    total: 15,
    week: 1595116800,
    days: [0, 3, 2, 4, 1, 3, 2],
  },
  {
    total: 30,
    week: 1595721600,
    days: [1, 9, 2, 6, 4, 7, 1],
  },
  {
    total: 18,
    week: 1596326400,
    days: [0, 3, 1, 4, 6, 4, 0],
  },
  {
    total: 21,
    week: 1596931200,
    days: [0, 7, 1, 3, 6, 3, 1],
  },
  {
    total: 25,
    week: 1597536000,
    days: [0, 7, 2, 6, 4, 6, 0],
  },
  {
    total: 17,
    week: 1598140800,
    days: [0, 4, 1, 3, 2, 6, 1],
  },
  {
    total: 17,
    week: 1598745600,
    days: [0, 1, 3, 2, 4, 7, 0],
  },
  {
    total: 14,
    week: 1599350400,
    days: [0, 1, 2, 1, 6, 3, 1],
  },
  {
    total: 11,
    week: 1599955200,
    days: [0, 4, 1, 1, 2, 3, 0],
  },
  {
    total: 17,
    week: 1600560000,
    days: [0, 5, 6, 2, 1, 3, 0],
  },
  {
    total: 11,
    week: 1601164800,
    days: [0, 2, 1, 3, 4, 1, 0],
  },
  {
    total: 10,
    week: 1601769600,
    days: [0, 3, 1, 0, 4, 2, 0],
  },
  {
    total: 21,
    week: 1602374400,
    days: [0, 1, 2, 7, 3, 7, 1],
  },
  {
    total: 14,
    week: 1602979200,
    days: [0, 4, 4, 3, 3, 0, 0],
  },
  {
    total: 10,
    week: 1603584000,
    days: [0, 0, 3, 1, 3, 2, 1],
  },
  {
    total: 5,
    week: 1604188800,
    days: [0, 2, 3, 0, 0, 0, 0],
  },
  {
    total: 32,
    week: 1604793600,
    days: [0, 4, 10, 3, 6, 9, 0],
  },
  {
    total: 13,
    week: 1605398400,
    days: [0, 4, 2, 3, 0, 4, 0],
  },
  {
    total: 0,
    week: 1606003200,
    days: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    total: 16,
    week: 1606608000,
    days: [0, 2, 4, 1, 2, 7, 0],
  },
  {
    total: 35,
    week: 1607212800,
    days: [1, 10, 7, 8, 5, 4, 0],
  },
  {
    total: 9,
    week: 1607817600,
    days: [1, 2, 1, 1, 1, 3, 0],
  },
  {
    total: 3,
    week: 1608422400,
    days: [0, 1, 2, 0, 0, 0, 0],
  },
  {
    total: 0,
    week: 1609027200,
    days: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    total: 3,
    week: 1609632000,
    days: [0, 3, 0, 0, 0, 0, 0],
  },
  {
    total: 11,
    week: 1610236800,
    days: [0, 1, 3, 3, 2, 2, 0],
  },
  {
    total: 19,
    week: 1610841600,
    days: [0, 1, 9, 4, 1, 4, 0],
  },
  {
    total: 15,
    week: 1611446400,
    days: [0, 5, 4, 3, 1, 2, 0],
  },
  {
    total: 26,
    week: 1612051200,
    days: [0, 4, 4, 10, 4, 3, 1],
  },
  {
    total: 26,
    week: 1612656000,
    days: [0, 5, 5, 10, 5, 1, 0],
  },
  {
    total: 7,
    week: 1613260800,
    days: [0, 0, 3, 1, 3, 0, 0],
  },
  {
    total: 4,
    week: 1613865600,
    days: [0, 4, 0, 0, 0, 0, 0],
  },
]

export default Graph
