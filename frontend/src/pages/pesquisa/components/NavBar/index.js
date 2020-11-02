import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,

  NavbarText,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="https://www.sicredi.com.br/site/home">
          <img src="./logo-cor.svg" class="img-fluid" alt="Imagem responsiva" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarText>Processo Seletivo - Analista em RPA</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
