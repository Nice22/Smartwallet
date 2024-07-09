import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePassword from "./Pages/ChangePassword";
import EmailVerification from "./Pages/EmailVerification";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import ResetPasswordConfirm from "./Pages/ResetPasswordConfirm";
import Signup from "./Pages/Signup";
import Layout from "./High Order Function/Layout";
import "./css/main.css";
import { Provider } from "react-redux";
import Store from "./Store";
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="login/" element={<Login />}></Route>
            <Route path="signup/" element={<Signup />}></Route>
            <Route path="change/password/" element={<ChangePassword />}></Route>
            <Route path="reset/password/" element={<ResetPassword />}></Route>
            <Route path="dj-rest-auth/registration/account-confirm-email/:key/" element={<EmailVerification />}></Route>
            <Route path="reset/password/confirm/:uid/:token" element={<ResetPasswordConfirm />}></Route>
            <Route path="dashboard/" element={<Dashboard />}></Route>
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;