import React from 'react';
import useFetch from "react-fetch-hook";

// const FetchData = () => {
//   const { isLoading, error, data } 
//   = useFetch("https://api.github.com/search/repositories?q=react%20in%3Aname%20in%3Adescription", {
//       headers: {
//         'Accept': 'application/vnd.github.v3+json',
//       }});
//     if (isLoading) return "Loading..."; if (error) return "Error!";
//     return ( <>
//       <pre>{JSON.stringify(data, null, 2)}</pre> </>
//   ); 
// // }

// await octokit.request('GET /repos/{owner}/{repo}/stats/code_frequency', {
//   owner: 'octocat',
//   repo: 'hello-world'
// })


const FetchData = () => {
  const { isLoading, error, data } 
  = useFetch(" https://api.github.com/repos/facebook/react/stats/commit_activity", {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }});
    if (isLoading) return "Loading..."; if (error) return "Error!";
    console.log("AISTE", data)
    return ( 
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre> </>
  ); 
}

export default FetchData;