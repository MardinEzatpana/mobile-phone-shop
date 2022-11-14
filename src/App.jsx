import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./components/cart/Cart";
import NavBar from "./components/common/navbar/NavBar";
import Home from "./components/home/Home";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
