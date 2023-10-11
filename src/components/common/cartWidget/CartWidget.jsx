import { Link } from "react-router-dom";
import "./CartWidget.css";
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  return (
    <Link to="/CartContainer">
      <div className="cart">
        <span>2</span>
        <GrCart />
      </div>
    </Link>
  );
};

export default CartWidget;
