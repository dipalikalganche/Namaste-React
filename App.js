import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantDataObj from "./constant.js";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -ReastaurantContainer
 *  -RestaurntCard
 *   -Img
 *   -Name of Res,Star Rating ,cusine ,DelievryTime
 * Footer
 * -Copywrite
 * -links
 * -Adress
 * -Contact
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="not image found"
          src="https://letsfoodify.com/wp-content/uploads/2024/03/Logo-letsfoodify.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props?.firstObj?.info ?? {};

  const baseImageURl =
    "https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId;

  return (
    <div
      className="RestaurantCard"
      style={{ backgroundColor: "#e3dcdc", margin: "10px" }}
    >
      <img className="res-logo" alt="res-logo" src={baseImageURl}></img>
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h5> ⭐ {avgRating}</h5>
      <h6> {`${sla?.deliveryTime} Minutes`}</h6>
    </div>
  );
};
const Body = () => {
  const restaurants =
    RestaurantDataObj?.gridElements?.infoWithStyle?.restaurants ?? [];
 
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="Restaurant-container">
        {/* <RestaurantCard firstObj={firstObj} /> */}
        {/* <div className="Restaurant-container"> */}
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} firstObj={restaurant} />
        ))}
      </div>

      {/* <RestaurantCard resName="sKFC" cuissine="Burger,Fast Food" /> */}
      {/* </div> */}
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
