
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
import Shopcatagory from './Components/Shopcatagory/Shopcatagory';
import Product from './Components/Product/Product';
import Cart from './Components/Cart/Cart';
import LoginSignup from './Components/Loginsignup/Loginsignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Bannerkid from './Components/Banner/bannerkid';
import Bannerwomen from './Components/Banner/bannerwomen';
import Bannermen from './Components/Banner/bannermen';
import Login from './Components/Loginsignup/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Shopcatagory banner={<Bannermen/>} category="men" />} />
          <Route path="/women" element={<Shopcatagory banner={<Bannerwomen/>} category="women" />} />
          <Route path="/kids" element={<Shopcatagory banner={<Bannerkid/>} category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
        <Route path="/cart" element={<Cart />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
