import React from "react";
import Logo from "../../assets/img/Logo.png";

import "./header.css";

import ButtonLink from "../ButtonLink";

const Header = () => (
  <nav className="Menu">
    <a href="/">
      <img className="Logo" src={Logo} alt="Logo 'Gustavoflix'" />
    </a>

    <ButtonLink className="ButtonLink" href="/">
      Novo Vídeo
    </ButtonLink>
  </nav>
);

export default Header;
