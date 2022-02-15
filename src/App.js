import { Route, Routes, useNavigate } from "react-router-dom";
import ErrorPage from './Pages/ErrorPage';
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import PrivateRoute from './components/PrivateRoute';
import MainPage from './Pages/MainPage/MainPage';
import { useEffect } from "react";


function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.token){
      navigate('/')
    }else{
      navigate('/login')
    }
  }, [])
  

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<PrivateRoute><MainPage/></PrivateRoute>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signUp" element = {<SignUp/>}/>
        <Route path = '*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
