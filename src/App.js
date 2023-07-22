import React, { useState } from "react";
import logo from "./images/yelp_logo.png";
import { Searchbar } from "./components/Searchbar";
import { Restaurant } from "./components/Restaurant";
import { Restaurants } from "./components/Restaurants";
import { Links } from "./components/Links.js";
import "bootstrap/dist/css/bootstrap.min.css";
//import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

function App() {
  const [searchTag, setSearchTag] = useState("");
  const [searchCity, setSearchCity] = useState("");

  console.log(searchTag);
  console.log(searchCity);

  //const router = createBrowserRouter( /* application routes are defined here */ );

  return (
    <div>
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
        <Restaurants searchTag={searchTag} searchCity={searchCity} />
      </div>

      <Restaurant />
    </div>
  );
}

export default App;
