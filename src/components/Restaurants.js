import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import mock from './mock.json'

export const Restaurants = ({ searchTag, searchCity }) => {

  return (
    <>
      {
        mock.map((restaurant) => {

          return (
            <ListGroup horizontal>
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
