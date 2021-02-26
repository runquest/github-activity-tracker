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
  // const data = new Array(53)
  // // data[0] = {}
  // // data[0].week = 12344

  // // if (!data[0]) console.log('UNDEFINED')
  // // else console.log('EXISTS')
  // context.fruit.map((item) => {
  //   // console.log('ITEM', item.commits)

  //   // console.log('item.commits.size', item.commits.length)
  //   for (let i = 0; i < 52; i++) {
  //     // console.log('i', i, 'data i', data[i])
  //     if (typeof data[i] === 'undefined') {
  //       data[i] = {}
  //     }
  //     // console.log('i', i, 'data[i]', data[i])
  //     data[i].week = item.commits[i].week
  //     // data[i].total = item.commits[i].total
  //     // console.log('RESPONS', data[i].repos)
  //     // if (!data[i].repos) {
  //     if (typeof data[i].repos === 'undefined') {
  //       data[i].repos = []
  //     }

  //     let repoObj = {}
  //     repoObj.total = item.commits[i].total
  //     repoObj.week = item.commits[i].week
  //     repoObj.color = item.color

  //     // repoObj[item.color] = item.commits[i].total
  //     data[i].repos.push(repoObj)

  //     // console.log('data[i]', data[i])
  //   }

  //   // let repoObj = {}
  //   // repoObj[item.color] = item.commits[i].total
  //   // data[i].repos.push(repoObj)
  //   // data[i][item.color] = item.commits[i].total
  //   // data[i].color = item.color
  //   // console.log('commits', item.commits[0])
  //   // }
  // })

  // data.map((item) => {
  console.log('fruit', context.fruit)

  const data = new Array(51)

  context.fruit.forEach((item) => {
    // item = { commits: [], name: "", color: ""}
    // console.log('(1) ITEM', item)
    for (let j = 0; j < item.commits.length - 1; j++) {
      // console.log('(2) Index', j)
      const commitWeek = item.commits[j].week
      // console.log('(2) commitWeek', commitWeek)
      // console.log('(3) data[j]', data[j])
      if (typeof data[j] === 'undefined') {
        const dataPoint = new Object()
        dataPoint.week = commitWeek.toString()
        data[j] = dataPoint
        // console.log('(4) data[j]', data[j])
      }
      // console.log('(5) data[j]', data[j])
      data[j][item.name] = item.commits[j].total
      // console.log('(6) data[j]', data[j])
    }
  })

  const dataModified = data.map((i) => JSON.stringify(i))

  console.log('(7) data', data)

  context.fruit.map((item) => console.log('8 fruit item', item))
  // console.log('(8) fruits', fruit)

  const test = [
    {
      week: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      week: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      week: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      week: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      week: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      week: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      week: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]
  // })

  console.log('AISTE data', data)
  console.log('AISTE test', test)

  return (
    <div className="Graph">
      <ResponsiveContainer>
        <LineChart className="LineChart" width={700} height={393} data={data}>
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="week" />
          <YAxis />
          {/* {context.fruit.map((item) => ( */}

          {context.fruit.map((item) => (
            <Line
              type="monotone"
              dataKey={item.name}
              // stroke={`${item.color}`}
              key={item.id}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
