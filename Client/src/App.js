
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./Blog_App/CreateBolg/Navbar/Create";
import Home from "./Blog_App/CreateBolg/Navbar/Home";
import Login from "./Blog_App/Login/Login";
import Register from "./Blog_App/Login/Register";


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/createblog" element={<CreateBlog/>}/>
      </Routes>
      
    </div>
  );
}

export default App;


