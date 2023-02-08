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
import Account from "./pages/Account/Account";
import Feedback from "./pages/Feedback/Feedback";
import Franchise from "./pages/franchise/franchise";
import Integration from "./pages/Integration/Integration";
import Support from "./pages/Support/Support";
import Services from "./pages/Services/Services";
import Ticket from "./Components/Ticket/Ticket";
import Gallery from "./pages/Gallery/Gallery";
import Reviews from "./pages/Reviews/Reviews";
import AllStock from "./pages/oneStock/AllStock";
import DetailEvents from "./pages/DetailEvents/DetailEvents";


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='parks/:name' element={<Park/>}/>
                    <Route path='basket' element={<Basket/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                    <Route path='/vacancies' element={<Vacancies/>}/>
                    <Route path='/vacancies/:id' element={<Vacancies/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/account/*' element={<Account/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/about' element={<AboutCompany/>}/>
                    <Route path='/feedback' element={<Feedback/>}/>
                    <Route path='/franchise' element={<Franchise/>}/>
                    <Route path='/franchise' element={<Franchise/>}/>
                    <Route path='/integration' element={<Integration/>}/>
                    <Route path='/support' element={<Support/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
                    <Route path='/ticket' element={<Ticket/>}/>
                    <Route path='/allstock' element={<AllStock/>}/>
                    <Route path='/events' element={<DetailEvents/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;