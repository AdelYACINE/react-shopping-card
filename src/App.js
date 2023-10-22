import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Cart from "./component/cart/Cart";
import Footer from "./component/footer/Footer";
//import Home from "./component/home/Home";
import NavBar from "./component/navbar/NavBar";
//import Products from "./component/product/Products";
//import ProductDetails from "./component/productDetails/ProductDetails";
import ContextProductProvider from "./context/contextproduct/ContextProductProvider";
import { Suspense, lazy } from "react";
import Loader from "./component/loader/Loader";

const Home = lazy(() => import("./component/home/Home"));
const Products = lazy(() => import("./component/product/Products"));
const ProductDetails = lazy(() =>
  import("./component/productDetails/ProductDetails")
);
const Cart = lazy(() => import("./component/cart/Cart"));

function App() {
  return (
    <ContextProductProvider>
      <Router>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </ContextProductProvider>
  );
}

export default App;
