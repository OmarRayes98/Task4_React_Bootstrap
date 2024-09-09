/* eslint-disable react/prop-types */
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { navbarData } from "../../constants/NavbarData";
import logo from "../../assets/images/logo.png";
import { useCallback, useEffect, useState } from "react";
import { IoMenu , IoCloseSharp } from "react-icons/io5";
import useThrottled from "../../hooks/useThrottled";

const NavBar = () => {

  const [isCollapsed, setIsCollapsed] = useState(true); // Assume it's collapsed initially

  const [isScrolled, setIsScrolled] = useState(false);


  const handleScroll = useCallback(() => {
    console.log(window.scrollY ,"handleScroll");
    setIsScrolled(window.scrollY > 39);
  }, []);

  const throttledScroll = useThrottled(handleScroll, 1000, 150);

  useEffect(() => {

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll]);

  const styleScrollHeader = {
    top:'0',
    backgroundColor:'#f6f6f6',
    boxShadow:'0 2px 2px #f6f6f6'
  }



  const handleToggle = () => {
    setIsCollapsed(prev=>!prev); // Toggle the collapsed state
  };

  const SimpleLink = ({ link }) => (
    <Nav.Link className="custom-link text-uppercase"  href={`#${link.name}`}>
      {link.name}
    </Nav.Link>
  );
  
  const DropdownMenu = ({ link }) => (
    <NavDropdown className="custom-link text-uppercase"  title={link.name}>
      {link.children.map((childLink) => (
        <NavDropdown.Item key={childLink.id}>{childLink.name}</NavDropdown.Item>
      ))}
    </NavDropdown>
  );

  

  return (

    <header className="header">
    <Navbar expand="lg" fixed="top" className="navbar bg-body-tertiary" style={isScrolled ?styleScrollHeader:null}>
      <Container className=" gx-sm-0 flex-wrap justify-content-end">
        <Navbar.Brand className="brand-size">
          <img src={logo} className="w-100 h-100" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle 
        aria-controls="navbarScroll" 
        className="border-0 navbar__toggle mx-auto" 
        onClick={handleToggle}>
          {
            isCollapsed ? <IoMenu className="fs-1"/>:<IoCloseSharp className="fs-1 animate-rotate"/>
          }
        </Navbar.Toggle>

        <Button className="border-0  order-lg-1 bg-primary-color ms-auto ms-sm-4" variant="primary" >Make an Appointment</Button>

        <Navbar.Collapse className="navbar_transition" id="navbarScroll">
          
          <Nav
            className="ms-auto my-2 my-lg-0 gap-3"
            navbarScroll
          >
            {
              navbarData.map((link)=> (

                !(link.children) ? (
                  <SimpleLink key={link.id} link={link} />
                ) : (
                  <DropdownMenu key={link.id} link={link} />
                )

              ))
            }
          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>
    </header>

  )
}

export default NavBar
