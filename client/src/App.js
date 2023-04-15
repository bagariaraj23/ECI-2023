import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
// import SingleProduct from "./pages/SingleProduct";
// import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Forgotpassword from "./pages/Forgotpassword";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Myticket from "./pages/Myticket";
import Leaderboard from "./pages/Leaderboard";
import Slogan from "./pages/Slogan";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="candichat" element={<OurStore />} />
          {/* <Route path="rewards/:id" element={<SingleProduct />} /> */}
          <Route path="colab" element={<Contact />} />
          {/* <Route path="Offline-ticket" element={<Checkout />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="otp" element={<Forgotpassword />} />
          <Route path="helpdesk" element={<Myticket />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="feedback" element={<Slogan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
