import { useContext } from "react";
import ContextProduct from "../../context/contextproduct/ContextProduct";
import CardCart from "./CardCart";

const Cart = () => {
  const { cart } = useContext(ContextProduct);

  return (
    <>
      <div className="cart-container">
        {cart.length === 0 ? (
          <h1 className="text-cart">Empty cart</h1>
        ) : (
          cart.map((item, i) => {
            return <CardCart key={i} item={item} index={i} />;
          })
        )}
      </div>

      <div className="container-total">
        <p className="total-cart">
          Total :
          <span className="total-value">
            {cart
              .map((item) => item.price * item.quantity)
              .reduce((acc, value) => acc + value, 0)
              .toFixed(2)}
            $
          </span>
        </p>
        <button type="button" className="btn btn-primary btn-lg btn-payement">
          proceed to payment
        </button>
      </div>
    </>
  );
};

export default Cart;
