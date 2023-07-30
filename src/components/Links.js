import React from "react";
import {
  MdRestaurant,
  MdOutlineLocalBar,
  MdOutlineBuild,
  MdOutlineMoped,
} from "react-icons/md";

export const Links = () => {
  return (
    <div>
      <ul className="links">
        <li>
          <MdRestaurant className="icon" /><a href="/">Restaurants</a>
        </li>
        <li>
          <MdOutlineLocalBar className="icon" /><a href="#">Nightlife</a>
        </li>
        <li>
          <MdOutlineBuild className="icon" /><a href="#">Local Services</a>
        </li>
        <li>
          <MdOutlineMoped className="icon" /><a href="#">Delivery</a>
        </li>
      </ul>
    </div>
  );
};
