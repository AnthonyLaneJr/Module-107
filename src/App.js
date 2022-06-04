import "./App.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Catalog from "./component/catalog";
import Home from "./component/home"
import About from "./component/about"
import Cart from './component/cart'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
         
        <Routes>
         <Route path='/' element= {<Home />} />
         <Route path='/about' element= {<About />} />
         <Route path='/catalog' element= {<Catalog />} />
         <Route path='/cart' element= {<Cart />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
