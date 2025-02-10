// import logo from "../images/logo-new.png"

// const Header=()=>{
//     return(
//         <>
//         <div style={{width:"100%",height:"45px", textAlign:"center", backgroundColor:"red", color:"white", fontSize:"18px"}}>
//             <p> <img src={logo} height={40} />  Indian's Largest Online Book Store</p>
//         </div>
//         </>
//     )
// }
// export default  Header;






import logo from "../images/logo-new.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "red",
          color: "white",
          fontSize: "18px",
        }}
      >
        <img src={logo} height={40} alt="Logo" className="me-2" />
        <p className="mb-0 text-center">India's Largest Online Book Store</p>
      </div>
    </>
  );
};

export default Header;
