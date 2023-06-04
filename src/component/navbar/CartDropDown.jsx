import ContextProduct from "../../context/contextproduct/ContextProduct";
import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CartDropDown = () => {
  const { removeFromCart, cart } = useContext(ContextProduct);
  return (
    <div className="cart-container-dropdown">
      {cart.length === 0 ? (
        <h1 className="text-cart-dropdown">Empty cart</h1>
      ) : (
        cart.map((item) => {
          return (
            <div key={item.id} className="cardcart-container-dropdown">
              <img
                src={item.image}
                alt="img-cart"
                className="img-cart-dropdown"
              />
              <h2 className="title-cart-dropdown">
                {item.title.substring(0, 12)}
              </h2>
              <p className="cart-price-dropdown">
                {(item.price * item.quantity).toFixed(2)} $
              </p>
              <p className="cart-quantity-dropdown">{item.quantity} </p>
              <button
                className="btn btn-trash"
                onClick={() => removeFromCart(item.id)}
              >
                <FaRegTrashAlt className="icon-trash-dropdown" />
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CartDropDown;
