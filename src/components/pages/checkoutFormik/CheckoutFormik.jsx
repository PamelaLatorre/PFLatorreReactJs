import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CheckoutFormik.css";

const CheckoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      repetPassword: "",
    },

    onSubmit: (data) => {
      console.log("se envio");
      console.log(data);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(3, "debe terner al menos 3 caracteres")
        .max(20, "no debe superar los 20 caracteres"),
      apellido: Yup.string().required("El campo es obligatorio"),
      email: Yup.string()
        .email("El mail no parece valido debe contener @")
        .required("El campo es obligatorio"),
      password: Yup.string()
        .required("El campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener al menos una mayuscual una minusca bla bla ",
        }),
      repetPassword: Yup.string()
        .required("El campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  console.log(errors);

  return (
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
          label="Apellido"
          variant="outlined"
          name="apellido"
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
  );
};

export default CheckoutFormik;
