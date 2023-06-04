import CardProduct from "./CardProduct";
import ContextProduct from "../../context/contextproduct/ContextProduct";
import { useContext } from "react";
import ErrorMsg from "./ErrorMsg";
import SkeletonCard from "../skeletons/SkeletonCard";

const Products = () => {
  const { products, filterByCategory, filter, setFilter, error, isLoading } =
    useContext(ContextProduct);

  return (
    <div className="products-container">
      <h2 className="heading-products">Lastest Products</h2>
      <div className="category-container">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setFilter(products)}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => filterByCategory("men's Clothing")}
        >
          Men's Clothing
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => filterByCategory("women's Clothing")}
        >
          women's Clothing
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => filterByCategory("jewelery")}
        >
          Jewelery
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => filterByCategory("electronics")}
        >
          Electronic
        </button>
      </div>
      {!isLoading ? (
        <div className="product-container">
          {!error ? (
            filter.map((product, i) => {
              return <CardProduct key={i} product={product} />;
            })
          ) : (
            <ErrorMsg />
          )}
        </div>
      ) : (
        <SkeletonCard cards={20} />
      )}
    </div>
  );
};

export default Products;
