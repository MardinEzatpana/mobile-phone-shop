import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import shopBag from "../../../assets/shop-bag.svg";
import { logoutUser } from "../../../redux/authSlice";
import "./navBar.scss";

const NavBar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>MobileShop</h2>
      </Link>
      <div className="links">
        {auth._id ? (<Link to="/"
        onClick={() => {
          dispatch(logoutUser(null));
          toast.warning("Logged out!", { position: "top-center" });
        }}>Logout</Link>):(
          <div className="auth">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          </div>
        )}
        <Link to="/cart">
          <div className="nav-bag">
            <img src={shopBag} alt="shopBag" />
            <span className="bag-quantity">{cartItems.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
