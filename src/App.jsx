import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";
import { customTheme } from "./themeConfig";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={customTheme}> */}
      <CartContextComponent>
        <AppRouter />
      </CartContextComponent>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
