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

  if (!response.ok) {
    const message = `Ooops. Do not panick it is just ${response.status}. Refresh. Try again.`
    throw new Error(message)
  }

  const data = await response.json()
  return data.items.map((item) => modified(item))
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

  if (!response.ok) {
    const message = `Ooops. Do not panick it is just ${response.status}. Refresh. Try again.`
    throw new Error(message)
  }

  const data = await response.json()
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
