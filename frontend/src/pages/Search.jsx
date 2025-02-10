// import bg from "../images/bg.jpg"
// import Table from 'react-bootstrap/Table';
// import { useState } from "react";
// import axios from "axios";

// const Search=()=>{
//     const[input, setInput]=useState("");
//     const[mydata , setMydata]=useState([])
  
//     const handleSubmit=()=>{
//        let api = "https://curd-operation-mern-loginsystem-5.onrender.com/books/datasearch"
//        axios.post(api, {input:input}).then((res)=>{
//         setMydata(res.data)
//        })
//     }
  

//     const ans=mydata.map((key)=>{
//       return(
//         <>
//       <tr align="center">
//       <td>{key.fname} {key.lname}</td>
//       <td>{key.age}</td>
//       <td>{key.cfname} {key.clname}</td>
//       <td>{key.school}</td>
//       <td>{key.add}</td>
//       <td>{key.date}</td>
//       <td>{key.city}</td>
//       <td>{key.country}</td>
//       <td>{key.pincode}</td>
//       <td>{key.phone}</td>
//     </tr>
      
//         </>
//       )
//     })

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
//             <center>
//                 <div style={{width:"400px", height:"200px", backgroundColor:" #fdf4dc",padding:"20px", color:" #6b4b3a"}}>
//                 Enter Child Name: <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} style={{width:"300px"}}/><br/><br/>
//                 <button onClick={handleSubmit} style={{width:"200px", color:"white", backgroundColor:" #6b4b3a", padding:"5px", borderRadius:"5px"}}>Search</button></div><br/><br/>
//             <Table striped bordered hover style={{ border:"2px solid #6b4b3a",fontSize:"13px"}} align="center">
//       <thead>
//         <tr>
         
//           <th  style={{color:"red"}}>Parent/Guardian Name</th>
//           <th  style={{color:"red"}}>Age</th>
//           <th  style={{color:"red"}}> Name</th>
//           <th  style={{color:"red"}}> School</th>
//           <th  style={{color:"red"}}> Address</th>
//           <th  style={{color:"red"}}>Date of Birth</th>
//           <th  style={{color:"red"}}>City</th>
//           <th  style={{color:"red"}}>Country</th>
//           <th  style={{color:"red"}}>Pin Code</th>
//           <th  style={{color:"red"}}>Phone No.</th>
//         </tr>
//       </thead>
//       <tbody>
//         {ans}
//       </tbody>
//       </Table>
         
//             </center>
         
//         </div>
//         </>
//       );
//     };

// export default Search;





import bg from "../images/bg.jpg";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState("");
  const [mydata, setMydata] = useState([]);
  const [error, setError] = useState(""); // Error state added

  const handleSubmit = () => {
    let api = "https://curd-operation-mern-loginsystem-5.onrender.com/books/datasearch";
    axios
      .post(api, { input: input })
      .then((res) => {
        if (res.data.length === 0) {
          setError("No data found for this name.");
          setMydata([]);
        } else {
          setMydata(res.data);
          setError("");
        }
      })
      .catch((err) => setError("Something went wrong!"));
  };

  const ans = mydata.map((key, index) => {
    return (
      <tr key={index} align="center">
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
    );
  });

  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "20px"
  };

  return (
    <div style={backgroundStyle}>
      <center>
        <div
          style={{
            width: "90%",
            maxWidth: "400px",
            padding: "20px",
            backgroundColor: "#fdf4dc",
            color: "#6b4b3a",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <label>Enter Child Name:</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #6b4b3a",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              color: "white",
              backgroundColor: "#6b4b3a",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Search
          </button>
        </div>

        {error && (
          <p style={{ color: "red", fontSize: "16px", marginTop: "10px" }}>
            {error}
          </p>
        )}

        {mydata.length > 0 && (
          <div style={{ width: "100%", overflowX: "auto", marginTop: "20px" }}>
            <Table
              striped
              bordered
              hover
              style={{
                border: "2px solid #6b4b3a",
                fontSize: "13px",
                minWidth: "800px",
              }}
              align="center"
            >
              <thead>
                <tr>
                  <th style={{ color: "red" }}>Parent/Guardian Name</th>
                  <th style={{ color: "red" }}>Age</th>
                  <th style={{ color: "red" }}>Name</th>
                  <th style={{ color: "red" }}>School</th>
                  <th style={{ color: "red" }}>Address</th>
                  <th style={{ color: "red" }}>Date of Birth</th>
                  <th style={{ color: "red" }}>City</th>
                  <th style={{ color: "red" }}>Country</th>
                  <th style={{ color: "red" }}>Pin Code</th>
                  <th style={{ color: "red" }}>Phone No.</th>
                </tr>
              </thead>
              <tbody>{ans}</tbody>
            </Table>
          </div>
        )}
      </center>
    </div>
  );
};

export default Search;
