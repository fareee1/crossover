import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
//import mock from './mock.json'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Restaurants = ({ searchTag, searchCity }) => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios.get('https://mini-yelp-server-new.vercel.app/restaurants/list')
      .then((res) => {
        // Update the restaurants state with the fetched data
        let response = res.data;
        if(searchTag !== ''){
          response = response.filter((restaurant) => restaurant.tags.includes(searchTag))
        }
        if(searchCity !== ''){
          response = response.filter((restaurant) => restaurant.address.city === searchCity)
        }
        setRestaurants(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchTag, searchCity]); 

  //console.log(restaurants);

  return (
    <div className="restaurantList">
      {
        restaurants.length > 0 &&
        restaurants.map((restaurant) => {

          return (
            <Link to={restaurant._id}>
            <ListGroup horizontal key={restaurant._id}>
              <ListGroup.Item>Restaurant: {restaurant.name}</ListGroup.Item>
              <ListGroup.Item>Tags: {restaurant.tags.map((i) => ` ${i}`)}</ListGroup.Item>
              <ListGroup.Item>located in: {restaurant.address.city}</ListGroup.Item>
            </ListGroup>
            </Link>
          )
        })
      }
    </div>
  )
}
