import React from 'react';
import { Input } from 'semantic-ui-react';

const container = {
  width: '474px',
  height: '60px',
  borderRadius: '4px',
  marginTop: '80px',
  background: 'white'
}



const SearchBox = () => {
  return <Input placeholder='Search a Github Repository' style={container} focus />
}

export default SearchBox;