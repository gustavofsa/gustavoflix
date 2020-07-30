import React from "react";
import Logo from "../../assets/img/logo.png";

import { LogoImage, HeaderWrapper } from "./styles";

import Button from "./components/ButtonLink";

const Header = () => (
  <HeaderWrapper className="Menu">
    <a href="/">
      <LogoImage className="Logo" src={Logo} alt="Logo 'Gustavoflix'" />
    </a>

    <Button as="a" className="ButtonLink" href="/">
      Novo Vídeo
    </Button>
  </HeaderWrapper>
);

export default Header;
