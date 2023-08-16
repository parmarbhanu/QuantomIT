import './App.css';
import { Navigate, Route, Routes, Link } from "react-router-dom";
import AdminBody from './Admin/AdminBody/AdminBody';
import Home from './Home/Home';
import Login from './Admin/Pages/Login/Login';
import Single from './Home/Single';


function App() {
 


  return (
    <div className="App">
    {/* <button onClick={()=> {Navigate(`/Login`)}} >Login</button> */}
    {/* <button onClick={handleButtonClick}>Login</button> */}
 
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path='adminbody' element={<AdminBody/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='single/:id' element={<Single/>}/>
        </Routes>
    </div>
  );
}

export default App;





  

  
 