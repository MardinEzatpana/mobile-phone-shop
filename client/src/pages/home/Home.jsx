import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import "./home.scss";

const Home = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      <h2>New Products</h2>
      <div className="products">
        {isLoading? <p>Loading...</p>: ''}
        {data?.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
            </div>
          ))}
          {error? <p>Unexpected error occured...</p>: ''}
      </div>
    </div>
  );
};

export default Home;
