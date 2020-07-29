import React from "react";
import Logo from "../../assets/img/Logo.png";

import "./header.css";

import Button from "../Button";

const Header = () => (
  <nav className="Menu">
    <a href="/">
      <img className="Logo" src={Logo} alt="Logo 'Gustavoflix'" />
    </a>

    <Button as="a" className="ButtonLink" href="/">
      Novo Vídeo
    </Button>
  </nav>
);

export default Header;
