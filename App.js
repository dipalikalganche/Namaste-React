import React from "react";
import ReactDOM from "react-dom/client";

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
          src="https://letsfoodify.com/wp-content/uploads/2024/03/Logo-letsfoodify.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li> About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div
      className="RestaurantCard"
      style={{ backgroundColor: "#e3dcdc", margin: "10px" }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2025/10/31/e2933f58-fbc0-46d3-b296-6ebce0516128_c3bd7775-f9c4-41c8-90aa-c1afd67d7eb6.jpeg"
      ></img>
      <h3>Let's Foodify</h3>
      <h4> Spicy Paneer Burger</h4>
      <h5> 4.5 Star</h5>
      <h6> 38 minutes</h6>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="Restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
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
