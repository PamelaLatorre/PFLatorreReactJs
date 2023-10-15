import { Button } from "@mui/material";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <Button size="small" variant="outlined" onClick={sumar}>
        sumar
      </Button>
      <h4> {contador} </h4>
      <Button size="small" variant="outlined" onClick={restar}>
        restar
      </Button>
      <Button size="small" variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;
