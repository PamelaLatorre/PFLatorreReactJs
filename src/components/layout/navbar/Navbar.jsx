import CartWidget from "../../common/cartWidget/CartWidget";
import logo from "../../../assets/images/logo.jpeg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <img src={logo} className="logo" alt="Logo del ecommerce" />
      <ul className="navbar">
        <li>Inicio</li>
        <li>Fibras Naturales</li>
        <li>Aromas</li>
        <li>Textiles</li>
      </ul>
      <CartWidget />
    </div>
  );
};
