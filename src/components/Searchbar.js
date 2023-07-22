import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Searchbar = ({setSearchTag, setSearchCity}) => {

  const tags = ["italian", "german", "asian"];
  const cities = ["Aachen", "Berlin", "Hamburg"];

  const handleTag = (event) => {
    setSearchTag(event.target.value);
    console.log(event.target.value)
  };

  const handleCity = (event) => {
    setSearchCity(event.target.value);
    console.log(event.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <form 
      onSubmit={handleSubmit}
      style={{display : "flex", padding : "3rem", gap : "1rem", maxWidth : 800}}>
      <Form.Select aria-label="select restaurant by tag" onChange={handleTag}>
        <option>Select restaurant by tag</option>
        {
        tags.map((tag) => <option value={tag}>{tag}</option>)
        }
      </Form.Select>
      <Form.Select aria-label="select restaurant by city" onChange={handleCity}>
        <option>Select restaurant by city</option>
        {
        cities.map((city) => <option value={city}>{city}</option>)
        }
      </Form.Select>
      <Button type="submit">Filter</Button>
      </form>
    </div>
  )
}
