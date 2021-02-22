import React from 'react';
import FeatherIcon from 'feather-icons-react';

const iconStyle = {
  position: 'absolute',
  top: '50%',
  right: '24px',
  transform: 'translateY(-50%) rotate(-23.02deg)'
}

const CustomSearchIcon = () => {
   return (<FeatherIcon 
    style={iconStyle} 
    size="16px" 
    stroke="#34374a" 
    strokeWidth="2px" 
    icon="search" />);
}

export default CustomSearchIcon;