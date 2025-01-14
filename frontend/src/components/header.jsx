import logo from "../images/logo-new.png"

const Header=()=>{
    return(
        <>
        <div style={{width:"100%",height:"45px", textAlign:"center", backgroundColor:"red", color:"white", fontSize:"18px"}}>
            <p> <img src={logo} height={40} />  Indian's Largest Online Book Store</p>
        </div>
        </>
    )
}
export default  Header;