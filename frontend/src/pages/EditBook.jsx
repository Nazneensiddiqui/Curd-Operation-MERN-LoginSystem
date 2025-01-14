import { useParams } from "react-router-dom";
import bg from "../images/bg.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const EditBook=()=>{
const {id}=useParams();
const[input,setInput]=useState({});
const Navigate=useNavigate();

const loadData=()=>{
       let api = "http://localhost:9000/books/editdatadisplay";
       axios.post(api , {id:id}).then((res)=>{
       setInput(res.data)
       })
}

useEffect(()=>{
    loadData()
},[])

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values , [name]:value}))
}
const handleSubmit=()=>{
    let api = "http://localhost:9000/books/editdatasave"
   axios.post(api, input).then((res)=>{
    console.log(res.data);
    alert("Data Successfully Update")
   })
   Navigate("/dashborad/update")
}

const backgroundStyle = {
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
    };

    return(
        <>
        
        <center>
      <div style={backgroundStyle}>
     
      <div className="form-container">
      <form className="application-form">
        <h1 style={{ color:" #6b4b3a"}}>Library Membership Form</h1>
        
        {/* Parent/Guardian Name */}
        <div className="form-group">
          <label>Parent/guardian name:</label>
          <div className="name-fields">
            <input type="text" placeholder="First" name="fname" value={input.fname} onChange={handleInput}/>
            <input type="text" placeholder="Last" name="lname" value={input.lname} onChange={handleInput} />
          </div>
        </div>

        {/* Child Age */}
        <div className="form-group">
          <label>How old your child will be when they start out the school year:</label>
          <input type="number" placeholder="Enter age" name="age" value={input.age} onChange={handleInput} />
        </div>

        {/* Child Name */}
        <div className="form-group">
          <label>Child name:</label>
          <div className="name-fields">
            <input type="text" placeholder="First" name="cfname" value={input.cfname} onChange={handleInput} />
            <input type="text" placeholder="Last" name="clname" value={input.clname} onChange={handleInput}/>
          </div>
        </div>

        {/* School Name */}
        <div className="form-group">
          <label>The school he comes from:</label>
          <input type="text" placeholder="Enter school name" name="school" value={input.school} onChange={handleInput}/>
        </div>

        {/* Home Address */}
        <div className="form-group">
          <label>Home address:</label>
        
          <input type="text" placeholder="Street Address" name="add" value={input.add} onChange={handleInput} />

          <div className="form-group">
          <label style={{display: "block", marginBottom:"8px",fontWeight:"bold",color:" #6b4b3a"}}>Date of Birth:</label>

          <input type="date"  placeholder="date of Birth" name="date" value={input.date} onChange={handleInput}
          style={{ width: "100%",
            padding: "10px",
            marginTop: "5px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
            backgroundColor:" #fff}"}}/>
        </div>
          <div className="address-fields">
            <input type="text" placeholder="City" name="city" value={input.city} onChange={handleInput}/>
           
            <select name="country"  value={input.country} onChange={handleInput}  >
            <option value="">Country</option>
              <option value="Romania">Romania</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <input type="text" placeholder="Postal / Zip Code" name="pincode" value={input.pincode} onChange={handleInput}/>
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone number:</label>
          <input type="number" placeholder="### ### ####"  name="phone" value={input.phone} onChange={handleInput}/>
        </div>
        

        {/* Submit Button */}
        <button  className="submit-button" type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </div>
    </center>
        </>
    )
}
export default EditBook;