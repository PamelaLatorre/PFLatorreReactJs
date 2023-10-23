import { Button } from "@mui/material";
import "./Counter.css";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <>
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button
          className="counterbut"
          variant="outlined"
          onClick={restar}
          style={{ color: "#957d7c" }}
        >
          -
        </Button>
        <h2 className="counterh2">{contador}</h2>
        <Button
          className="counterbut"
          variant="outlined"
          onClick={sumar}
          style={{ color: "#957d7c" }}
        >
          +
        </Button>
      </div>
      <div className="counterbutton">
        <Button
          variant="contained"
          size="large"
          onClick={() => onAdd(contador)}
          style={{ backgroundColor: "#957d7c" }}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};

export default CounterPresentacional;
