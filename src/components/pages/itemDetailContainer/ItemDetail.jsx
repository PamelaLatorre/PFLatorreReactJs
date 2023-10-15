import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetailContainer.css";
import logo1 from "../../../assets/images/logo1.jpg";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div className="divdetail">
      {/* aca todo el detalle */}
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
      {/* Aca el contador */}
      <div className="counterdetail">
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
      </div>
      <div className="divlogodetail">
        <Link to="/">
          <img className="logodetail" src={logo1} alt="Logo de la empresa" />
        </Link>
      </div>
    </div>
  );
};
