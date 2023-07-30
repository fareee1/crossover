import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import Root from "./components/Root";
import { Restaurants } from "./components/Restaurants";
import { Restaurant } from "./components/Restaurant";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    
  const [searchTag, setSearchTag] = useState("");
  const [searchCity, setSearchCity] = useState("");
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root setSearchTag={setSearchTag} setSearchCity={setSearchCity} />} >
        <Route path="/" element={<Restaurants searchTag={searchTag} searchCity={searchCity} />} />
        <Route path=":id" element={<Restaurant />} />
      </Route>
    )
  );
  

  return (
    <RouterProvider router={router} />    
  );
}

export default App;
