import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="fixed-top" color="dark" dark  expand="md">
          <NavbarBrand  href="/"><h3>elmerMendoza</h3></NavbarBrand>
          <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className=" ml-auto " navbar onClick={toggle}>
                  <NavItem >
                    <NavLink href="#projects">projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#skills">skills</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#experience">experience</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#education">education</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/elmer-mendoza">gitHub</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='#reviews'>reviews</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
        </Navbar>
    </div>
  );
}

export default Navigation;