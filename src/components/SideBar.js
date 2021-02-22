import React, { useState } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import SearchBox from './SearchBox'
import ResultContainer from './ResultContainer'
import FetchData from './FetchData'

const container = {
  width: '538px',
  height: '900px',
  background: '#37374A',
  marginTop: '0px'
}

const source = [

  // {
  //   "title": "D'Amore, Cummerata and Dicki",
  //   "description": "Expanded 24/7 service-desk",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/cloudstudio/128.jpg",
  //   "price": "$59.19"
  // },
  // {
  //   "title": "Hudson, Rippin and Schiller",
  //   "description": "Exclusive didactic productivity",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/josecarlospsh/128.jpg",
  //   "price": "$28.72"
  // },
  // {
  //   "title": "Torp, Wolf and Collins",
  //   "description": "User-friendly asymmetric matrices",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/tjisousa/128.jpg",
  //   "price": "$17.26"
  // },
  // {
  //   "title": "Mraz, Stracke and Keeling",
  //   "description": "Multi-tiered hybrid groupware",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/overcloacked/128.jpg",
  //   "price": "$22.65"
  // },
  // {
  //   "title": "Mayer, Keeling and Bechtelar",
  //   "description": "Extended client-driven productivity",
  //   "image": "https://s3.amazonaws.com/uifaces/faces/twitter/yassiryahya/128.jpg",
  //   "price": "$67.07"
  // } 

  {
    // "id": "10270250",
            "node_id": "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==1",
            "title": "react12",
            "full_name": "facebook/react",
            "private": "false",
  },
     {
      //  "id": "135786093",
            "node_id": "MDEwOlJlcG9zaXRvcnkxMzU3ODYwOTM=2",
            "title": "react2",
            "full_name": "typescript-cheatsheets/react",
            "private": "false",
  },
    {
            // "id": "75396575",
            "node_id": "MDEwOlJlcG9zaXRvcnk3NTM5NjU3NQ==3",
            "title": "react3",
            "full_name": "duxianwei520/react",
            "private": "false",
  },
    {
            // "id": "90759930",
            "node_id": "MDEwOlJlcG9zaXRvcnk5MDc1OTkzMA==4",
            "title": "react4",
            "full_name": "discountry/react",
            "private": "false",
  },
    {
            // "id": "72628285",
            "node_id": "MDEwOlJlcG9zaXRvcnk3MjYyODI4NQ==5",
            "title": "react5",
            "full_name": "Cathy0807/react",
            "private": "false",
  },
]

const SideBar = () => {
  const [visible, setVisibility] = useState(true);
  // const [data, setResult] = useState();

// onSelect={(value) => setResult(value)}/>
  return <Segment style={container}>
    <SearchBox 
      onSearch={(value) => setVisibility(value)} 
      onSelect={(value) => setResult(value)}/>

    <ResultContainer 
      visibility={visible} 
      display={source} />
    {/* <FetchData /> */}
  </Segment>
}

export default SideBar;