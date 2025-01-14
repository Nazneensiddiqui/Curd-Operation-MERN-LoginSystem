import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Ragestration from "./pages/Ragistration";
import Dashborad from "./pages/dashborad";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Update from "./pages/Update";
import EditBook from "./pages/EditBook";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import ResetPassword from "./pages/resetPassword";



const App=()=>{
  
  return(
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="ragestration" element={<Ragestration/>}/>
 
  </Route>
  <Route path="dashborad" element={<Dashborad/>}>
  <Route path="admin" element={<Admin/>}/>
  <Route path="insert" element={<Insert/>}/>
  <Route path="display" element={<Display/>}/>
  <Route path="update" element={<Update/>}/>
  <Route path="editData/:id" element={<EditBook/>}/>
  <Route path="search" element={<Search/>}/>
  <Route path="reset" element={<ResetPassword/>}/>
  </Route>

</Routes>

</BrowserRouter>
    
    </>
  )
}
export default App;