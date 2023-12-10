import React, { useEffect, useContext } from "react";
import LoginForm from "../components/LoginForm";
import "../styles/Auth.css";
import Logo from "../images/logo.png";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

import { RxScissors } from "react-icons/rx";

function Auth() {
  return (
    <div className="auth-form">
      <LoginForm />
    </div>
  );
}

export default Auth;

// import React from "react";
// const Auth = () => {
//   return <div>AUTH</div>;
// };

// export default Auth;
