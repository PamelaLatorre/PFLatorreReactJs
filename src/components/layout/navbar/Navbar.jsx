import CartWidget from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <h4>Logo</h4>
      <ul>
        <li>Inicio</li>
        <li>Fibras Naturales</li>
        <li>Aromas</li>
        <li>Textiles</li>
      </ul>
      <CartWidget />
    </div>
  );
};
