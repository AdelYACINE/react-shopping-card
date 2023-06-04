import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="overlay-home">
        <h1 className="main-heading-home">New season arrivals</h1>
        <h2 className="heading-home">Check out all the trends</h2>
        <button
          type="button"
          className="btn btn-secondary btn-home"
          onClick={() => {
            navigate("/products");
          }}
        >
          See Our Products
        </button>
      </div>
    </div>
  );
};

export default Home;
