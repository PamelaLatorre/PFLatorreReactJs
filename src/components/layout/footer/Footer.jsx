import { Outlet } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="divfooter">
        <div>
          <h4>REDES SOCIALES</h4>
        </div>
        <div className="imgfooter">
          <img
            className="imgfooter1"
            src="https://res.cloudinary.com/daaqcfs2o/image/upload/v1697286901/facebook_awp4ui.png"
            alt="Facebook"
          />
          <img
            className="imgfooter1"
            src="https://res.cloudinary.com/daaqcfs2o/image/upload/v1697286901/mail_pkqvxj.png"
            alt="Mail"
          />
          <img
            className="imgfooter1"
            src="https://res.cloudinary.com/daaqcfs2o/image/upload/v1697286902/Instagram_av2b5h.png"
            alt="Instagram"
          />
        </div>
        <div>
          <h4 className="footerh4">
            Copyright Pamela Latorre - 2023. Todos los derechos reservados.{" "}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
