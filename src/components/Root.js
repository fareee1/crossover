import React from 'react';
import logo from "../images/yelp_logo.png";
import { Searchbar } from "./Searchbar";
import { Links } from "./Links.js";
import { Outlet } from 'react-router-dom'

export default function Root({setSearchCity, setSearchTag}) {
  return (
    <div className="App">
    <div className="backgroundContainer">
      <div className="logoWrapper">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="searchBarContainer">
        <Searchbar
          setSearchTag={setSearchTag}
          setSearchCity={setSearchCity}
        />
        <Links />
      </div>
    </div>
    
  <Outlet />
  </div>
  )
}
