import { useNavigate } from "react-router-dom";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="cardProduct-container">
      <img src={product?.image} alt="product-img" className="image-product" />
      <h3 className="title-product">{product?.title.substring(0, 12)}</h3>
      <p className="cardProduct-price">{product?.price} $</p>
      <button
        type="button"
        className="btn btn-primary btn-cardProduct"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default CardProduct;
