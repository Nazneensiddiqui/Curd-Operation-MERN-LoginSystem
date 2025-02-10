// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axios from "axios"
// import bg from "../images/bg.jpg"


// const Ragestration=()=>{
//    const [input , setInput]=useState({})

//    const handleInput=(e)=>{
//          let name=e.target.name;
//          let value=e.target.value;
//          setInput(values=>({...values , [name]:value}))
//          console.log(input)
// }

// const handleSubmit=()=>{
//    let api="https://curd-operation-mern-loginsystem-5.onrender.com/users/ragestation";
//   axios.post(api , input).then((res)=>{
//    alert("Data Ragestered Succesfuly")
//    console.log(res.data)
//    setInput("")
//   })
 
   
// } 
// //backgraound img ki css....................
//  const backgroundStyle = {
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
    

// return(
//     <>
//      <div style={backgroundStyle}>
//     <center>
//    <div style={{border:"1px solid #fdf4dc", backgroundColor:" #fdf4dc", width:"600px", height:"450px", borderRadius:"50px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}  >

//    <Form style={{padding:"10px",color:"white",width:"70%"}}>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Enter Name</Form.Label>
//     <Form.Control type="text" placeholder='Enter Name'  name='name' onChange={handleInput}/>
//   </Form.Group>
// <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>  Enter City</Form.Label>
//     <Form.Control type="text" placeholder='Enter City' name='city' onChange={handleInput} />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label> Enter Email</Form.Label>
//     <Form.Control type="email" placeholder='Enter Email' name='email' onChange={handleInput} />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>  Enter Password</Form.Label>
//     <Form.Control type="password" placeholder='Enter password' name='password' onChange={handleInput} />
//   </Form.Group>
//   <Button onClick={handleSubmit} style={{width:"200px" , padding:"10px", backgroundColor:"#6b4b3a" , color:"white"}}>Submit</Button>
// </Form>
// </div>
// </center>
// </div>

//         </>
//     )
// }
// export default Ragestration;





import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import bg from "../images/bg.jpg";
import {message} from "antd"
import { useNavigate } from "react-router";


const Ragestration = () => {
  const [input, setInput] = useState({});
const navigate=useNavigate()
   
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = () => {
    let api = "https://curd-operation-mern-loginsystem-5.onrender.com/users/ragestation";
    axios.post(api, input).then((res) => {
     message.success ("Data Registered Successfully");
     navigate("/home")
      console.log(res.data);
      setInput({});
    });
  };

  // Background CSS
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

  // Form Box CSS
  const formContainerStyle = {
    backgroundColor: "#fdf4dc",
    padding: "30px",
    borderRadius: "20px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  }

  return (
    <>
      <div style={backgroundStyle}>
        <center>
          <h1 style={{ color: "#fff", marginBottom: "20px" }}>Registration Page</h1>
          <div style={formContainerStyle}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={handleInput}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  onChange={handleInput}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleInput}
                  style={{ padding: "10px", fontSize: "16px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleInput}
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

export default Ragestration;

