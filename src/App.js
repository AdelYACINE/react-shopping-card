import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./component/cart/Cart";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import NavBar from "./component/navbar/NavBar";
import Products from "./component/product/Products";
import ProductDetails from "./component/productDetails/ProductDetails";
import ContextProductProvider from "./context/contextproduct/ContextProductProvider";

function App() {
  return (
    <ContextProductProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProductProvider>
  );
}

export default App;
