import React from "react";
import Logo from "../../assets/img/logo.png";

// import "./header.css";

import { LogoImage, ButtonLink, HeaderWrapper } from "./styles";

const Header = () => (
  <HeaderWrapper className="Menu">
    <a href="/">
      <LogoImage className="Logo" src={Logo} alt="Logo 'Gustavoflix'" />
    </a>

    <ButtonLink as="a" className="ButtonLink" href="/">
      Novo Vídeo
    </ButtonLink>
  </HeaderWrapper>
);

export default Header;
