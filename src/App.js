import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/category/:id" element={<ProductList />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/singleproduct/:id" element={<SingleProduct />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
