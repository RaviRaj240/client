import Header from "./component/Header";
import { AppProvider } from "./context/AppProvider";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ViewProduct from "./pages/ViewProduct";

const App = () => {
  return (
    <>
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/product" element={<ViewProduct />} />
        </Routes>
      </AppProvider>
    </>
  );
};

export default App;
