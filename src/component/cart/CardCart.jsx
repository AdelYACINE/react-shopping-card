import ContextProduct from "../../context/contextproduct/ContextProduct";
import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CardCart = ({ item, index }) => {
  const { removeFromCart, cart, setCart } = useContext(ContextProduct);

  return (
    <>
      <div className="cardcart-container">
        <img src={item.image} alt="img-cart" className="img-cart" />
        <h2 className="title-cart">{item.title}</h2>
        <p className="cart-price">
          {(item.price * item.quantity).toFixed(2)} $
        </p>
        <div className="container-qty">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              const increase = cart.map((item, i) => {
                return index === i
                  ? { ...item, quantity: item.quantity + 1 }
                  : item;
              });
              setCart(increase);
            }}
          >
            +
          </button>

          <p className="cart-quantity">{item.quantity} </p>
          <button
            type="button"
            className="btn btn-secondary "
            disabled={item.quantity <= 1 ? true : false}
            onClick={() => {
              const decrease = cart.map((item, i) => {
                return index === i
                  ? {
                      ...item,
                      quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                    }
                  : item;
              });
              setCart(decrease);
            }}
          >
            -
          </button>
        </div>

        <button
          className="btn btn-trash"
          onClick={() => removeFromCart(item.id)}
        >
          <FaRegTrashAlt className="icon-trash" />
        </button>
      </div>
    </>
  );
};

export default CardCart;
