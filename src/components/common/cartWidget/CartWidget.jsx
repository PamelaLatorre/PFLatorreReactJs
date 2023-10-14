import { Link } from "react-router-dom";
import "./CartWidget.css";
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  return (
    <div className="cart">
      <Link to="/Cart">
        <div className="cart">
          <span>2</span>
          <GrCart />
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
