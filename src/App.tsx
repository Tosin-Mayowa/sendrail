import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from "./pages/SignIn";
import Verification from "./pages/Verification";
import ResetPass from "./pages/ResetPass";
import ForgotPassword from "./pages/ForgotPassword";
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";
import Overview from "./Component/Dashboard/Overview/Overview";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-Password" element={<ResetPass />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />

        </Route>
      </Routes>
    </>
  );

};

export default App;
