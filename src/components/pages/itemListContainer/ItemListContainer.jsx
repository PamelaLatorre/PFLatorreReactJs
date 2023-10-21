import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@mui/material";
import home1 from "../../../assets/images/home1.jpg";
import home2 from "../../../assets/images/home2.jpg";
import home3 from "../../../assets/images/home3.jpg";
import home4 from "../../../assets/images/home4.jpg";
import home5 from "../../../assets/images/home5.jpg";
import home6 from "../../../assets/images/home6.jpg";
import logo1 from "../../../assets/images/logo1.jpg";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const isFiltering = !!categoryName;

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
