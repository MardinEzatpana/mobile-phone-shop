import React from "react";
import { useGetAllProductsQuery } from "../../redux/productsApi";
import "./home.scss";

const Home = () => {
  const { data } = useGetAllProductsQuery();
  return (
    <div className="home-container">
      <h2>New Products</h2>
      <div className="products">
        {data &&
          data?.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button>Add To Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
