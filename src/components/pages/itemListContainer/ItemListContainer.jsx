import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  console.log(categoryName ? "estoy intentando filtrar" : "Estoy en el home");

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;
