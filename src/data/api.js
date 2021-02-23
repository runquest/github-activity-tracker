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
  return data
}

export const getRepoCommitActivity = async (repo) => {
  const response = await fetch(
    `https://api.github.com/repos/facebook/${encodeURIComponent(
      repo,
    )}/stats/commit_activity`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    },
  )

  const data = await response.json()
  return data
}
