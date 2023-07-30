import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

export const Searchbar = ({ setSearchTag, setSearchCity }) => {
  const tags = [
    "Vegetarian",
    "Healthy",
    "Asian",
    "Noodles",
    "Indian",
    "Spicy",
    "Steakhouse",
    "American",
    "Italian",
    "Pasta",
    "BBQ",
  ];
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("https://mini-yelp-server-new.vercel.app/restaurants/cities")
      .then((res) => {
        setCities(res.data.cities);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleTag = (event) => {
    setSearchTag(event.target.value);
    console.log(event.target.value);
  };

  const handleCity = (event) => {
    setSearchCity(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="searchBarWrapper">
      <form onSubmit={handleSubmit} className="searchBarForm">
        <Form.Select aria-label="select restaurant by tag" onChange={handleTag}>
          <option value=''>Select restaurant by tag</option>
          {tags.map((tag) => (
            <option value={tag} key={tag}>{tag}</option>
          ))}
        </Form.Select>
        <Form.Select
          aria-label="select restaurant by city"
          onChange={handleCity}
        >
          <option value=''>Select restaurant by city</option>
          {cities.map((city) => (
            <option value={city} key={city}>{city}</option>
          ))}
        </Form.Select>
        {/* <Button type="submit">Filter</Button> */}
      </form>
    </div>
  );
};
