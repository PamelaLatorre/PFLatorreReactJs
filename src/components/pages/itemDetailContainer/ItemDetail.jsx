import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetailContainer.css";
import logo1 from "../../../assets/images/logo1.jpg";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div className="divdetail">
      <Typography className="titulodetail">{productSelected.title}</Typography>
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
        <Link to="/cart" className="terminar">
          TERMINAR TU COMPRA
        </Link>
      )}

      <div className="divlogodetail">
        <Link to="/">
          <img className="logodetail" src={logo1} alt="Logo de la empresa" />
        </Link>
      </div>
    </div>
  );
};
