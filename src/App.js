import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navigate to='/login'/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
