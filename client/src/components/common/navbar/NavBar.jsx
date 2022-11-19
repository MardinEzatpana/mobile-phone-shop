import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  shopBag  from "../../../assets/shop-bag.svg";
import "./navBar.scss";

const NavBar = () => {
  const {cartItems} = useSelector((state) => state.cart);
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>MobileShop</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bag">
          <img src={shopBag} alt="shopBag" />
          <span className="bag-quantity">
            {cartItems.length}
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
