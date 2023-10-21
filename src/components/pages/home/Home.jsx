import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@mui/material";
import home1 from "../../../assets/images/home1.jpg";
import home2 from "../../../assets/images/home2.jpg";
import home3 from "../../../assets/images/home3.jpg";
import home4 from "../../../assets/images/home4.jpg";
import home5 from "../../../assets/images/home5.jpg";
import home6 from "../../../assets/images/home6.jpg";
import logo1 from "../../../assets/images/logo1.jpg";
import "./Home.css";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../pages/itemListContainer/ItemListContainer";

const Home = () => {
  const { categoryName } = useParams();
  const isFiltering = !!categoryName;

  return (
    <div>
      <div className={`home ${isFiltering ? "hidden" : ""}`}>
        <Typography variant="h4" gutterBottom color="primary.primary">
          ¡Bienvenido a Herminia!
        </Typography>
        <h2 color="secondary.secondary">Armá tus ambientes mas bonitos</h2>
      </div>
      <Carousel className={`carousel ${isFiltering ? "hidden" : ""}`}>
        <div>
          <img src={home1} alt="Imagen 1" />
        </div>
        <div>
          <img src={home2} alt="Imagen 2" />
        </div>
        <div>
          <img src={home3} alt="Imagen 3" />
        </div>
        <div>
          <img src={home4} alt="Imagen 4" />
        </div>
        <div>
          <img src={home5} alt="Imagen 5" />
        </div>
        <div>
          <img src={home6} alt="Imagen 6" />
        </div>
      </Carousel>
      <div className="home1">
        <p className="phome">
          <strong>Conocenos,</strong>
          <br /> y viví la mas linda experiencia <br />
          en aromas, textiles, fibras naturales y flores secas..
          <br /> Todo lo que necesitas para poner tu <em>lugar</em> mas bonito.
        </p>
        <img className="logohome" src={logo1} alt="Logo de la empresa" />
      </div>
      <ItemListContainer />
    </div>
  );
};

export default Home;
