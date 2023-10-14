import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="contenedorfooter">
        <div>
          <h4>REDES SOCIALES</h4>
        </div>
        <div>
          <img src="../../../assets/images/facebook.png" alt="Facebook" />
          <img src="../../../assets/images/Instagram.png" alt="Instagram" />
          <img src="../../../assets/images/mail.png" alt="Mail" />
        </div>
      </div>
    </>
  );
};

export default Footer;
