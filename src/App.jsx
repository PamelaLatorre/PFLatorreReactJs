import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import Navbar from "./components/layout/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/itemListContainer" element={<ItemListContainer />} />
            <Route
              path="/itemDetailContainer"
              element={<ItemDetailContainer />}
            />
            <Route path="/cartContainer" element={<CartContainer />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>{" "}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
