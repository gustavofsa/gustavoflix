import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";
import { LogoImage, HeaderWrapper } from "./styles";

import Button from "./components/ButtonLink";

import "./body.css";

const Header = () => (
  <HeaderWrapper className="Menu">
    <Link to="/">
      <LogoImage className="Logo" src={Logo} alt="Logo 'Gustavoflix'" />
    </Link>

    <Button as={Link} className="ButtonLink" to="/register/video">
      Novo Vídeo
    </Button>
  </HeaderWrapper>
);

export default Header;
