import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import ContextProduct from "../../context/contextproduct/ContextProduct";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { products, addToCart } = useContext(ContextProduct);

  const { id } = useParams();
  const product = products[id - 1];
  const navigate = useNavigate();

  return (
    <div className="details-container">
      <div>
        <img src={product?.image} alt="img" className="details-img" />
      </div>
      <div className="details-text">
        <p className="text-category">{product?.category}</p>
        <p className="text-title">{product?.title}</p>

        <p className="text-description">{product?.description}</p>
        <p className="text-price">{product?.price} $</p>
        <p className="text-rating">
          <span>Rating :</span>
          <span className="text-rate">
            {product?.rating.rate}
            <FaStar />
          </span>
        </p>
        <div className="btn-details-container">
          <button
            type="button"
            className="btn btn-outline-primary btn-details"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
          <button
            type="button"
            className="btn btn-primary btn-details"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Go To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
