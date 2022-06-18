import React from 'react'
import { useEffect } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate(); 
  useEffect(() => {
    if(value == 0)
    navigate('/first');
    else if(value==1)
    navigate('/second');
    else if(value==2)
    navigate('/third');

  }, [value]);

  return (
    <BottomNavigation 
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
      console.log(value);
     }}

    sx={{ width: 500, position: 'absolute', top: 570, left: 525 } } >
      <BottomNavigationAction
        icon={<RestoreIcon/>}
      />
      <BottomNavigationAction
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction  icon={<FolderIcon />} />
    </BottomNavigation>
  )
}

export default Navbar