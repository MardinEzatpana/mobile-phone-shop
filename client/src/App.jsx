import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./components/cart/Cart";
import NavBar from "./components/common/navbar/NavBar";
import NotFound from "./components/common/notFound/NotFound";
import Home from "./components/home/Home";

function App() {

  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
