import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import View from "./pages/View";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Weather from "./pages/Weather";



function App() {
  return (
    <>
    <Routes>
    <Route path = '/' element={<Home />} />
    <Route path = '/create' element={<Create />} />
    <Route path = '/update/:id' element={<Update />} />
    <Route path = '/view/:id' element={<View />} />
    <Route path = '/login' element={<Login />} />
    <Route path = '/signup' element={<Signup />} />
    <Route path = '/profile' element={<Profile/>} />
    <Route path = '/weather' element={<Weather />} />
    </Routes>
    </>

  );
}

export default App;
