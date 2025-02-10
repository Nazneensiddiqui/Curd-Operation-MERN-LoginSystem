// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
// import "../css/dashborad.css"
// import {Link , Outlet} from "react-router-dom"
// import Footer from '../components/Footer';
// import { useNavigate } from 'react-router-dom';

// import logo from "../images/logo-new.png"

// import { GrDashboard } from "react-icons/gr";
// import { ImInsertTemplate } from "react-icons/im";
// import { BsPcDisplayHorizontal } from "react-icons/bs";
// import { GrDocumentUpdate } from "react-icons/gr";
// import { TbWorldSearch } from "react-icons/tb";
// import { GrUserAdmin } from "react-icons/gr";


// const Dashborad=()=> {
//   const[username , setUsername]=useState("")
//   const [useremail , setUseremail]=useState("")
// const navigate=useNavigate()

// useEffect(()=>{
//   if(localStorage.getItem("username" == null))
//   {
//     navigate("/home")
//   }
//   else{
//     setUsername(localStorage.getItem("username"))
//     setUseremail(localStorage.getItem("useremail"))
//   }
// },[])


//   return (
//     <>
   
//     <div className="app-container">
//       {/* Top Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
//         <Navbar.Brand href="#" style={{paddingLeft:"50px"}} onClick={()=>{navigate("/dashborad/admin")}}><GrUserAdmin />  Admin Dashboard</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ml-auto" style={{marginLeft:"900px"}}>
//             <Nav.Link href="#"><img src={logo} width={40} height={30}/></Nav.Link>
//             <Nav.Link href="#" onClick={()=>{navigate("/home")}}>Logout</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <Container fluid>
//         <Row>
//           {/* Sidebar */}
//           <Col md={2} className="sidebar">
//             <Nav defaultActiveKey="/" className="flex-column">
//               <Nav.Link as={Link} to="/dashborad"><GrDashboard/>   Dashboard</Nav.Link>
//               <Nav.Link as={Link} to="insert"><ImInsertTemplate />  Insert</Nav.Link>
//               <Nav.Link as={Link} to="display"> <BsPcDisplayHorizontal/>   Display</Nav.Link>
//               <Nav.Link as={Link} to="update"><GrDocumentUpdate/>   Update</Nav.Link>
//               <Nav.Link as={Link} to="search"><TbWorldSearch/>    Search</Nav.Link>
//             </Nav>
//           </Col>

//           {/* Main Content */}
//           <Col md={10} className="content">
//             <div className="content-area">
//             <h3 align="center" style={{color:" #6b4b3a"}}>Welcome to the Admin Dashboard</h3>
//               <p align="center" style={{color:" #6b4b3a"}}> Name : {username}. Email : {useremail}         <Link to="reset">Reset-password</Link>                 </p>
             
//               {/* Example scrollable content */}
             
//               <div className="scrollable-content">
              
//                 <Outlet/>
//           </div>
//                 <Footer/>
          
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
    
//     </>
//   );
// }

// export default Dashborad;






import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import "../css/dashborad.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from '../components/Footer';

import logo from "../images/logo-new.png";

import { GrDashboard, GrUserAdmin } from "react-icons/gr";
import { ImInsertTemplate } from "react-icons/im";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { GrDocumentUpdate } from "react-icons/gr";
import { TbWorldSearch } from "react-icons/tb";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/home");
    } else {
      setUsername(localStorage.getItem("username") || "");
      setUseremail(localStorage.getItem("useremail") || "");
    }
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/dashboard/admin")} className="ms-3">
            <GrUserAdmin /> Admin Dashboard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                <img src={logo} width={40} height={30} alt="Logo" />
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/home")}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="mt-5">
        <Row>
          {/* Sidebar */}
          <Col  md={2}  className="sidebar">
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Link as={Link} to="#"><GrDashboard /> Dashboard</Nav.Link>
              <Nav.Link as={Link} to="insert"><ImInsertTemplate /> Insert</Nav.Link>
              <Nav.Link as={Link} to="display"><BsPcDisplayHorizontal /> Display</Nav.Link>
              <Nav.Link as={Link} to="update"><GrDocumentUpdate /> Update</Nav.Link>
              <Nav.Link as={Link} to="search"><TbWorldSearch /> Search</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col lg={10} md={9} sm={8} className="content p-4">
            <div className="content-area text-center">
              <h3 style={{ color: "#6b4b3a" }}>Welcome to the Admin Dashboard</h3>
              <p style={{ color: "#6b4b3a" }}>
                Name: {username} | Email: {useremail}  
                <Link to="reset" className="ms-2">Reset Password</Link>
              </p>

              {/* Scrollable Content */}
              <div className="scrollable-content">
                <Outlet />
              </div>

              {/* Footer */}
              <Footer />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
