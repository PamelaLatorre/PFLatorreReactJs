import { usseEffect, useState } from "react";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  let id = 3;

  usseEffect(() => {
    let producto = products.find((product) => product.id === id);

    const getproduct = new Promise((resolve, reject) => {
      resolve(producto);
    });

    getproduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productSelected);
  return <ItemDetail product={productSelected} />;
};

export default ItemDetailContainer;
