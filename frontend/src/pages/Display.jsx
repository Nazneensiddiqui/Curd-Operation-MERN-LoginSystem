import { useEffect, useState } from "react";
import bg from "../images/bg.jpg"
import Table from 'react-bootstrap/Table';
import axios from "axios";

const Display=()=>{
  const[myData , setMyData]=useState([]);

  const loadData=()=>{
     let api = "https://curd-operation-mern-loginsystem-3.onrender.com/books/datadisplay";
     axios.get(api).then((res)=>{
      console.log(res.data)
      setMyData(res.data)
     })
  };

  useEffect(()=>{
    loadData()
  },[]);

  let sno=0;
  const ans=myData.map((key)=>{
sno++;
return(
  <>
  <tr align="center">
    <td>{sno}</td>
    <td>{key.fname} {key.lname}</td>
    <td>{key.age}</td>
    <td>{key.cfname} {key.clname}</td>
    <td>{key.school}</td>
    <td>{key.add}</td>
    <td>{key.date}</td>
    <td>{key.city}</td>
    <td>{key.country}</td>
    <td>{key.pincode}</td>
    <td>{key.phone}</td>
  </tr>
  </>
)
  })
  


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
      <Table striped bordered hover style={{ border:"2px solid #6b4b3a",fontSize:"10px"}} align="center">
      <thead>
        <tr>
          <th  style={{color:"red"}}>S.No.</th>
          <th  style={{color:"red"}}>Parent/Guardian Name</th>
          <th  style={{color:"red"}}>Age</th>
          <th  style={{color:"red"}}> Name</th>
          <th  style={{color:"red"}}> School</th>
          <th  style={{color:"red"}}> Address</th>
          <th  style={{color:"red"}}>Date of Birth</th>
          <th  style={{color:"red"}}>City</th>
          <th  style={{color:"red"}}>Country</th>
          <th  style={{color:"red"}}>Pin Code</th>
          <th  style={{color:"red"}}>Phone No.</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
         </div>
      
         
        </>
    )
}

export default Display;