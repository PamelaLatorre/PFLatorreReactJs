import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./CheckoutFormik.css";

import { CartContext } from "../../../context/Cartcontext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { CardTravelSharp } from "@mui/icons-material";

const CheckoutFormik = () => {
  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const enviarOrden = (formDetails) => {
    let order = {
      buyer: formDetails,
      items: cart,
      total,
      time: serverTimestamp(),
    };
    console.log(order);

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      // password: "",
      // repetPassword: "",
    },

    onSubmit: (formDetails) => {
      enviarOrden(formDetails);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "debe terner al menos 3 caracteres")
        .max(20, "no debe superar los 20 caracteres"),
      telefono: Yup.string().required("El campo es obligatorio"),
      email: Yup.string()
        .email("El mail no parece valido debe contener @")
        .required("El campo es obligatorio"),
      // password: Yup.string()
      //   .required("El campo es obligatorio")
      //   .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
      //     message:
      //       "La contraseña debe tener al menos una mayuscual una minusca bla bla ",
      //   }),
      // repetPassword: Yup.string()
      //   .required("El campo es obligatorio")
      //   .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  // console.log(errors);

  return (
    <>
      {orderId ? (
        <div className="checkout">
          <h2 className="checkh2">
            Gracias por tu compra! Tu N° de orden es {orderId}
          </h2>
          <Button
            variant={"outlined"}
            type="button"
            style={{
              backgroundColor: "#957d7c",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Seguir comprando
            </Link>
          </Button>
        </div>
      ) : (
        <div className="checkout-form-container">
          <form onSubmit={handleSubmit} className="checkout-form">
            <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />

            <TextField
              label="Telefono"
              variant="outlined"
              name="telefono"
              onChange={handleChange}
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
            />

            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />

            <div className="buttons-container">
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "#957d7c" }}
              >
                Enviar
              </Button>

              <Button
                variant={"outlined"}
                type="button"
                style={{ color: "#957d7c" }}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutFormik;
