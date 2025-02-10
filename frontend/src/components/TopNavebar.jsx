// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// import logo from "../images/logo-new.png"


// const Topnavbar=()=>{
//   const[input, setInput]=useState("");
//  const navigate=useNavigate()

//   const handleSubmit=()=>{
//      navigate("/ragestration")
//   }



//     return(
//         <>
//        <Navbar bg="light" data-bs-theme="light" style={{backgroundColor:" #fdf4dc" }}>
//         <Container>
//           <Navbar.Brand href="#home" style={{marginLeft:"300px"}}><img src={logo}/></Navbar.Brand>
//           <Nav className="me-auto" >
//             <Nav.Link as={Link} to="home">Login</Nav.Link>
//             <Nav.Link as={Link} to="ragestration">Registration</Nav.Link>
//             <Form className="d-flex" style={{marginLeft:"30px"}}>
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search" value={input} onChange={(e)=>{setInput(e.target.value)}}
//             />
//             <Button variant="outline-success" onClick={handleSubmit}>Signin</Button>
//           </Form>
//           </Nav>
//         </Container>
//         <hr color="red"/>
//       </Navbar>
     
  
//         </>
//     )
// }

// export default  Topnavbar;






import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo-new.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Topnavbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/ragestration");
  };

  return (
    <>
      <Navbar expand="lg" bg="light" className="shadow" style={{ backgroundColor: "#fdf4dc" }}>
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home">
            <img src={logo} height="40" alt="Logo" />
          </Navbar.Brand>

          {/* Responsive Toggle Button */}
          <Navbar.Toggle aria-controls="navbarNav" />

          {/* Navbar Links & Search Form */}
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} to="/home" className="mx-2">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/ragestration" className="mx-2">
                Registration
              </Nav.Link>
              <Form className="d-flex ms-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button variant="outline-success" onClick={handleSubmit}>
                  Signin
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <hr color="red" />
    </>
  );
};

export default Topnavbar;
