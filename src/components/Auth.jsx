import React from "react";
import Home from "./Home";
import LoginForm from "./LoginForm";

const Auth = () => {
  const user = true;
  return <>{user ? <LoginForm /> : <Home />}</>;
};

export default Auth;
