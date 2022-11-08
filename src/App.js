import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Basket from "./pages/Basket/Basket";
import Park from "./pages/Park/Park";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Vacancies from "./pages/Vacancies/Vacancies";
import AboutCompany from "./pages/AboutCompany/aboutCompany";


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='parks/:name' element={<Park/>}/>
            <Route path='basket' element={<Basket/>}/>
            <Route path='/career' element={<Vacancies/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<AboutCompany/>}/>
          </Route>

        </Routes>
    </>
  );
}

export default App;
