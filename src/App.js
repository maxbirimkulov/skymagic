import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Basket from "./pages/Basket/Basket";
import Park from "./pages/Park/Park";
<<<<<<< HEAD
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
=======
import Vacancies from "./Components/Vacancies/Vacancies";
>>>>>>> 94a99f6c884e0280a066b61fefef516eb1799ce5

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='parks/:name' element={<Park/>}/>
            <Route path='basket' element={<Basket/>}/>
            <Route path='/vacancies' element={<Vacancies/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </>
  );
}

export default App;
