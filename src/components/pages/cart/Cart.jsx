import { Button } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

import { IconButton } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";

import Swal from "sweetalert2";

import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Quieres limpiar el producto?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminalo!",
      denyButtonText: `No, no quiero eliminarlo!`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no se eliminó", "", "info");
      }
    });
  };

  return (
    <div>
      <h1 className="h1Cart">Mi carrito</h1>

      {cart.map((product) => (
        <div key={product.id} className="carts">
          <div>
            <h2>{product.title}</h2>
            <h2>Precio: ${product.price}</h2>
            <h2>Cantidad: {product.quantity}</h2>
            <h2>Total: ${product.price * product.quantity}</h2>
          </div>
          <div className="butCart">
            <IconButton onClick={() => deleteProductById(product.id)}>
              <MdDeleteForever />
            </IconButton>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="totalCart">
          <h3>El total a pagar es de : ${total}</h3>

          <Link to="/checkout">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#957d7c",
                marginTop: "25px",
                marginRight: "15px",
              }}
            >
              Finalizar compra
            </Button>
          </Link>

          <Button
            variant="contained"
            onClick={clearCartWithAlert}
            style={{ backgroundColor: "#957d7c", marginTop: "25px" }}
          >
            VACIAR CARRITO
          </Button>
        </div>
      )}
    </div>
  );
};
export default Cart;
