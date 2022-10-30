import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Basket from "./pages/Basket/Basket";
import Park from "./pages/Park/Park";
import Vacancies from "./Components/Vacancies/Vacancies";

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
        </Routes>
    </>
  );
}

export default App;
