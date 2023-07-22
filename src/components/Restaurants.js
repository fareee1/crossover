import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
//import mock from './mock.json'
import axios from 'axios';


export const Restaurants = ({ searchTag, searchCity }) => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios.get('https://mini-yelp-server-new.vercel.app/restaurants/list')
      .then((res) => {
        // Update the restaurants state with the fetched data
        setRestaurants(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  //console.log(restaurants);

  return (
    <>
      {
        restaurants.length > 0 &&
        restaurants.map((restaurant) => {

          return (
            <ListGroup horizontal key={restaurant._id}>
              <ListGroup.Item>Restaurant: {restaurant.name}</ListGroup.Item>
              <ListGroup.Item>Tags: {restaurant.tags.map((i) => ` ${i}`)}</ListGroup.Item>
              <ListGroup.Item>located in: {restaurant.address.city}</ListGroup.Item>
            </ListGroup>

          )
        })
      }
    </>
  )
}
