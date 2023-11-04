import { Button } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "4px solid #c19c9c" }}>
          <h2>{product.title}</h2>
          <h2>${product.price}</h2>
          <h2>cantidad: {product.quantity}</h2>
          <Button onClick={() => deleteProductById(product.id)}>
            Eliminar
          </Button>
        </div>
      ))}

      <h4>El total a pagar es de : ${total}</h4>

      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>

      <Button variant="contained" onClick={clearCart}>
        Vaciar Carrito
      </Button>
    </div>
  );
};

export default Cart;
