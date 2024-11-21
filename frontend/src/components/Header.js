import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const navbarStyle = {
  backgroundColor: 'lightblue',
  color: 'black',
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header