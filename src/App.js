import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import View from "./pages/View";



function App() {
  return (
    <>
    <Routes>
    <Route path = '/' element={<Home />} />
    <Route path = '/create' element={<Create />} />
    <Route path = '/update/:id' element={<Update />} />
    <Route path = '/view/:id' element={<View />} />
    </Routes>
    </>

  );
}

export default App;
