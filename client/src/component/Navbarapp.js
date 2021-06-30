import React from 'react'
import { NavDropdown,Form,FormControl,Button,Nav,Navbar} from 'react-bootstrap';

const Navbarapp = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src="logo.png" style={{width:'50px'}}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#home">Creche</Nav.Link>
      <Nav.Link href="#link">Jardin d'enfants</Nav.Link>
      <Nav.Link href="#link">Ecole Privee</Nav.Link>
      <Nav.Link href="#link">Club</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      
      <Nav.Link href="#link">Parent</Nav.Link>
      <Nav.Link href="#link">Partenaire</Nav.Link>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navbarapp
