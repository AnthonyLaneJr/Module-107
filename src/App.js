import "./App.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Catalog from "./component/catalog";
import Home from "./component/home";
import About from "./component/about";
import Cart from './component/cart';
import Admin from './component/admin';
import Todo from './component/todo';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStoreProvider from "./context/globalStoreProvider";

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
      <BrowserRouter>
        <Navbar></Navbar>
         
        <Routes>
         <Route path='/' element= {<Home />} />
         <Route path='/about' element= {<About />} />
         <Route path='/catalog' element= {<Catalog />} />
         <Route path='/cart' element= {<Cart />} />
         <Route path='/admin' element= {<Admin />} />
         <Route path='/todo' element= {<Todo />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  );
}
export default App;
