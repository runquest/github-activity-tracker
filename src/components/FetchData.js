import React from 'react';
import useFetch from "react-fetch-hook";

export const searchRepos = async () => {
  const response = await fetch("https://api.github.com/search/repositories?q=React&per_page=6", {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }});
      const data = await response.json()
      return data;
} 

// export default function FetchData() {
//   const { isLoading, error, data } 
//   = useFetch(" https://api.github.com/repos/facebook/react/stats/commit_activity", {
//       headers: {
//         'Accept': 'application/vnd.github.v3+json',
//       }});

//     if (isLoading) 
//       return "Loading..."; 

//     if (error) return "Error!";
//     return data; 
// }