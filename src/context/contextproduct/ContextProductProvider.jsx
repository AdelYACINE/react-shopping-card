import ContextProduct from "./ContextProduct";
import axios from "axios";
import { useEffect, useState } from "react";

const ContextProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = "https://fakestoreapi.com/products";
  const getData = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const res = await axios.get(url);
      console.log(res.data);
      setProducts(res.data);
      setFilter(res.data);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  };

  const filterByCategory = (category) => {
    const filteredProducts = products.filter((product) => {
      return product.category.toLowerCase() === category.toLowerCase();
    });
    setFilter(filteredProducts);
  };

  useEffect(() => {
    getData();
  }, []);
  ///////////////////////////////////////////////////////////////////////////////////////////////

  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (!existingProduct) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };
  const removeFromCart = (id) => {
    const remove = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(remove);
  };

  /////////////////////////////////////////////////////////////////////
  return (
    <ContextProduct.Provider
      value={{
        products,
        filterByCategory,
        filter,
        setFilter,
        addToCart,
        cart,
        setCart,
        removeFromCart,
        isLoading,
        error,
      }}
    >
      {children}
    </ContextProduct.Provider>
  );
};

export default ContextProductProvider;
