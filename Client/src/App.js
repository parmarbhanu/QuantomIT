import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import AdminBody from './Admin/AdminBody/AdminBody';
import Home from './Home/Home';
// import Login from './Admin/Pages/Login'

function App() {
  return (
    <div className="App">
    <button >Login</button>
     <Home/>
     {/* <AdminBody/> */}
      
  
      
    </div>
  );
}

export default App;
