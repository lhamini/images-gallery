import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../images/logo.svg'

const navbarStyle = {
  backgroundColor: 'lightpink',
  color: 'black',

};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo alt={props.title} style={{ maxWidth: '13rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  )
}

export default Header