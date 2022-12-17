import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Header.css";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Header({backbutton}) {

  const navigate = useNavigate();

  return (

    <div className="header">
      {
        backbutton ?  <IconButton onClick={ ()=> navigate(backbutton)}>
        <ArrowBackIcon className="header__icon" fontSize="large" />
      </IconButton> 
      :
      <IconButton>
      <PersonIcon className="header__icon" fontSize="large" />
    </IconButton>
      }

      <Link to="/"> 
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
        alt="tinder logo"
      /> 
      </Link>
     
      <Link to="/chat"> 
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />
      </IconButton>
      </Link>

    </div>
  );
}
