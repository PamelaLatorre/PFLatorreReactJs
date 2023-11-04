import { Link } from "react-router-dom";
import "./CartWidget.css";
import { GrCart } from "react-icons/gr";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Badge } from "@mui/material";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <Badge className="cart" badgeContent={total} showZero color="primary">
        <GrCart color="#c19c9c" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
