import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineDingding } from "react-icons/ai";
import './CustomerHeader.css'
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

function CustomerHeader() {
  
    
    return (
      <Navbar bg="dark" expand="lg" variant="dark" className="navbar mb-5">
        <Navbar.Brand className="brand">
          <Link to="/customer-home" className="homenavbar-logo">
            OCMS <AiOutlineDingding />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navItem">
          <Nav className="m-auto">
            <Form inline></Form>
          </Nav>

          <Nav>
                <Nav.Link href="/addEleTyp">Add Form</Nav.Link>
                <Nav.Link href="/adminList">List</Nav.Link>

                {/* <NavDropdown title="User" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile" style={{ color: "black" }}>
                    MyProfile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    style={{ color: "black" }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default CustomerHeader