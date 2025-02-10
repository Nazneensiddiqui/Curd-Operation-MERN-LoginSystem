// import google from "../images/googleplay.png";
// import face from "../images/facebook.png";
// import twit from "../images/twitter.png";
// import inst from "../images/instagram.png";
// import link from "../images/linkedin.png";
// import pint from "../images/pinterest.png";
// import you from "../images/youtube.png";


// const Footer=()=>{
//     return(
//         <>
//         <hr/>
//         <div style={{display:"flex", justifyContent:"space-around", padding:"20px", marginTop:"50px",listStyle:"none", lineHeight:"25px"}}>
//          <div>
//           <ul style={{listStyle:"none"}}>
//             <li style={{color:"red",fontSize:"20px",fontStyle:"italic",fontWeight:"bold"}}>Company</li>
//             <li>About Us</li>
//              <li>Career</li>
//              <li>Blog</li>
//              <li>Contact Us</li>

//         </ul> 
//             </div> 
//             <div>
//             <ul style={{listStyle:"none"}}>
//             <li style={{color:"red",fontSize:"20px",fontStyle:"italic",fontWeight:"bold"}}>Policies</li>
//             <li>Privacy Policies</li>
//              <li>Terms of Use</li>
//              <li>Secure Shopping</li>
//              <li>Copyright Policy</li>

//         </ul> 
//             </div> 
//             <div>
//             <ul style={{listStyle:"none"}}>
//             <li style={{color:"red",fontSize:"20px",fontStyle:"italic",fontWeight:"bold"}}>Help</li>
//             <li>Payment</li>
//              <li>Shipping</li>
//              <li>Return</li>
//              <li>FAQ</li>

//         </ul> 
//             </div>
//             <div>
//             <ul style={{listStyle:"none"}}>
//             <li style={{color:"red",fontSize:"20px",fontStyle:"italic", fontWeight:"bold"}}>Misc</li>
//             <li>Affiliate</li>
//              <li>Sitemap</li>
//              </ul>

//              <p style={{color:"red",fontSize:"20px",fontStyle:"italic",fontWeight:"bold"}}>Download Our App</p> 
//              <img src={google} width={140} height={40} />
//             </div>
           
//         </div>
//         <div  style={{ display:"flex", gap:"10px", marginLeft:"400px"}} >
//             <img src={face} width={30} height={30}/><br/>
//             <img src={twit} width={30} height={30}/><br/>
//             <img src={inst} width={30} height={30}/><br/>
//             <img src={link} width={30} height={30}/><br/>
//             <img src={pint} width={30} height={30}/><br/>
//             <img src={you} width={30} height={30}/><br/>
//         </div><br/>
//         <p style={{fontSize:"16px",}} align="center">Copyright © 2025 . Bookswagon.com. All Rights Reserved</p>
//         </>
//     )
// }
// export default Footer;






import google from "../images/googleplay.png";
import face from "../images/facebook.png";
import twit from "../images/twitter.png";
import inst from "../images/instagram.png";
import link from "../images/linkedin.png";
import pint from "../images/pinterest.png";
import you from "../images/youtube.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="container-fluid" style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
        <div className="row text-center text-md-start">
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li style={{ color: "red", fontSize: "20px", fontStyle: "italic", fontWeight: "bold" }}>Company</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li style={{ color: "red", fontSize: "20px", fontStyle: "italic", fontWeight: "bold" }}>Policies</li>
              <li>Privacy Policies</li>
              <li>Terms of Use</li>
              <li>Secure Shopping</li>
              <li>Copyright Policy</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li style={{ color: "red", fontSize: "20px", fontStyle: "italic", fontWeight: "bold" }}>Help</li>
              <li>Payment</li>
              <li>Shipping</li>
              <li>Return</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li style={{ color: "red", fontSize: "20px", fontStyle: "italic", fontWeight: "bold" }}>Misc</li>
              <li>Affiliate</li>
              <li>Sitemap</li>
            </ul>
            <p style={{ color: "red", fontSize: "20px", fontStyle: "italic", fontWeight: "bold" }}>Download Our App</p>
            <img src={google} width={140} height={40} alt="Google Play" />
          </div>
        </div>

        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
          <img src={face} width={30} height={30} alt="Facebook" />
          <img src={twit} width={30} height={30} alt="Twitter" />
          <img src={inst} width={30} height={30} alt="Instagram" />
          <img src={link} width={30} height={30} alt="LinkedIn" />
          <img src={pint} width={30} height={30} alt="Pinterest" />
          <img src={you} width={30} height={30} alt="YouTube" />
        </div>

        <p className="text-center mt-3" style={{ fontSize: "16px" }}>
          Copyright © 2025 . Bookswagon.com. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
