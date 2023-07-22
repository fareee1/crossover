import React, { useState } from "react";
import logo from "./images/yelp_logo.png";
import { Searchbar } from "./components/Searchbar.js";
import { Restaurant } from "./components/Restaurant.js";
import { Links } from "./components/Links.js";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

function App() {
  const [searchTag, setSearchTag] = useState("");
  const [searchCity, setSearchCity] = useState("");
  
  console.log(searchTag);
  console.log(searchCity);
  
  //const router = createBrowserRouter( /* application routes are defined here */ );


  return (
    //<RouterProvider router={ router } />
    <div className="App">
      <div className="backgroundContainer">
        <div className="logoWrapper">
          <img src={logo} className="logo" alt="logo" />
        </div>
      <div className="searchBarContainer"
        <Searchbar 
          setSearchTag={setSearchTag} 
          setSearchCity={setSearchCity}  
        />
        <Links />
      </div>
      <Restaurants 
        searchTag={searchTag}
        searchCity={searchCity}
      />
      </div>

      <Restaurant />
    </div>
  );
}

export default App;
