import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  console.log(categoryName ? "estoy intentando filtrar" : "Estoy en el home");

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
