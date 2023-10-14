import * as React from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import { RxAvatar } from "react-icons/rx";
import logo from "../../../assets/images/logo.jpeg";
// import logo1 from "../../../assets/images/logo1.jpeg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const pages = ["Inicio", "Fibras naturales", "Aromas", "Textiles"];
const settings = ["Perfil", "Mi Cuenta", "Pedidos", "Cerrar Sesión"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo del sitio" />
        </Link>

        <ul className="categories">
          <Link to="/">
            <li>INICIO</li>
          </Link>
          <Link to="/category/fibrasNaturales">
            <li>FIBRAS NATURALES</li>
          </Link>
          <Link to="/category/aromas">
            <li>AROMAS</li>
          </Link>
          <Link to="/category/textiles">
            <li>TEXTILES</li>
          </Link>
        </ul>
        <Box
          sx={{ display: "flex", alignItems: "center", alignContent: "center" }}
        >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <RxAvatar />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <CartWidget />
      </div>
    </>
  );
}

export default ResponsiveAppBar;
