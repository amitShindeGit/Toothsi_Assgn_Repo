import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Cart from "./Pages/Cart";
import ThankYouPage from "./Pages/ThankYouPage";
import { useSelector } from "react-redux";

function App() {
  let cart = useSelector((state) => (state.productReducer.cart));
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={cart && <Cart />} />
          <Route path="/thankYou" element={<ThankYouPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
