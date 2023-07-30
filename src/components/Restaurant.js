import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import mock from "../mock.json";
// import { MdLocationOn } from "react-icons/md";
import icon from "../images/map-marker-svgrepo-com.svg";
import { useParams } from 'react-router-dom';
import axios from "axios";

export const Restaurant = () => {
  const { id } = useParams();
  console.log("id", id);

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    
    axios.get(`https://mini-yelp-server-new.vercel.app/restaurants/listOne/${id}`).then((res) => {
      console.log(res.data);
      setRestaurant(res.data);
      })
},[id])


  // Create a custom icon using the restaurant-icon.png image
  const restaurantIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [32, 32], // Adjust the icon size as needed
    iconAnchor: [16, 32], // Adjust the anchor point of the icon
    popupAnchor: [0, -32], // Adjust the popup anchor for the icon
  });

  return (
    <>
    {restaurant.address && 
    <div className="restaurant-container">
      <img src={restaurant.image} alt="Restaurant" className="restaurant-image" />
      <h2 className="restaurant-name">{restaurant.name}</h2>
      <p className="opening-time">Opening Time: {restaurant.openingTime}</p>
      <div className="address-container">
        <strong>Address:</strong>
        <p className="address">
          {restaurant.address.street}, {restaurant.address.city} - {restaurant.address.postcode}
        </p>
      </div>
      <div className="map-container">
        <MapContainer
          center={[restaurant.coordinates[0], restaurant.coordinates[1]]} // Replace with the desired map center coordinates
          zoom={8} // Adjust the zoom level as needed
          style={{ height: "500px", width: "100%" }} // Adjust map height and width
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker key={restaurant._id.$oid} icon={restaurantIcon} position={restaurant.coordinates}>
            <Popup>
              <div>
                <h3>{restaurant.name}</h3>
                <p>Opening Time: {restaurant.openingTime}</p>
                <p>
                  Address: {restaurant.address.street}, {restaurant.address.city} - {restaurant.address.postcode}
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="tags-container">
        <strong>Tags:</strong>
        <ul className="tags-list">
          {restaurant.tags.map((tag, index) => (
            <li key={index} className={`tag ${tag.toLowerCase()}`}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="comments-container">
        <strong>Comments:</strong>
        {restaurant.comments.map((comment) => (
          <div key={comment._id.$oid} className="comment">
            <p>
              <strong className="comment-user">{comment.user}:</strong>{" "}
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  }
  </>
  );
};
