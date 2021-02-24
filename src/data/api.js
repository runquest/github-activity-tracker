import React from 'react'
import useFetch from 'react-fetch-hook'

export const searchForRepo = async (query) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${encodeURIComponent(
      query,
    )}&per_page=6`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    },
  )

  const data = await response.json()
  return data.items.map((item) => modified(item)).slice(0, 3)
}

export const getRepoCommitActivity = async ({ owner, name }) => {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${name}/stats/commit_activity`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    },
  )

  /**

  function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

getMonday(new Date()); 
new Date(dateStr).getTime();

  let d = new Date(1613260800*1000);
  let diff = d.getDate() - d.getDay()
  let w = new Date(d.setDate(diff))
  
  new Date().getDate() - new Date(1613260800*1000).getDay()
  
  new Date()
   */

  const data = await response.json()
  // const modifiedData = data.map((index, item) => {
  //   console.log('index', index)
  //   console.log('item', item)
  // })

  return data
}

const modified = ({
  id,
  full_name,
  name,
  owner,
  updated_at,
  stargazers_count,
}) => {
  return {
    childKey: id,
    id: id,
    title: full_name,
    name: name,
    owner: owner.login,
    updated: updated_at,
    stars: stargazers_count,
    color: Math.floor(Math.random() * 16777215).toString(16),
  }
}
