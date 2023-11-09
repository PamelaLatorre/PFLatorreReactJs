import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetailContainer.css";
import logo1 from "../../../assets/images/logo1.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div className="divdetail">
      <h2 className="titulodetail">{productSelected.title}</h2>
      <img
        className="imgdetail"
        src={productSelected.img}
        alt="Imagen del producto"
      />
      <div className="pdetail">
        <p>{productSelected.description}</p>
      </div>
      <div className="preciodetail">
        <p> ${productSelected.price}.-</p>
      </div>

      {initial && (
        <h4 className="h4ItDetail">
          Ya tienes {initial} elementos cargados en el carrito!
        </h4>
      )}

      {showCounter ? (
        <div className="counterdetail">
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        </div>
      ) : (
        <Button
          variant={"outlined"}
          type="button"
          style={{
            backgroundColor: "#957d7c",
          }}
        >
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            TERMINAR TU COMPRA
          </Link>
        </Button>
      )}

      <div className="divlogodetail">
        <Link to="/">
          <img className="logodetail" src={logo1} alt="Logo de la empresa" />
        </Link>
      </div>
    </div>
  );
};
