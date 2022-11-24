import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/common/navbar/NavBar";
import NotFound from "./components/common/notFound/NotFound";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/cart/Cart";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";

function App() {

  
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
