import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container bg-primary">
      <p className="footer-text">
        &copy; E-commerce website 2023 by@yacine ahmed adel
      </p>
      <div className="footer-icons">
        <FaInstagram className="icon-footer"></FaInstagram>
        <FaFacebookF className="icon-footer"></FaFacebookF>
        <FaTwitter className="icon-footer"></FaTwitter>
      </div>
    </div>
  );
};

export default Footer;
