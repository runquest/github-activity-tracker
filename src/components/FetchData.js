import React from 'react';
import useFetch from "react-fetch-hook";

import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const FetchData = () => {
  // const { isLoading, error, data } 
  // = useFetch("https://api.github.com/search/repositories?q=react%20in%3Aname%20in%3Adescription", {
  //     headers: {
  //       'Accept': 'application/vnd.github.v3+json',
  //     }});
  //   if (isLoading) return "Loading..."; if (error) return "Error!";
  //   return ( <>
  //     <pre>{JSON.stringify(data, null, 2)}</pre> </>
  // ); 

  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));

}

export default FetchData;