import React from 'react';
import useFetch from "react-fetch-hook";

const FetchData = () => {
  const { isLoading, error, data } 
  = useFetch("https://api.github.com/search/repositories?q=react%20in%3Aname%20in%3Adescription", {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }});
    if (isLoading) return "Loading..."; if (error) return "Error!";
    return ( <>
      <pre>{JSON.stringify(data, null, 2)}</pre> </>
  ); 
}

export default FetchData;