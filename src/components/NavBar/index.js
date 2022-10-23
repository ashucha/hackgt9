import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import IntroModal from '../IntroModal';

import "./index.css";

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
      className="navbar"
      expand = "true" 
      color="blue" 
      dark 
      light="true"
      {...args}>
        <NavbarBrand class="navbar-brand" href="/">SOUNDLE</NavbarBrand>
          <Nav className="me-auto" navbar>
              <NavItem>
              <IntroModal></IntroModal>
            </NavItem>
              
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;