import React from 'react'
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import "./SwipeButtons.css"



function SwipeButtons() {
  return (
    <div className='swipe-buttons'>
        <IconButton className='swipe-buttons__replay'>
             <ReplayIcon fontSize='large'/> </IconButton>
             
        <IconButton className='swipe-buttons__close'>
             <CloseIcon fontSize='large'/> </IconButton>

        <IconButton className='swipe-buttons__star'>
             <StarRateIcon fontSize='large'/> </IconButton>

        <IconButton className='swipe-buttons__fav'> 
        <FavoriteIcon fontSize='large'/> </IconButton>

        <IconButton className='swipe-buttons__flash'>
             <FlashOnIcon fontSize='large'/> </IconButton>
        
    </div>
  )
}

export default SwipeButtons