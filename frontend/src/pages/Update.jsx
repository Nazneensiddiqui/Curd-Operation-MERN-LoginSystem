import { useEffect, useState } from "react";
import bg from "../images/bg.jpg"
import Table from 'react-bootstrap/Table';
import axios from "axios";
import {useNavigate} from "react-router-dom"

import del from "../images/delimg.png";
import edit from "../images/edit.png";

const Update=()=>{
  const[myData , setMyData]=useState([]);
const navigate=useNavigate();

  //update data
  const loadData=()=>{
     let api = "https://curd-operation-mern-loginsystem-5.onrender.com/books/dataupdate";
     axios.get(api).then((res)=>{
      setMyData(res.data)
     })
  };

  useEffect(()=>{
    loadData()
  },[]);

  //delete data function
const delData=(id)=>{
  let api = "https://curd-operation-mern-loginsystem-5.onrender.com/books/datadelete";
      axios.post(api , {id:id}).then((res)=>{
  console.log(res.data);
  loadData()
})
}
//edit data function
const editData=(id)=>{
  navigate(`/dashborad/editData/${id}`)
}

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
    <td>
     <a href="#" onClick={()=>{editData(key._id)}}>
        <img src={edit} width={25} height={25}/></a>
      
      <a href="#" onClick={()=>{delData(key._id)}}>
        <img src={del }width={25} height={25}/></a>
    </td>
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
          <th  style={{color:"red"}}>Parent Name</th>
          <th  style={{color:"red"}}>Age</th>
          <th  style={{color:"red"}}> Name</th>
          <th  style={{color:"red"}}> School</th>
          <th  style={{color:"red"}}> Address</th>
          <th  style={{color:"red"}}>Date of Birth</th>
          <th  style={{color:"red"}}>City</th>
          <th  style={{color:"red"}}>Country</th>
          <th  style={{color:"red"}}>Pin Code</th>
          <th  style={{color:"red"}}>Phone No.</th>
          <th  style={{color:"red"}}>Action</th>
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

export default Update;