// import bg from "../images/bg.jpg"

// import axios from 'axios';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import {useNavigate} from "react-router-dom";
// import {message} from "antd"

// const Home=()=>{
//     const[email, setEmail]=useState("");
//     const[password, setPassword]=useState("")
//     const navigate=useNavigate()
    
//       const handleSubmit=async()=>{
//     try {
//       let api="https://curd-operation-mern-loginsystem-5.onrender.com/users/userlogin";
//       const response= await axios.post(api , {email:email ,password: password})
        
//         if(response.status==200)
//         {
        
//          localStorage.setItem("username" , response.data.name)
//          localStorage.setItem("useremail", response.data.email)
//          localStorage.setItem("userid" , response.data._id)
        
//         console.log(response.data);
//         message.success(response.data.msg)
//           navigate("/dashborad")
//         }
//     } catch (error) {
//       message.error(error.response.data.msg)
//         //  alert(error.response.data.msg)
//     }
//       } 


//     const backgroundStyle = {
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: '500px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: 'white',
//         textAlign: 'center',
        
//       };
    
//       return (
//         <>
//         <div style={backgroundStyle}>
//         <center>
//        <h1 style={{color:"#ffff"}}>Login Page</h1> 
//        <div style={{border:"1px solid #fdf4dc", backgroundColor:"#fdf4dc", width:"600px", height:"300px", borderRadius:"50px"}}  >
//        <Form style={{width:"70%", marginTop:"30px", marginBottom:"30px",color:" #6b4b3a"}}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label> Enter Email</Form.Label>
//         <Form.Control type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>  Enter Password</Form.Label>
//         <Form.Control type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
//       </Form.Group>
//       <Button onClick={handleSubmit}style={{width:"200px" , padding:"10px",backgroundColor:"#6b4b3a" , color:"white"}}>Submit</Button>
//     </Form>
//     </div>
//     </center>
//         </div>
//         </>
//       );
//     };

// export default Home;




import bg from "../images/bg.jpg";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      let api =
        "https://curd-operation-mern-loginsystem-5.onrender.com/users/userlogin";
      const response = await axios.post(api, { email: email, password: password });

      if (response.status === 200) {
        localStorage.setItem("username", response.data.name);
        localStorage.setItem("useremail", response.data.email);
        localStorage.setItem("userid", response.data._id);

        console.log(response.data);
        message.success(response.data.msg);
        navigate("/dashborad");
      }
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  };

  const formContainerStyle = {
    backgroundColor: "#fdf4dc",
    padding: "30px",
    borderRadius: "20px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div style={backgroundStyle}>
        <center>
          <h1 style={{ color: "#fff", marginBottom: "20px" }}>Login Page</h1>
          <div style={formContainerStyle}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Enter Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </Form.Group>
              <Button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#6b4b3a",
                  color: "white",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </center>
      </div>
    </>
  );
};

export default Home;
