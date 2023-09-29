import { ThemeProvider } from "@emotion/react";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";
import { customTheme } from "./themeConfig";
import ResponsiveAppBar from "./components/layout/navbar/Navbar";

function App() {
  let saludo = "Hola! Como estas?";
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        {<ResponsiveAppBar />}
        {/* <Navbar /> */}
        {/* <Home />
        {<Login /> */}
        <ItemListContainer saludo={saludo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
