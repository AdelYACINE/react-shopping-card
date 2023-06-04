import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import ContextProduct from "../../context/contextproduct/ContextProduct";
import CartDropDown from "./CartDropDown";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  /////////////////////////////////////////////////////////////
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  ///////////////////////////////////////////////////////////////////
  const { cart } = useContext(ContextProduct);

  ////////////////////////////////////////////////////////////////////

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          color ? "navbar-bg" : "bg-primary"
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h1 className="navbar-brand">Shopping website</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${!isCollapsed ? "" : "show"}`}
            id="navbarColor01"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    `nav-link ${navData.isActive ? "active" : ""}`
                  }
                  to="/"
                  onClick={toggleCollapse}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(navData) =>
                    `nav-link ${navData.isActive ? "active" : ""}`
                  }
                  to="/products"
                  onClick={toggleCollapse}
                >
                  Products
                </NavLink>
              </li>
            </ul>
            <NavLink
              className={(navData) =>
                `nav-link ${navData.isActive ? "active" : ""}`
              }
              to="/cart"
            >
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={toggleCollapse}
                >
                  <FaCartPlus className="icon-card"></FaCartPlus>
                  <span>
                    ({cart.reduce((qty, item) => item.quantity + qty, 0)})
                  </span>
                </button>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop2"
                    type="button"
                    className="btn btn-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu "
                    aria-labelledby="btnGroupDrop2"
                  >
                    <CartDropDown />
                    <div className="container-total">
                      <p className="total-cart-dropdown">
                        Total :
                        <span className="total-value-dropdown">
                          {cart
                            .map((item) => item.price * item.quantity)
                            .reduce((acc, value) => acc + value, 0)
                            .toFixed(2)}
                          $
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
