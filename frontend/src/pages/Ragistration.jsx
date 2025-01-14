import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import bg from "../images/bg.jpg"


const Ragestration=()=>{
   const [input , setInput]=useState({})

   const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values , [name]:value}))
         console.log(input)
}

const handleSubmit=()=>{
   let api="http://localhost:9000/users/ragestation";
  axios.post(api , input).then((res)=>{
   alert("Data Ragestered Succesfuly")
   console.log(res.data)
   setInput("")
  })
 
   
} 
//backgraound img ki css....................
 const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        
      };
    

return(
    <>
     <div style={backgroundStyle}>
    <center>
   <div style={{border:"1px solid #fdf4dc", backgroundColor:" #fdf4dc", width:"600px", height:"450px", borderRadius:"50px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}  >

   <Form style={{padding:"10px",color:"white",width:"70%"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Name</Form.Label>
    <Form.Control type="text" placeholder='Enter Name'  name='name' onChange={handleInput}/>
  </Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>  Enter City</Form.Label>
    <Form.Control type="text" placeholder='Enter City' name='city' onChange={handleInput} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Enter Email</Form.Label>
    <Form.Control type="email" placeholder='Enter Email' name='email' onChange={handleInput} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>  Enter Password</Form.Label>
    <Form.Control type="password" placeholder='Enter password' name='password' onChange={handleInput} />
  </Form.Group>
  <Button onClick={handleSubmit} style={{width:"200px" , padding:"10px", backgroundColor:"#6b4b3a" , color:"white"}}>Submit</Button>
</Form>
</div>
</center>
</div>

        </>
    )
}
export default Ragestration;

