import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";

function App() {
  let saludo = "Hola! Como estas?";
  return (
    <div>
      <Navbar />
      {/* <Home />
      <Login /> */}
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
