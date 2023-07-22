import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mock from "../mock.json";
import { MdLocationOn } from "react-icons/md";
import icon from "../images/map-marker-svgrepo-com.svg";

export const Restaurant = ({ data }) => {
  const {
    name,
    openingTime,
    address,
    coordinates,
    comments,
    tags,
    image,
    _id,
  } = mock;

  // Create a custom icon using the restaurant-icon.png image
  const restaurantIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [32, 32], // Adjust the icon size as needed
    iconAnchor: [16, 32], // Adjust the anchor point of the icon
    popupAnchor: [0, -32], // Adjust the popup anchor for the icon
  });

  return (
    <div className="restaurant-container">
      <img src={image} alt="Restaurant" className="restaurant-image" />
      <h2 className="restaurant-name">{name}</h2>
      <p className="opening-time">Opening Time: {openingTime}</p>
      <div className="address-container">
        <strong>Address:</strong>
        <p className="address">
          {address.street}, {address.city} - {address.postcode}
        </p>
      </div>
      <div className="map-container">
        <MapContainer
          center={[coordinates[0], coordinates[1]]} // Replace with the desired map center coordinates
          zoom={12} // Adjust the zoom level as needed
          style={{ height: "500px", width: "100%" }} // Adjust map height and width
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker key={_id.$oid} icon={restaurantIcon} position={coordinates}>
            <Popup>
              <div>
                <h3>{name}</h3>
                <p>Opening Time: {openingTime}</p>
                <p>
                  Address: {address.street}, {address.city} - {address.postcode}
                </p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="tags-container">
        <strong>Tags:</strong>
        <ul className="tags-list">
          {tags.map((tag, index) => (
            <li key={index} className={`tag ${tag.toLowerCase()}`}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="comments-container">
        <strong>Comments:</strong>
        {comments.map((comment) => (
          <div key={comment._id.$oid} className="comment">
            <p>
              <strong className="comment-user">{comment.user}:</strong>{" "}
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
