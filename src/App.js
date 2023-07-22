import React, { useState } from "react";
import logo from "./images/yelp_logo.png";
import { Searchbar } from "./components/Searchbar.js";
import { Restaurant } from "./components/Restaurant.js";
import { Links } from "./components/Links.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchTag, setSearchTag] = useState();
  const [searchCity, setSearchCity] = useState();

  console.log(searchTag);
  console.log(searchCity);

  return (
    <div className="App">
{/*       <div className="backgroundContainer">
        <div class="logoWrapper">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div class="searchBarContainer">
          <Searchbar
            setSearchTag={setSearchTag}
            setSearchCity={setSearchCity}
          />
          <Links />
        </div>
      </div> */}

      <Restaurant />
    </div>
  );
}

export default App;
