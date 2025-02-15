// import bg from "../images/bg.jpg"
// import { useState } from "react";
// import axios from "axios"
// import "../css/insert.css"
// import { useNavigate } from "react-router";


// const Insert=()=>{
//   const[input,setInput]=useState({});
//   const navigate=useNavigate()

//   const handleInput=(e)=>{
//       let name=e.target.name;
//       let value=e.target.value;
//       setInput(values=>({...values , [name]:value}))
//   }
//   const handleSubmit=()=>{
//       let api = "https://curd-operation-mern-loginsystem-5.onrender.com/books/datasave"
//      axios.post(api, input).then((res)=>{
//       console.log(res.data);
    
//       alert("Data Successfully Save")
//      })
// navigate("/dashborad/display")   
//   }

//   const backgroundStyle = {
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: '',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: 'white',
//         textAlign: 'center',
//       };

   



//     return(
//         <>
//       <center>
//       <div style={backgroundStyle}>
//       <div className="form-container">
//       <form className="application-form">
//         <h4 style={{ color:" #6b4b3a"}}>Library Membership Form</h4>
        
//         {/* Parent/Guardian Name */}
//         <div className="form-group">
//           <label>Parent/guardian name:</label>
//           <div className="name-fields">
//             <input type="text" placeholder="First" name="fnm" value={input.fnm} onChange={handleInput}/>
//             <input type="text" placeholder="Last" name="lnm" value={input.lnm} onChange={handleInput} />
//           </div>
//         </div>

//         {/* Child Age */}
//         <div className="form-group">
//           <label>How old your child will be when they start out the school year:</label>
//           <input type="number" placeholder="Enter age" name="age" value={input.age} onChange={handleInput} />
//         </div>

//         {/* Child Name */}
//         <div className="form-group">
//           <label>Child name:</label>
//           <div className="name-fields">
//             <input type="text" placeholder="First" name="cfnm" value={input.cfnm} onChange={handleInput} />
//             <input type="text" placeholder="Last" name="clnm" value={input.clnm} onChange={handleInput}/>
//           </div>
//         </div>

//         {/* School Name */}
//         <div className="form-group">
//           <label>The school he comes from:</label>
//           <input type="text" placeholder="Enter school name" name="snm" value={input.snm} onChange={handleInput}/>
//         </div>

//         {/* Home Address */}
//         <div className="form-group">
//           <label>Home address:</label>
        
//           <input type="text" placeholder="Street Address" name="add" value={input.add} onChange={handleInput} />

//           <div className="form-group">
//           <label style={{display: "block", marginBottom:"8px",fontWeight:"bold",color:" #6b4b3a"}}>Date of Birth:</label>

//           <input type="date"  placeholder="date of Birth" name="bdate" value={input.bdate} onChange={handleInput}
//           style={{ width: "100%",
//             padding: "10px",
//             marginTop: "5px",
//             border: "1px solid #ddd",
//             borderRadius: "5px",
//             fontSize: "16px",
//             backgroundColor:" #fff}"}}/>
//         </div>
//           <div className="address-fields">
//             <input type="text" placeholder="City" name="ct" value={input.ct} onChange={handleInput}/>
           
//             <select name="coun"  value={input.coun} onChange={handleInput}  >
//             <option value="">Country</option>
//               <option value="Romania">Romania</option>
//               <option value="USA">USA</option>
//               <option value="India">India</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <input type="text" placeholder="Postal / Zip Code" name="pin" value={input.pin} onChange={handleInput}/>
//         </div>

//         {/* Phone Number */}
//         <div className="form-group">
//           <label>Phone number:</label>
//           <input type="number" placeholder="### ### ####"  name="pho" value={input.pho} onChange={handleInput}/>
//         </div>
        

//         {/* Submit Button */}
//         <button  className="submit-button" onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//     </div>

      
//         </center> 
//         </>
//     )
// }

// export default Insert;








import bg from "../images/bg.jpg";
import { useState } from "react";
import axios from "axios";
import "../css/insert.css";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

const Insert = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "https://curd-operation-mern-loginsystem-5.onrender.com/books/datasave";
    axios.post(api, input).then((res) => {
      console.log(res.data);
      alert("Data Successfully Saved");
      navigate("/dashborad/display");
    });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "500px", backgroundColor: " #f7e8c1",margin:"20px"}}>
        <h4 className="text-center text-primary mb-4">Library Membership Form</h4>
        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Parent/Guardian Name:</label>
            <div className="d-flex gap-2">
              <input type="text" className="form-control" placeholder="First" name="fnm" value={input.fnm || ''} onChange={handleInput} required />
              <input type="text" className="form-control" placeholder="Last" name="lnm" value={input.lnm || ''} onChange={handleInput} required />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Child's Age:</label>
            <input type="number" className="form-control" placeholder="Enter age" name="age" value={input.age || ''} onChange={handleInput} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Child's Name:</label>
            <div className="d-flex gap-2">
              <input type="text" className="form-control" placeholder="First" name="cfnm" value={input.cfnm || ''} onChange={handleInput} required />
              <input type="text" className="form-control" placeholder="Last" name="clnm" value={input.clnm || ''} onChange={handleInput} required />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">School Name:</label>
            <input type="text" className="form-control" placeholder="Enter school name" name="snm" value={input.snm || ''} onChange={handleInput} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Home Address:</label>
            <input type="text" className="form-control" placeholder="Street Address" name="add" value={input.add || ''} onChange={handleInput} required />
            <div className="d-flex gap-2 mt-2">
              <input type="text" className="form-control" placeholder="City" name="ct" value={input.ct || ''} onChange={handleInput} required />
              <select name="coun" className="form-select" value={input.coun || ''} onChange={handleInput} required>
                <option value="">Country</option>
                <option value="Romania">Romania</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <input type="text" className="form-control mt-2" placeholder="Postal / Zip Code" name="pin" value={input.pin || ''} onChange={handleInput} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input type="number" className="form-control" placeholder="### ### ####" name="pho" value={input.pho || ''} onChange={handleInput} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth:</label>
            <input type="date" className="form-control" name="bdate" value={input.bdate || ''} onChange={handleInput} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Insert;
