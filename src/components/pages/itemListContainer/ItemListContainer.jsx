import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  console.log(categoryName ? "estoy intentando filtrar" : "Estoy en el home");

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = undefined;

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((products) => {
        return { ...products.data(), id: products.id };
      });

      let arrayFiltrado = newArray.filter((elemento) => elemento.stock > 0);

      setItems(arrayFiltrado);
    });
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
