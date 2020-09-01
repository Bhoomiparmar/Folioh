import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #364B9D;
  }
   .navbar-brand, .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: white;
    }
  }
  a {
  color: white;
  text-decoration: none;

  display: inline-block;
  padding: 10px 10px;
  position: relative;
  margin-right :30px
}
a:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 4px;
  left: 50%;
  position: absolute;
  background: cyan;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after { 
  width: 100%; 
  left: 0; 
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Folioh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about-us">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/pricing" >Pricing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/help-centre">Help Centre</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/sign-up">Sign up</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
