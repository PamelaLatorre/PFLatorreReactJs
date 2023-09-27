import { ThemeProvider } from "@emotion/react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";
import { customTheme } from "./themeConfig";

function App() {
  let saludo = "Hola! Como estas?";
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        {/* <Home />
      <Login /> */}
        <ItemListContainer saludo={saludo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
